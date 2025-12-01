"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import Cart from "./Cart";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    const navLinks = [
        { name: "Inicio", href: "#" },
        { name: "Productos", href: "#catalog" },
        { name: "Soluciones", href: "#solutions" },
        { name: "Nosotros", href: "#about" },
        { name: "Contacto", href: "#contact" },
    ];

    return (
        <motion.nav
            className={cn(
                "fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out",
                isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-green-600/20 group-hover:scale-105 transition-transform">
                        A
                    </div>
                    <span className={cn(
                        "text-2xl font-bold tracking-tight transition-colors",
                        isScrolled ? "text-gray-900" : "text-white"
                    )}>
                        AgroMontes
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium hover:text-green-500 transition-colors relative group",
                                isScrolled ? "text-gray-600" : "text-white/90"
                            )}
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full" />
                        </a>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button className={cn(
                        "p-2 rounded-full hover:bg-white/10 transition-colors",
                        isScrolled ? "text-gray-600 hover:bg-gray-100" : "text-white"
                    )}>
                        <Search className="w-5 h-5" />
                    </button>

                    <div className={cn(
                        isScrolled ? "text-gray-900" : "text-white"
                    )}>
                        <Cart />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={cn(
                            "md:hidden p-2 rounded-lg transition-colors",
                            isScrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
                        )}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-4 md:hidden flex flex-col gap-4"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-600 font-medium py-2 px-4 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
}
