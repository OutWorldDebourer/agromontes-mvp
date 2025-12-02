"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-slate-900 to-black text-white pt-32 pb-10 overflow-hidden">
            {/* Animated Wave */}
            <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none rotate-180">
                {/* Background Wave (Blue/Dark) */}
                <motion.svg
                    className="absolute top-0 left-0 block w-[200%] h-[120px] z-0 opacity-50"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="fill-blue-800 dark:fill-blue-900"
                    />
                </motion.svg>

                {/* Foreground Wave (White/Gradient) */}
                <motion.svg
                    className="relative block w-[200%] h-[100px] z-10"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    <defs>
                        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="white" stopOpacity="1" />
                            <stop offset="100%" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        fill="url(#waveGradient)"
                        className="dark:fill-slate-900"
                    />
                </motion.svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-green-400">AgroMontes</h3>
                        <p className="text-gray-400">
                            Innovación y tecnología para el agro moderno. Soluciones que transforman cultivos.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Productos</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#" className="hover:text-green-400 transition-colors">Fitoprotectores</a></li>
                            <li><a href="#" className="hover:text-green-400 transition-colors">Nutrientes</a></li>
                            <li><a href="#" className="hover:text-green-400 transition-colors">Bioestimulantes</a></li>
                            <li><a href="#" className="hover:text-green-400 transition-colors">Nuevos Lanzamientos</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Compañía</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#" className="hover:text-green-400 transition-colors">Nosotros</a></li>
                            <li><a href="#" className="hover:text-green-400 transition-colors">Sostenibilidad</a></li>
                            <li><a href="#" className="hover:text-green-400 transition-colors">Carreras</a></li>
                            <li><a href="#" className="hover:text-green-400 transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Contacto</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li>info@agromontes.com</li>
                            <li>+51 952 348 485</li>
                            <li>Huaral, Lima, Perú</li>
                        </ul>
                        <div className="flex gap-4 mt-6">
                            <a href="https://www.facebook.com/profile.php?id=100066852608519&locale=es_LA" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-green-600 transition-colors" aria-label="Facebook">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://www.tiktok.com/@agromontesad" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-green-600 transition-colors" aria-label="TikTok">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 1 0 1 5.45v-7h2.9a1.29 1.29 0 0 0 1.29-1.29V6.69z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/agromontes.peru/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-green-600 transition-colors" aria-label="Instagram">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://bit.ly/InfoAgroMontes" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-green-600 transition-colors" aria-label="WhatsApp">
                                <MessageCircle className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; 2025 AVI PF A. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
