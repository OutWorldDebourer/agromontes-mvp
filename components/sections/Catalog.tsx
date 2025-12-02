"use client";

import { useState, useEffect } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import ProductCard from "@/components/ui/ProductCard";
import ProductModal from "@/components/ui/ProductModal";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";

import { PRODUCTS } from "@/data/products";

const TABS = ["Todos", "Fitoprotectores", "Nutrientes", "Bioestimulantes"];

import { useSearchParams } from "next/navigation";

export default function Catalog() {
    const [activeTab, setActiveTab] = useState("Todos");
    const [showAll, setShowAll] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const searchParams = useSearchParams();

    useEffect(() => {
        const searchQuery = searchParams.get("search");
        if (searchQuery) {
            const product = PRODUCTS.find(p =>
                p.name.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (product) {
                setActiveTab("Todos"); // Or product.category if you want to switch tabs
                setSelectedProduct(product);
                // Optional: Scroll to the product card if needed, but modal opening is usually enough
                const element = document.getElementById("catalog");
                if (element) element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [searchParams]);

    const filteredProducts = (activeTab === "Todos"
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === activeTab)
    ).sort((a, b) => a.name.localeCompare(b.name));

    const visibleProducts = showAll ? filteredProducts : filteredProducts.slice(0, 6);

    return (
        <section id="catalog" className="py-24 bg-gray-50/50 dark:bg-gray-900/50 transition-colors">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
                        Catálogo de <span className="text-green-600 dark:text-green-400">Soluciones</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Tecnología agrícola de vanguardia diseñada para maximizar el rendimiento de tus cultivos.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-12 flex-wrap gap-2">
                    {TABS.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={cn(
                                "relative px-6 py-2 rounded-full text-sm font-medium transition-colors",
                                activeTab === tab ? "text-white" : "text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                            )}
                        >
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-green-600 dark:bg-green-500 rounded-full"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{tab}</span>
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <LayoutGroup>
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout">
                            {visibleProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    {...product}
                                    onSelect={() => setSelectedProduct(product)}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </LayoutGroup>

                {/* Show All Button */}
                {filteredProducts.length > 6 && (
                    <div className="mt-12 flex justify-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
                        >
                            <span>{showAll ? "Ver menos" : "Ver todos los productos"}</span>
                            {showAll ? (
                                <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                            ) : (
                                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                            )}
                        </button>
                    </div>
                )}

                <ProductModal
                    product={selectedProduct}
                    isOpen={!!selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            </div>
        </section>
    );
}
