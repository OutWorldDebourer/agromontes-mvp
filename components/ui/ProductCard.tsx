"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { Plus, Leaf, ShieldAlert, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef } from "react";

interface ProductCardProps {
    name: string;
    category: "Fitoprotectores" | "Nutrientes" | "Bioestimulantes";
    concentration: number; // e.g., 87 for 87%
    concentrationLabel: string; // e.g., "Azufre"
    image?: string;
    description: string;
    dose?: string; // e.g., "200-700 mL"
    price: number;
}

const CategoryColors = {
    Fitoprotectores: {
        bg: "bg-red-50",
        text: "text-red-600",
        border: "border-red-100",
        hover: "hover:border-red-300",
        icon: ShieldAlert,
        accent: "bg-red-500"
    },
    Nutrientes: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-100",
        hover: "hover:border-blue-300",
        icon: Zap,
        accent: "bg-blue-500"
    },
    Bioestimulantes: {
        bg: "bg-green-50",
        text: "text-green-600",
        border: "border-green-100",
        hover: "hover:border-green-300",
        icon: Leaf,
        accent: "bg-green-500"
    }
};

function Counter({ value, duration = 1.5 }: { value: number, duration?: number }) {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-20px" });

    if (isInView && count !== value) {
        // Simple linear interpolation for the counter
        const stepTime = (duration * 1000) / value;
        let current = 0;
        const timer = setInterval(() => {
            current += 1;
            setCount(current);
            if (current >= value) clearInterval(timer);
        }, stepTime);
    }

    return <span ref={nodeRef}>{isInView ? count : 0}</span>;
}

export default function ProductCard({
    name,
    category,
    concentration,
    concentrationLabel,
    description,
    dose,
    price
}: ProductCardProps) {
    const theme = CategoryColors[category];
    const Icon = theme.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.02, y: -5 }}
            className={cn(
                "group relative bg-white rounded-2xl p-6 border transition-all duration-300 shadow-sm hover:shadow-xl",
                theme.border,
                theme.hover
            )}
        >
            {/* Active Ingredient Reveal Background */}
            <div className={cn(
                "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none",
                theme.accent
            )} />

            {/* Header */}
            <div className="flex justify-between items-start mb-6">
                <div className={cn(
                    "p-3 rounded-xl transition-colors duration-300",
                    theme.bg,
                    theme.text
                )}>
                    <Icon className="w-6 h-6" />
                </div>
                <div className="text-right">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{category}</span>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">{name}</h3>
                </div>
            </div>

            {/* Visual Data */}
            <div className="mb-8 flex items-center justify-center py-4 relative">
                {/* Circular Progress or Bar */}
                <div className="relative w-32 h-32 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                        <circle
                            cx="64"
                            cy="64"
                            r="60"
                            className="stroke-gray-100 fill-none"
                            strokeWidth="8"
                        />
                        <motion.circle
                            cx="64"
                            cy="64"
                            r="60"
                            className={cn("fill-none", theme.text)}
                            strokeWidth="8"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: concentration / 100 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <span className="text-3xl font-bold text-gray-900">
                            <Counter value={concentration} />%
                        </span>
                        <span className="text-xs font-medium text-gray-500">{concentrationLabel}</span>
                    </div>
                </div>
            </div>

            {/* Details */}
            <div className="space-y-4 mb-6">
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                    {description}
                </p>

                {dose && (
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs font-medium text-gray-500">
                            <span>Dosis Recomendada</span>
                            <span>{dose}</span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "70%" }} // Mock progress for dose
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className={cn("h-full rounded-full", theme.accent)}
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                <span className="text-2xl font-bold text-gray-900">${price.toFixed(2)}</span>
                <button className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-white transition-all transform active:scale-95",
                    theme.accent,
                    "hover:brightness-110 hover:shadow-lg"
                )}>
                    <Plus className="w-4 h-4" />
                    <span>Agregar</span>
                </button>
            </div>
        </motion.div>
    );
}
