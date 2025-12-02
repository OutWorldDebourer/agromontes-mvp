"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Leaf, ShieldAlert, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
    id: number;
    name: string;
    category: string;
    concentration: number; // percentage
    concentrationLabel: string;
    description: string;
    dose: string; // e.g., "200-300 ml/200L"
    price: number;
    onSelect: () => void;
    usage?: { crop: string; dose: string }[];
}

const CategoryColors: Record<string, { bg: string, text: string, border: string, hover: string, icon: any }> = {
    "Fitoprotectores": {
        bg: "bg-red-50 dark:bg-red-900/20",
        text: "text-red-700 dark:text-red-400",
        border: "border-red-100 dark:border-red-900/50",
        hover: "hover:border-red-200 dark:hover:border-red-800",
        icon: ShieldAlert
    },
    "Nutrientes": {
        bg: "bg-green-50 dark:bg-green-900/20",
        text: "text-green-700 dark:text-green-400",
        border: "border-green-100 dark:border-green-900/50",
        hover: "hover:border-green-200 dark:hover:border-green-800",
        icon: Leaf
    },
    "Bioestimulantes": {
        bg: "bg-blue-50 dark:bg-blue-900/20",
        text: "text-blue-700 dark:text-blue-400",
        border: "border-blue-100 dark:border-blue-900/50",
        hover: "hover:border-blue-200 dark:hover:border-blue-800",
        icon: Zap
    }
};

function Counter({ value, duration = 1.5 }: { value: number, duration?: number }) {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-20px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const totalDuration = duration * 1000;
            let startTime: number | null = null;

            const animate = (currentTime: number) => {
                if (!startTime) startTime = currentTime;
                const progress = currentTime - startTime;
                const percentage = Math.min(progress / totalDuration, 1);

                // Ease out quart
                const ease = 1 - Math.pow(1 - percentage, 4);

                setCount(Math.floor(ease * end));

                if (progress < totalDuration) {
                    requestAnimationFrame(animate);
                } else {
                    setCount(end);
                }
            };

            requestAnimationFrame(animate);
        }
    }, [isInView, value, duration]);

    return <span ref={nodeRef}>{count}</span>;
}

export default function ProductCard({ id, name, category, concentration, concentrationLabel, description, dose, price, onSelect, usage }: ProductCardProps) {
    const theme = CategoryColors[category] || CategoryColors["Nutrientes"];
    const Icon = theme.icon;
    const { addItem } = useCart();
    const [currentDoseIndex, setCurrentDoseIndex] = useState(0);

    useEffect(() => {
        if (usage && usage.length > 1) {
            const interval = setInterval(() => {
                setCurrentDoseIndex((prev) => (prev + 1) % usage.length);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [usage]);

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        addItem({ id, name, price, category });
    };

    const currentDose = usage && usage.length > 0 ? usage[currentDoseIndex] : null;

    return (
        <motion.div
            layoutId={`product-${id}`}
            onClick={onSelect}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.02, y: -5 }}
            className={cn(
                "group relative bg-white dark:bg-gray-800 rounded-2xl p-6 border transition-all duration-300 shadow-sm hover:shadow-xl dark:shadow-none cursor-pointer",
                theme.border,
                theme.hover
            )}
        >
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
                <div className={cn("p-3 rounded-xl transition-colors duration-300", theme.bg)}>
                    <Icon className={cn("w-6 h-6", theme.text)} />
                </div>
                <div className="text-right">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white flex items-baseline justify-end gap-1">
                        <Counter value={concentration} />
                        <span className="text-sm font-medium text-gray-400">%</span>
                    </div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{concentrationLabel}</p>
                </div>
            </div>

            {/* Content */}
            <div className="space-y-4 mb-6">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                        {name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                        {description}
                    </p>
                </div>

                {/* Dose Visualization */}
                <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium text-gray-400 h-5">
                        <span>Dosis Recomendada</span>
                        <AnimatePresence mode="wait">
                            {currentDose ? (
                                <motion.span
                                    key={currentDoseIndex}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-right truncate ml-2"
                                >
                                    <span className="font-semibold text-gray-600 dark:text-gray-300 mr-1">{currentDose.crop}:</span>
                                    {currentDose.dose}
                                </motion.span>
                            ) : (
                                <span>{dose}</span>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "70%" }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-green-500 rounded-full"
                        />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                    S/ {price.toFixed(2)}
                </span>
                <button
                    onClick={handleAddToCart}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-sm font-medium hover:bg-green-600 dark:hover:bg-green-400 dark:hover:text-white transition-colors group/btn"
                >
                    <span>Agregar</span>
                    <Plus className="w-4 h-4 group-hover/btn:rotate-90 transition-transform" />
                </button>
            </div>

            {/* Hover Reveal Background */}
            <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none rounded-2xl",
                theme.bg.replace("bg-", "bg-") // Just using the bg color class
            )} />
        </motion.div>
    );
}
