'use client';

import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturesSection from '../components/FeaturesSection';
import ServicesSection from '../components/ServicesSection';
import ClientsSection from '../components/ClientsSection';
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative z-10 bg-white/95 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="https://cmgperu.com/wp-content/uploads/2025/07/cropped-lOGO.png"
                alt="COLD MULTISERVICE GROUP S.A.C."
                width={64}
                height={64}
                className="h-16 w-auto"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">INICIO</a>
              <div className="relative group">
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center">
                  SERVICIOS
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">AIRE ACONDICIONADO</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Refrigeración Comercial e Industrial</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Aire Acondicionado Automotriz</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Reefer</a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Venta de Repuestos</a>
                  </div>
                </div>
              </div>
              <a href="#contacto" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">CONTÁCTANOS</a>
              <a href="#nosotros" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">NOSOTROS</a>
            </nav>

            {/* Social Media & Quote Button */}
            <div className="flex items-center space-x-4">
              {/* Social Media Icons */}
              <div className="hidden lg:flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </div>
              </div>

              {/* Quote Button */}
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors text-sm sm:text-base">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
                <span className="hidden sm:inline">COTIZAR</span>
              </button>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 text-blue-600 hover:text-blue-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://img.freepik.com/foto-gratis/interior-gran-almacen-distribucion-estantes-apilados-paletas-productos-listos-mercado_342744-1481.jpg"
            alt="Almacén industrial"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-blue-800/70">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-800/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-gray-700/20 to-transparent"></div>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Somos especialistas en sistemas de
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                REFRIGERACIÓN
              </h2>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                AIRE ACONDICIONADO
              </h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400">
                VENTA DE EQUIPOS
              </h3>
            </div>

            <p className="text-sm sm:text-base lg:text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              Ofrecemos soluciones a medida que garantizan confort, ahorro energético y alto rendimiento,
              con personal técnico calificado y atención personalizada en cada etapa del servicio.
            </p>

            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-sm sm:text-base flex items-center space-x-2 mx-auto transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
              <span>DESCARGAR BROCHURE</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-lg font-medium text-blue-400 mb-4">Acerca de</h2>
              <h3 className="text-4xl font-bold text-white mb-8">COLD MULTISERVICE</h3>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Somos una empresa peruana enfocada en resolver las necesidades de climatización, tanto en espacios pequeños como en grandes instalaciones. Nuestro propósito es crecer junto a nuestros clientes y colaboradores, apostando por la mejora continua y un servicio que supere expectativas.
              </p>
              <div className="text-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  CONOCER MÁS
                </button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://cmgperu.com/wp-content/uploads/2025/07/batch_Img2-1024x779.jpg"
                alt="Técnicos trabajando en equipos de refrigeración"
                width={400}
                height={384}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">NUESTROS VALORES</h2>
            <p className="text-lg text-gray-600">Estos son los principios que guían nuestro trabajo día a día:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* PUNTUALIDAD */}
            <div className="border-2 border-blue-600 rounded-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12,6 12,12 16,14"></polyline>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">PUNTUALIDAD</h3>
              <p className="text-gray-600 text-sm">Cumplimos los tiempos acordados porque valoramos tu tiempo y el nuestro.</p>
            </div>

            {/* RESPONSABILIDAD */}
            <div className="border-2 border-blue-600 rounded-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">RESPONSABILIDAD</h3>
              <p className="text-gray-600 text-sm">Cumplimos los tiempos acordados porque valoramos tu tiempo y el nuestro.</p>
            </div>

            {/* COMPROMISO */}
            <div className="border-2 border-blue-600 rounded-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">COMPROMISO</h3>
              <p className="text-gray-600 text-sm">Cumplimos los tiempos acordados porque valoramos tu tiempo y el nuestro.</p>
            </div>

            {/* EFICIENCIA */}
            <div className="border-2 border-blue-600 rounded-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9 12l2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">EFICIENCIA</h3>
              <p className="text-gray-600 text-sm">Cumplimos los tiempos acordados porque valoramos tu tiempo y el nuestro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <ClientsSection />

      <Footer />
    </div>
  );
}
