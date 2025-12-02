"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ShoppingCart, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";
import Cart from "./Cart";
import { ThemeToggle } from "./ThemeToggle";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";
import { useRouter } from "next/navigation";

const NAV_LINKS = [
    { name: "Inicio", href: "#hero" },
    { name: "Soluciones", href: "#benefits" },
    { name: "Catálogo", href: "#catalog" },
    { name: "Nosotros", href: "#about" },
    { name: "Contacto", href: "#footer" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState<typeof PRODUCTS>([]);
    const { totalItems } = useCart();

    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (query.length > 0) {
            const filtered = PRODUCTS.filter(p =>
                p.name.toLowerCase().includes(query.toLowerCase())
            );
            setSuggestions(filtered.slice(0, 5)); // Limit to 5 suggestions
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (productName: string) => {
        setSearchQuery("");
        setSuggestions([]);
        setIsSearchOpen(false);
        router.push(`/?search=${encodeURIComponent(productName)}#catalog`);
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="bg-green-600 p-2 rounded-xl group-hover:rotate-12 transition-transform">
                            <Leaf className="text-white w-6 h-6" />
                        </div>
                        <span className={cn(
                            "text-xl font-bold tracking-tight transition-colors",
                            isScrolled ? "text-gray-900 dark:text-white" : "text-white"
                        )}>
                            AgroMontes
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-green-500",
                                    isScrolled ? "text-gray-600 dark:text-gray-300" : "text-white/90"
                                )}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <div className="relative group">
                            <div className={cn(
                                "flex items-center bg-white/10 rounded-full transition-all duration-300 overflow-hidden",
                                isSearchOpen ? "w-64 pl-4 pr-2 bg-white/20" : "w-10 h-10 justify-center hover:bg-white/20"
                            )}>
                                {isSearchOpen && (
                                    <input
                                        type="text"
                                        placeholder="Buscar producto..."
                                        className="w-full bg-transparent border-none outline-none text-white placeholder-white/70 text-sm"
                                        autoFocus
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                if (suggestions.length > 0) {
                                                    handleSuggestionClick(suggestions[0].name);
                                                } else if (searchQuery.trim()) {
                                                    handleSuggestionClick(searchQuery);
                                                }
                                            }
                                        }}
                                        onBlur={() => setTimeout(() => {
                                            setIsSearchOpen(false);
                                            setSuggestions([]);
                                        }, 200)}
                                    />
                                )}
                                <button
                                    onClick={() => {
                                        setIsSearchOpen(!isSearchOpen);
                                        if (!isSearchOpen) setTimeout(() => document.querySelector<HTMLInputElement>('input[type="text"]')?.focus(), 100);
                                    }}
                                    className={cn(
                                        "p-2 rounded-full transition-colors",
                                        isScrolled && !isSearchOpen ? "text-gray-600 dark:text-gray-300" : "text-white"
                                    )}
                                >
                                    <Search className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Suggestions Dropdown */}
                            <AnimatePresence>
                                {isSearchOpen && suggestions.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden"
                                    >
                                        {suggestions.map((product) => (
                                            <button
                                                key={product.id}
                                                onClick={() => handleSuggestionClick(product.name)}
                                                className="w-full text-left px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors flex items-center justify-between group"
                                            >
                                                <span>{product.name}</span>
                                                <span className="text-xs text-gray-400 group-hover:text-green-500 transition-colors">
                                                    Ver
                                                </span>
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className={cn(
                            isScrolled ? "text-gray-900 dark:text-white" : "text-white"
                        )}>
                            <Cart />
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className={cn(
                                "md:hidden p-2 rounded-lg transition-colors",
                                isScrolled ? "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800" : "text-white hover:bg-white/10"
                            )}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800"
                    >
                        <div className="container mx-auto px-4 py-4 space-y-4">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="block text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium py-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
