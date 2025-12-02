"use client";

import { motion } from "framer-motion";

const BENEFITS = [
    {
        title: "Protección Total",
        description: "Escudo activo contra plagas y enfermedades con tecnología de liberación controlada.",
        path: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" // Shield
    },
    {
        title: "Nutrición Precisa",
        description: "Formulaciones equilibradas que entregan nutrientes exactamente donde la planta los necesita.",
        path: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" // Layers/Stack
    },
    {
        title: "Bioestimulación",
        description: "Activación del metabolismo vegetal para superar situaciones de estrés abiótico.",
        path: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" // Lightning/Energy
    }
];

export default function Benefits() {
    return (
        <section id="solutions" className="py-24 bg-white dark:bg-gray-900 transition-colors relative z-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {BENEFITS.map((benefit, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-6 group">
                            <div className="w-24 h-24 rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center p-6 group-hover:bg-green-50 dark:group-hover:bg-green-900/20 transition-colors duration-500">
                                <motion.svg
                                    viewBox="0 0 24 24"
                                    className="w-full h-full stroke-gray-900 dark:stroke-white group-hover:stroke-green-600 dark:group-hover:stroke-green-400 transition-colors duration-500"
                                    fill="none"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <motion.path
                                        d={benefit.path}
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 2, ease: "easeInOut" }}
                                    />
                                </motion.svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{benefit.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
