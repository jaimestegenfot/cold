import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Client {
  name: string;
  logoUrl: string;
  alt: string;
}

interface ClientsSectionProps {
  clients?: Client[];
}

const defaultClients: Client[] = [
  {
    name: "SOLBAT",
    logoUrl: "https://cmgperu.com/wp-content/uploads/2025/07/Karcher.jpg",
    alt: "Logo SOLBAT"
  },
  {
    name: "Soluciones Integrales",
    logoUrl: "https://cmgperu.com/wp-content/uploads/2025/07/Solbat.jpg",
    alt: "Logo Soluciones Integrales"
  },
  {
    name: "STANLEY",
    logoUrl: "https://cmgperu.com/wp-content/uploads/2025/07/Solbat.jpg",
    alt: "Logo STANLEY"
  },
  {
    name: "TRUPER",
    logoUrl: "https://cmgperu.com/wp-content/uploads/2025/07/Soluciones-Int.jpg",
    alt: "Logo TRUPER"
  },
  {
    name: "COLD IMPORT",
    logoUrl: "https://cmgperu.com/wp-content/uploads/2025/07/Stanley.jpg",
    alt: "Logo COLD IMPORT"
  },
  {
    name: "DEWALT",
    logoUrl: "https://cmgperu.com/wp-content/uploads/2025/07/Truper.jpg",
    alt: "Logo DEWALT"
  }
  ,
  {
    name: "DEWALT",
    logoUrl: "https://cmgperu.com/wp-content/uploads/2025/07/Truper.jpg",
    alt: "Logo DEWALT"
  }
];

export default function ClientsSection({ clients = defaultClients }: ClientsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Duplicar los clientes para crear un loop infinito
  const duplicatedClients = [...clients, ...clients];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
      }, 3000); // Cambia cada 3 segundos

      return () => clearInterval(interval);
    }
  }, [isHovered, clients.length]);

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">CLIENTES Y PROVEEDORES</h2>
          <p className="text-lg text-gray-600">Marcas y empresas que confían en nosotros</p>
        </div>

        {/* Desktop View - Auto Sliding */}
        <div className="hidden md:block">
          <div 
            className="overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              className="flex space-x-6 transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (144 + 24)}px)`, // 144px (w-32) + 24px (space-x-6)
                width: `${duplicatedClients.length * (144 + 24)}px`
              }}
            >
              {duplicatedClients.map((client, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow w-32 h-20 flex items-center justify-center flex-shrink-0"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src={client.logoUrl}
                      alt={client.alt}
                      width={80}
                      height={60}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile View - Auto Sliding */}
        <div className="md:hidden">
          <div 
            className="overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              className="flex space-x-4 transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (96 + 16)}px)`, // 96px (w-24) + 16px (space-x-4)
                width: `${duplicatedClients.length * (96 + 16)}px`
              }}
            >
              {duplicatedClients.map((client, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow w-24 h-16 flex items-center justify-center flex-shrink-0"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src={client.logoUrl}
                      alt={client.alt}
                      width={60}
                      height={40}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Indicators */}
          <div className="flex justify-center mt-4 space-x-1">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
