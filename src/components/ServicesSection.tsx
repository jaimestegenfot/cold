import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection, { AnimatedGrid, AnimatedCard } from './AnimatedSection';

export default function ServicesSection() {
    const services = [
        {
            title: "AIRE ACONDICIONADO",
            image: "https://media.istockphoto.com/id/1138429558/es/foto/hileras-de-estantes.jpg?s=612x612&w=0&k=20&c=JHGeEoZIrY9MrSBcX7CGLU9TLjeoJz9mEtW7Mhk6Iuw=",
            alt: "Aire acondicionado"
        },
        {
            title: "REFRIGERACIÓN COMERCIAL E INDUSTRIAL",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            alt: "Refrigeración industrial"
        },
        {
            title: "AIRE ACONDICIONADO AUTOMOTRIZ",
            image: "https://cmgperu.com/wp-content/uploads/2025/07/batch_Img2-1024x779.jpg",
            alt: "Aire acondicionado automotriz"
        },
        {
            title: "REEFER",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            alt: "Reefer"
        },
        {
            title: "VENTA DE REPUESTOS",
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            alt: "Venta de repuestos"
        },
        {
            title: "COTIZAR SERVICIO",
            image: "/img/TECNICOS-1-1.png",
            alt: "Cotizar servicio",
            isSpecial: true
        }
    ];

    return (
        <section className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center mb-16">
                    <motion.h2 
                        className="text-3xl font-bold text-gray-800 mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        NUESTROS SERVICIOS
                    </motion.h2>
                    <motion.div 
                        className="w-16 h-1 bg-blue-600 mx-auto"
                        initial={{ width: 0 }}
                        whileInView={{ width: 64 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                </AnimatedSection>

                <AnimatedGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <AnimatedCard key={index} delay={index * 0.1}>
                            <motion.div 
                                className="relative rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden h-80 group"
                                whileHover={{ 
                                    scale: 1.02,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <div className="absolute inset-0">
                                    <Image
                                        src={service.image}
                                        alt={service.alt}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        priority={index === 0}
                                    />
                                </div>
                                
                                {!service.isSpecial && (
                                    <motion.div 
                                        className="absolute inset-0 bg-black/40"
                                        initial={{ opacity: 0.4 }}
                                        whileHover={{ opacity: 0.2 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}

                                <div className={`relative z-10 p-8 h-full flex flex-col ${service.isSpecial ? 'justify-end items-center text-center' : 'justify-end items-start text-left'}`}>
                                    <motion.h3 
                                        className="text-white text-2xl font-bold mb-4 drop-shadow-2xl"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                                    >
                                        {service.title}
                                    </motion.h3>
                                    
                                    <motion.button 
                                        className={`bg-blue-900 hover:bg-blue-800 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                                            service.isSpecial 
                                                ? 'px-8 py-4 rounded-lg text-lg' 
                                                : 'px-6 py-3 rounded'
                                        }`}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                                        whileHover={{ 
                                            scale: 1.05,
                                            transition: { duration: 0.2 }
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {service.isSpecial ? 'COTIZAR SERVICIO' : 'Ver servicio'}
                                    </motion.button>
                                </div>
                            </motion.div>
                        </AnimatedCard>
                    ))}
                </AnimatedGrid>
            </div>
        </section>
    );
}
