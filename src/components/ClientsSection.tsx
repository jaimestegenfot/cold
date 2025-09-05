import React from 'react';
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
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">CLIENTES Y PROVEEDORES</h2>
          <p className="text-lg text-gray-600">Marcas y empresas que confían en nosotros</p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-center space-x-8">
          {/* Left Arrow */}
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Client Logos */}
          <div className="flex space-x-6">
            {clients.map((client, index) => (
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

          {/* Right Arrow */}
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile View - Scrollable */}
        <div className="md:hidden">
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
            {clients.map((client, index) => (
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

      </div>
    </section>
  );
}
