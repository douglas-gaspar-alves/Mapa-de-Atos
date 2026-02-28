import { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY as string });

const imageCache = new Map<string, string>();
const pendingRequests = new Map<string, Promise<string>>();

export function GeminiImage({ prompt, alt, className }: { prompt: string, alt: string, className?: string }) {
  const [imageUrl, setImageUrl] = useState<string | null>(imageCache.get(prompt) || null);
  const [loading, setLoading] = useState(!imageCache.has(prompt));

  useEffect(() => {
    if (imageCache.has(prompt)) {
      setImageUrl(imageCache.get(prompt)!);
      setLoading(false);
      return;
    }

    let isMounted = true;
    
    async function fetchImage() {
      try {
        let url: string;
        
        // Prevent duplicate requests for the same prompt
        if (pendingRequests.has(prompt)) {
          url = await pendingRequests.get(prompt)!;
        } else {
          const requestPromise = (async () => {
            const response = await ai.models.generateContent({
              model: 'gemini-2.5-flash-image',
              contents: {
                parts: [
                  {
                    text: prompt,
                  },
                ],
              },
              config: {
                imageConfig: {
                  aspectRatio: "16:9",
                }
              }
            });

            for (const part of response.candidates?.[0]?.content?.parts || []) {
              if (part.inlineData) {
                const base64EncodeString = part.inlineData.data;
                return `data:image/jpeg;base64,${base64EncodeString}`;
              }
            }
            throw new Error("No image data returned");
          })();
          
          pendingRequests.set(prompt, requestPromise);
          url = await requestPromise;
          imageCache.set(prompt, url);
          pendingRequests.delete(prompt);
        }

        if (isMounted) {
          setImageUrl(url);
          setLoading(false);
        }
      } catch (error) {
        console.error("Failed to generate image", error);
        if (isMounted) setLoading(false);
        pendingRequests.delete(prompt);
      }
    }

    fetchImage();

    return () => {
      isMounted = false;
    };
  }, [prompt]);

  if (loading) {
    return (
      <div className={`bg-stone-200 flex flex-col items-center justify-center ${className}`}>
        <span className="text-stone-500 text-[10px] font-bold uppercase tracking-widest mb-2">Gerando com IA</span>
        <div className="w-5 h-5 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!imageUrl) {
    return (
      <div className={`bg-stone-200 flex items-center justify-center ${className}`}>
        <span className="text-stone-400 text-sm">Erro ao gerar imagem</span>
      </div>
    );
  }

  return <img src={imageUrl} alt={alt} className={className} />;
}
