/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import { locations, LocationGroup } from './data/events';
import { MapPin, BookOpen, Map as MapIcon } from 'lucide-react';

export default function App() {
  const [selectedLocation, setSelectedLocation] = useState<LocationGroup | null>(null);
  const [apiKey] = useState(import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '');

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
    <div className="flex flex-col h-screen bg-stone-50 font-sans">
      <header className="bg-white border-b border-stone-200 px-6 py-4 flex items-center gap-3 shadow-sm z-10">
        <BookOpen className="w-6 h-6 text-indigo-600" />
        <h1 className="text-xl font-serif font-medium text-stone-800">Mapa Interativo: Livro de Atos</h1>
      </header>
      
      <main className="flex-1 relative">
        <APIProvider apiKey={apiKey}>
          <Map
            defaultZoom={5}
            defaultCenter={{ lat: 35.0, lng: 30.0 }}
            mapId="acts-map"
            className="w-full h-full"
            disableDefaultUI={false}
          >
            {locations.map((loc) => (
              <AdvancedMarker
                key={loc.id}
                position={{ lat: loc.lat, lng: loc.lng }}
                onClick={() => setSelectedLocation(loc)}
              >
                <Pin background={'#4f46e5'} borderColor={'#312e81'} glyphColor={'#ffffff'} />
              </AdvancedMarker>
            ))}

            {selectedLocation && (
              <InfoWindow
                position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
                onCloseClick={() => setSelectedLocation(null)}
              >
                <div className="p-2 max-w-xs md:max-w-sm">
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-stone-200">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                    <h2 className="text-lg font-serif font-medium text-stone-800">{selectedLocation.name}</h2>
                  </div>
                  
                  <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                    {selectedLocation.events.map((event) => (
                      <div key={event.id} className="bg-stone-50 p-3 rounded-lg border border-stone-100">
                        <p className="text-sm font-medium text-stone-800 mb-1">{event.evento}</p>
                        <p className="text-xs text-indigo-600 font-medium">{event.referencia}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </InfoWindow>
            )}
          </Map>
        </APIProvider>
      </main>
    </div>
  );
}
