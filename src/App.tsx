/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, useMap } from '@vis.gl/react-google-maps';
import { locations, LocationGroup } from './data/events';
import { MapPin, BookOpen, Map as MapIcon, X, Calendar, Book, Menu, ChevronRight } from 'lucide-react';
import { GeminiImage } from './components/GeminiImage';

function MapController({ selectedLocation }: { selectedLocation: LocationGroup | null }) {
  const map = useMap();
  
  useEffect(() => {
    if (map && selectedLocation) {
      map.panTo({ lat: selectedLocation.lat, lng: selectedLocation.lng });
      map.setZoom(8);
    }
  }, [map, selectedLocation]);

  return null;
}

export default function App() {
  const [selectedLocation, setSelectedLocation] = useState<LocationGroup | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [apiKey] = useState(import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '');

  const allEvents = useMemo(() => {
    const flatEvents = locations.flatMap(loc => 
      loc.events.map(event => ({ ...event, location: loc }))
    );
    return flatEvents.sort((a, b) => a.id - b.id);
  }, []);

  const handleEventSelect = (location: LocationGroup, eventId: number) => {
    setSelectedLocation(location);
    setIsPanelOpen(true);
    setIsMenuOpen(false);
    
    setTimeout(() => {
      const element = document.getElementById(`event-${eventId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  if (!apiKey) {
    return (
      <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-md max-w-md w-full text-center">
          <MapIcon className="w-12 h-12 text-stone-400 mx-auto mb-4" />
          <h1 className="text-2xl font-serif text-stone-800 mb-2">Google Maps API Key Required</h1>
          <p className="text-stone-600 mb-6">
            Para visualizar o mapa interativo do Livro de Atos, você precisa configurar a variável de ambiente <code className="bg-stone-100 px-2 py-1 rounded text-sm">VITE_GOOGLE_MAPS_API_KEY</code>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-stone-50 font-sans overflow-hidden">
      <header className="bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between shadow-sm z-40 relative">
        <div className="flex items-center gap-3">
          <BookOpen className="w-6 h-6 text-indigo-600" />
          <h1 className="text-xl font-serif font-medium text-stone-800">Mapa Interativo: Livro de Atos</h1>
        </div>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-600"
          aria-label="Menu de Eventos"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>
      
      <div className="flex flex-1 relative overflow-hidden">
        {/* Events Timeline Menu (Right Side) */}
        <aside 
          className={`absolute top-0 right-0 h-full w-full sm:w-80 md:w-96 bg-white border-l border-stone-200 flex flex-col shadow-2xl z-30 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-4 border-b border-stone-200 bg-stone-50 flex items-center justify-between">
            <h2 className="text-lg font-serif font-medium text-stone-800">Linha do Tempo</h2>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-1 hover:bg-stone-200 rounded-full transition-colors text-stone-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {allEvents.map((event) => (
              <button
                key={event.id}
                onClick={() => handleEventSelect(event.location, event.id)}
                className="w-full text-left p-3 rounded-lg hover:bg-indigo-50 transition-colors border border-transparent hover:border-indigo-100 flex items-start gap-3 group"
              >
                <div className="shrink-0 bg-indigo-100 text-indigo-700 font-bold text-xs px-2 py-1 rounded mt-0.5">
                  {event.order}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-stone-800 truncate group-hover:text-indigo-700 transition-colors">
                    {event.evento}
                  </p>
                  <p className="text-xs text-stone-500 mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span className="truncate">{event.location.name}</span>
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-stone-300 group-hover:text-indigo-400 shrink-0 mt-2" />
              </button>
            ))}
          </div>
        </aside>

        {/* Side Panel (Left Side) */}
        <aside 
          className={`absolute md:relative top-0 left-0 h-full w-full md:w-96 lg:w-[450px] bg-white border-r border-stone-200 flex flex-col shadow-2xl z-20 transition-transform duration-300 ease-in-out ${
            selectedLocation && isPanelOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
        >
          {selectedLocation ? (
            <div className="flex flex-col h-full">
              {/* Panel Header with Ancient Location Image */}
              <div className="relative h-48 shrink-0 bg-stone-900">
                <GeminiImage 
                  prompt={`A realistic, cinematic, historical biblical illustration of the ancient city/location of ${selectedLocation.name} during the 1st century. Ancient middle eastern setting, high quality, dramatic lighting, wide landscape.`}
                  alt={`Local antigo de ${selectedLocation.name}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <button 
                  onClick={() => setIsPanelOpen(false)}
                  className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-sm transition-colors md:hidden"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="flex items-center gap-2 text-white/90 mb-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium uppercase tracking-wider">Localização</span>
                  </div>
                  <h2 className="text-2xl font-serif font-medium text-white shadow-sm">{selectedLocation.name}</h2>
                </div>
              </div>

              {/* Events List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-stone-50 scroll-smooth">
                {selectedLocation.events.map((event) => (
                  <div key={event.id} id={`event-${event.id}`} className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden scroll-mt-6">
                    <div className="relative h-40 bg-stone-900">
                      <GeminiImage 
                        prompt={`A realistic, cinematic, historical biblical illustration of: ${event.evento}. Context: ${event.description}. Ancient 1st century setting, high quality, dramatic lighting.`}
                        alt={event.evento}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-bold px-2.5 py-1 rounded shadow-md flex items-center gap-1">
                        <span>Evento</span>
                        <span className="text-indigo-200">#</span>
                        <span className="text-base">{event.order}</span>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <h3 className="text-lg font-serif font-medium text-stone-900 mb-3 leading-tight">
                        {event.evento}
                      </h3>
                      
                      <div className="flex flex-wrap gap-3 mb-4 text-sm">
                        <div className="flex items-center gap-1.5 text-stone-600 bg-stone-100 px-2.5 py-1 rounded-md">
                          <Calendar className="w-4 h-4 text-indigo-500" />
                          <span>{event.year}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-stone-600 bg-stone-100 px-2.5 py-1 rounded-md">
                          <Book className="w-4 h-4 text-indigo-500" />
                          <span className="font-medium">{event.referencia}</span>
                        </div>
                      </div>
                      
                      <p className="text-stone-600 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-stone-50">
              <MapPin className="w-16 h-16 text-stone-300 mb-4" />
              <h2 className="text-xl font-serif text-stone-800 mb-2">Selecione um Local</h2>
              <p className="text-stone-500 text-sm">
                Clique em um dos marcadores no mapa para explorar os eventos do Livro de Atos que ocorreram nessa região.
              </p>
            </div>
          )}
        </aside>

        {/* Map Area */}
        <main className="flex-1 relative z-10">
          <APIProvider apiKey={apiKey}>
            <Map
              defaultZoom={6}
              defaultCenter={{ lat: 35.0, lng: 35.0 }}
              mapId="acts-map"
              className="w-full h-full"
              disableDefaultUI={false}
              gestureHandling={'greedy'}
            >
              <MapController selectedLocation={selectedLocation} />
              {locations.map((loc) => (
                <AdvancedMarker
                  key={loc.id}
                  position={{ lat: loc.lat, lng: loc.lng }}
                  onClick={() => {
                    setSelectedLocation(loc);
                    setIsPanelOpen(true);
                  }}
                >
                  <Pin 
                    background={selectedLocation?.id === loc.id ? '#ef4444' : '#4f46e5'} 
                    borderColor={selectedLocation?.id === loc.id ? '#991b1b' : '#312e81'} 
                    glyphColor={'#ffffff'} 
                    scale={selectedLocation?.id === loc.id ? 1.2 : 1}
                  />
                </AdvancedMarker>
              ))}
            </Map>
          </APIProvider>
        </main>
      </div>
    </div>
  );
}
