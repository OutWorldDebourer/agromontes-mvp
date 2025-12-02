"use client";

import { motion } from "framer-motion";
import { Leaf, Users, ShieldCheck } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 bg-white dark:bg-gray-900 transition-colors">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
                                ¿QUIÉNES <span className="text-green-600 dark:text-green-400">SOMOS?</span>
                            </h2>
                            <div className="h-1 w-20 bg-green-600 rounded-full" />
                        </div>

                        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            <p>
                                <span className="font-bold text-gray-900 dark:text-white">AgroMontes</span> es una empresa peruana que brinda soluciones innovadoras para el sector agrícola a través de una amplia gama de productos para la protección y el incremento de la rentabilidad de los cultivos.
                            </p>
                            <p>
                                En AgroMontes buscamos que los agricultores reciban productos de alta calidad y asesoría técnica en el manejo integrado de sus cultivos, el uso adecuado de los productos y la protección del medio ambiente.
                            </p>
                            <p>
                                Contamos con ingenieros agrónomos especializados y un equipo profesional de servicio técnico en todos los valles agrícolas del país.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                            <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-xl bg-green-50 dark:bg-green-900/20">
                                <div className="p-3 bg-green-100 dark:bg-green-800 rounded-full text-green-600 dark:text-green-300">
                                    <Leaf className="w-6 h-6" />
                                </div>
                                <span className="font-semibold text-gray-900 dark:text-white text-sm">Soluciones Innovadoras</span>
                            </div>
                            <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20">
                                <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-full text-blue-600 dark:text-blue-300">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <span className="font-semibold text-gray-900 dark:text-white text-sm">Alta Calidad</span>
                            </div>
                            <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-xl bg-orange-50 dark:bg-orange-900/20">
                                <div className="p-3 bg-orange-100 dark:bg-orange-800 rounded-full text-orange-600 dark:text-orange-300">
                                    <Users className="w-6 h-6" />
                                </div>
                                <span className="font-semibold text-gray-900 dark:text-white text-sm">Asesoría Técnica</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image/Visual Content */}
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center"
                    >
                        <div className="relative aspect-[9/16] w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                            <video
                                src="/agromontes-mvp/Agromonte_video.mp4"
                                className="w-full h-full object-cover"
                                loop
                                playsInline
                                controls
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
