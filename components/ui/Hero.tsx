"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const titleWords = "Soluciones Innovadoras".split(" ");

    return (
        <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent z-10" />
                {/* Placeholder for "Campo de Cultivo" - using a rich gradient for now */}
                <div className="absolute inset-0 bg-[url('/agromontes-mvp/hero-new.png')] bg-cover bg-center" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent z-20" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center text-white space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-medium mb-4 backdrop-blur-sm">
                        Tecnología Agrícola Avanzada
                    </span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight overflow-hidden">
                    {titleWords.map((word, i) => (
                        <motion.span
                            key={i}
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.5 + i * 0.2,
                                ease: [0.2, 0.65, 0.3, 0.9],
                            }}
                            className="inline-block mr-4"
                        >
                            {word}
                        </motion.span>
                    ))}
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light"
                >
                    Potenciamos tu rendimiento con fitoprotectores y nutrientes de última generación.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
                >
                    <a href="#catalog" className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-green-600/30">
                        Ver Catálogo
                    </a>
                    <a href="#footer" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full font-bold text-lg transition-all hover:scale-105 backdrop-blur-sm">
                        Contáctanos
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
            >
                <ArrowDown className="w-8 h-8" />
            </motion.div>
        </section>
    );
}
