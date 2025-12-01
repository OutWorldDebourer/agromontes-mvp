"use client";

import { motion } from "framer-motion";

const BENEFITS = [
    {
        title: "Protección Total",
        description: "Escudo activo contra plagas y enfermedades con tecnología de liberación controlada.",
        path: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" // Shield
    },
    {
        title: "Crecimiento Vigoroso",
        description: "Bioestimulantes que activan el metabolismo vegetal desde la raíz.",
        path: "M12 22c4.97 0 9-4.03 9-9-4.5 0-9-4.5-9-9-4.5 0-9 4.5-9 9 0 4.97 4.03 9 9 9z" // Drop/Leaf-ish
    },
    {
        title: "Mayor Rentabilidad",
        description: "Maximiza tu cosecha con dosis precisas y alta concentración de activos.",
        path: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" // Dollar/Graph
    }
];

export default function Benefits() {
    return (
        <section id="solutions" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {BENEFITS.map((benefit, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-6 group">
                            <div className="w-24 h-24 rounded-2xl bg-gray-50 flex items-center justify-center p-6 group-hover:bg-green-50 transition-colors duration-500">
                                <motion.svg
                                    viewBox="0 0 24 24"
                                    className="w-full h-full stroke-gray-900 group-hover:stroke-green-600 transition-colors duration-500"
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

                            <div className="space-y-3">
                                <h3 className="text-2xl font-bold text-gray-900">{benefit.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
