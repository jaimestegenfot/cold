import React from 'react';
import Image from 'next/image';

export default function ServicesSection() {
    return (
        <section className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">NUESTROS SERVICIOS</h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* AIRE ACONDICIONADO */}
                    <div className="relative rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden h-80">
                        <div className="absolute inset-0">
                            <Image
                                src="https://media.istockphoto.com/id/1138429558/es/foto/hileras-de-estantes.jpg?s=612x612&w=0&k=20&c=JHGeEoZIrY9MrSBcX7CGLU9TLjeoJz9mEtW7Mhk6Iuw="
                                alt="Aire acondicionado"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="absolute inset-0 bg-black/40"></div>

                        <div className="relative z-10 p-8 h-full flex flex-col justify-end items-start text-left">
                            <h3 className="text-white text-2xl font-bold mb-4 drop-shadow-2xl">AIRE ACONDICIONADO</h3>
                            <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded font-semibold transition-colors shadow-lg">
                                Ver servicio
                            </button>
                        </div>
                    </div>

                    {/* REFRIGERACIÓN COMERCIAL E INDUSTRIAL */}
                    <div className="relative rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden h-80">
                        <div className="absolute inset-0">
                            <Image
                                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Refrigeración industrial"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute inset-0 bg-black/40"></div>

                        <div className="relative z-10 p-8 h-full flex flex-col justify-end items-start text-left">
                            <h3 className="text-white text-2xl font-bold mb-4 drop-shadow-2xl">REFRIGERACIÓN COMERCIAL E INDUSTRIAL</h3>
                            <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded font-semibold transition-colors shadow-lg">
                                Ver servicio
                            </button>
                        </div>
                    </div>

                    {/* AIRE ACONDICIONADO AUTOMOTRIZ */}
                    <div className="relative rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden h-80">
                        <div className="absolute inset-0">
                            <Image
                                src="https://cmgperu.com/wp-content/uploads/2025/07/batch_Img2-1024x779.jpg"
                                alt="Aire acondicionado automotriz"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute inset-0 bg-black/40"></div>

                        <div className="relative z-10 p-8 h-full flex flex-col justify-end items-start text-left">
                            <h3 className="text-white text-2xl font-bold mb-4 drop-shadow-2xl">AIRE ACONDICIONADO AUTOMOTRIZ</h3>
                            <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded font-semibold transition-colors shadow-lg">
                                Ver servicio
                            </button>
                        </div>
                    </div>

                    {/* REEFER */}
                    <div className="relative rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden h-80">
                        <div className="absolute inset-0">
                            <Image
                                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Reefer"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute inset-0 bg-black/40"></div>

                        <div className="relative z-10 p-8 h-full flex flex-col justify-end items-start text-left">
                            <h3 className="text-white text-2xl font-bold mb-4 drop-shadow-2xl">REEFER</h3>
                            <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded font-semibold transition-colors shadow-lg">
                                Ver servicio
                            </button>
                        </div>
                    </div>

                    {/* VENTA DE REPUESTOS */}
                    <div className="relative rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden h-80">
                        <div className="absolute inset-0">
                            <Image
                                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Venta de repuestos"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute inset-0 bg-black/40"></div>

                        <div className="relative z-10 p-8 h-full flex flex-col justify-end items-start text-left">
                            <h3 className="text-white text-2xl font-bold mb-4 drop-shadow-2xl">VENTA DE REPUESTOS</h3>
                            <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded font-semibold transition-colors shadow-lg">
                                Ver servicio
                            </button>
                        </div>
                    </div>

                    {/* COTIZAR SERVICIO */}
                    <div className="relative rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden h-80">
                        <div className="absolute inset-0">
                            <Image
                                src="/img/TECNICOS-1-1.png"
                                alt="Cotizar servicio"
                                fill
                                className="object-cover"
                            />
                        </div>

                        

                        <div className="relative z-10 p-8 h-full flex flex-col justify-end items-center text-center">
                            <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg">
                                COTIZAR SERVICIO
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
