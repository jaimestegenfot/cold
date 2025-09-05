'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaChevronDown, FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturesSection from '../components/FeaturesSection';
import ServicesSection from '../components/ServicesSection';
import ClientsSection from '../components/ClientsSection';
export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative z-[10000] bg-white/95 backdrop-blur-sm shadow-lg">
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
              <a href="#" className="text-black font-semibold hover:text-blue-600 transition-colors">INICIO</a>
              <div className="relative group">
                <a href="#" className="text-black font-semibold hover:text-blue-600 transition-colors flex items-center">
                  SERVICIOS
                  <FaChevronDown className="w-3 h-3 ml-1" />
                </a>
                {/* Dropdown Menu */}
                <div className="dropdown-menu absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[10001] border-2 border-gray-100">
                  <div className="py-3">
                    <a href="#servicios/aire-acondicionado" className="dropdown-text block px-4 py-3 text-gray-900 hover:bg-blue-100 hover:text-blue-800 transition-all duration-200 text-base">AIRE ACONDICIONADO</a>
                    <a href="#servicios/refrigeracion-industrial" className="dropdown-text block px-4 py-3 text-gray-900 hover:bg-blue-100 hover:text-blue-800 transition-all duration-200 text-base">Refrigeración Comercial e Industrial</a>
                    <a href="#servicios/aire-automotriz" className="dropdown-text block px-4 py-3 text-gray-900 hover:bg-blue-100 hover:text-blue-800 transition-all duration-200 text-base">Aire Acondicionado Automotriz</a>
                    <a href="#servicios/reefer" className="dropdown-text block px-4 py-3 text-gray-900 hover:bg-blue-100 hover:text-blue-800 transition-all duration-200 text-base">REFERR</a>
                    <a href="#servicios/venta-repuestos" className="dropdown-text block px-4 py-3 text-gray-900 hover:bg-blue-100 hover:text-blue-800 transition-all duration-200 text-base">Venta de Repuestos</a>
                  </div>
                </div>
              </div>
              <a href="#contacto" className="text-black font-semibold hover:text-blue-600 transition-colors">CONTÁCTANOS</a>
              <a href="#nosotros" className="text-black font-semibold hover:text-blue-600 transition-colors">NOSOTROS</a>
            </nav>

            {/* Social Media & Quote Button */}
            <div className="flex items-center space-x-4">
              {/* Social Media Icons */}
              <div className="hidden lg:flex items-center space-x-3">
                {/* Facebook */}
                <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors group">
                  <FaFacebookF className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
                
                {/* Instagram */}
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all group">
                  <FaInstagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
                
                
              </div>

              {/* Quote Button */}
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-200 hover:shadow-lg group">
                <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">COTIZAR</span>
              </button>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-black hover:text-blue-600 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="w-6 h-6" />
                ) : (
                  <FaBars className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-4">
            <a 
              href="#" 
              className="block text-black font-semibold hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              INICIO
            </a>
            
            <div>
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full text-black font-semibold hover:text-blue-600 transition-colors py-2"
              >
                SERVICIOS
                <FaChevronDown 
                  className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {isServicesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <a 
                    href="#" 
                    className="block text-gray-700 hover:text-blue-600 transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    AIRE ACONDICIONADO
                  </a>
                  <a 
                    href="#" 
                    className="block text-gray-700 hover:text-blue-600 transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Refrigeración Comercial e Industrial
                  </a>
                  <a 
                    href="#" 
                    className="block text-gray-700 hover:text-blue-600 transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Aire Acondicionado Automotriz
                  </a>
                  <a 
                    href="#" 
                    className="block text-gray-700 hover:text-blue-600 transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    REFERR
                  </a>
                  <a 
                    href="#" 
                    className="block text-gray-700 hover:text-blue-600 transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Venta de Repuestos
                  </a>
                </div>
              )}
            </div>
            
            <a 
              href="#contacto" 
              className="block text-black font-semibold hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTÁCTANOS
            </a>
            <a 
              href="#nosotros" 
              className="block text-black font-semibold hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              NOSOTROS
            </a>
          </div>
        </div>
      )}

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

            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-sm sm:text-base flex items-center space-x-2 mx-auto transition-all duration-200 hover:shadow-lg group">
              <FaDownload className="w-6 h-6 group-hover:scale-110 transition-transform" />
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
