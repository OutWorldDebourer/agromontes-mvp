"use client";

import { useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import ProductCard from "@/components/ui/ProductCard";
import { cn } from "@/lib/utils";

const PRODUCTS = [
    {
        id: 1,
        name: "Sulfa Max 87",
        category: "Fitoprotectores",
        concentration: 87,
        concentrationLabel: "Azufre",
        description: "Fungicida y acaricida de contacto con acción multisitio. Ideal para el control de Oidium.",
        dose: "200-700 mL",
        price: 45.00
    },
    {
        id: 2,
        name: "AminoZ V32",
        category: "Nutrientes",
        concentration: 32,
        concentrationLabel: "Aminoácidos",
        description: "Bioestimulante a base de aminoácidos libres de origen vegetal para estrés abiótico.",
        dose: "100-300 mL",
        price: 32.50
    },
    {
        id: 3,
        name: "Potasio K50",
        category: "Nutrientes",
        concentration: 50,
        concentrationLabel: "Potasio",
        description: "Fuente de potasio de alta asimilación para mejorar calidad y calibre de frutos.",
        dose: "300-500 mL",
        price: 38.00
    },
    {
        id: 4,
        name: "Duo Mix Oil",
        category: "Fitoprotectores",
        concentration: 95,
        concentrationLabel: "Aceite Mineral",
        description: "Aceite agrícola para el control de ácaros, trips y cochinillas.",
        dose: "1-2 L",
        price: 28.00
    },
    {
        id: 5,
        name: "Raiz Plus",
        category: "Bioestimulantes",
        concentration: 40,
        concentrationLabel: "Extracto Algas",
        description: "Potente enraizador hormonal para etapas iniciales del cultivo.",
        dose: "1-1.5 L",
        price: 55.00
    },
    {
        id: 6,
        name: "Cobre Flow",
        category: "Fitoprotectores",
        concentration: 25,
        concentrationLabel: "Cobre Metálico",
        description: "Bactericida y fungicida cúprico de alta persistencia.",
        dose: "150-300 mL",
        price: 42.00
    }
] as const;

const TABS = ["Todos", "Fitoprotectores", "Nutrientes", "Bioestimulantes"];

export default function Catalog() {
    const [activeTab, setActiveTab] = useState("Todos");

    const filteredProducts = activeTab === "Todos"
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === activeTab);

    return (
        <section id="catalog" className="py-24 bg-gray-50/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-gray-900"
                    >
                        Catálogo de <span className="text-green-600">Soluciones</span>
                    </motion.h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Tecnología agrícola diseñada para maximizar el rendimiento de tus cultivos.
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
                                activeTab === tab ? "text-white" : "text-gray-600 hover:bg-gray-100"
                            )}
                        >
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-green-600 rounded-full"
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
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </LayoutGroup>
            </div>
        </section>
    );
}
