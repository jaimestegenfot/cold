import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedGrid, AnimatedCard } from './AnimatedSection';

export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      ),
      title: "Servicios eficientes y personalizados",
      description: "Diseñamos soluciones a la medida de cada cliente, optimizando tiempo, recursos y resultados."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
        </svg>
      ),
      title: "Proyectos que priorizan el ahorro energético",
      description: "Implementamos sistemas modernos que reducen el consumo eléctrico sin comprometer el rendimiento."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      ),
      title: "Compromiso con el medio ambiente",
      description: "Aplicamos prácticas responsables que minimizan el impacto ambiental en cada etapa del servicio."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedGrid className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedCard key={index} delay={index * 0.2}>
              <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <motion.div 
                  className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    transition: { duration: 0.2 } 
                  }}
                >
                  {feature.icon}
                </motion.div>
                <motion.h3 
                  className="text-lg font-bold text-gray-900 mb-4 uppercase"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
                >
                  {feature.description}
                </motion.p>
              </div>
            </AnimatedCard>
          ))}
        </AnimatedGrid>
      </div>
    </section>
  );
}
