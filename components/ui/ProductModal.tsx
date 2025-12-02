"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Leaf, ShieldAlert, Zap, FileText, Droplets, Sprout } from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ProductModalProps {
    product: any;
    isOpen: boolean;
    onClose: () => void;
}

const CategoryColors: Record<string, { bg: string, text: string, border: string, icon: any }> = {
    "Fitoprotectores": {
        bg: "bg-red-50 dark:bg-red-900/20",
        text: "text-red-700 dark:text-red-400",
        border: "border-red-100 dark:border-red-900/50",
        icon: ShieldAlert
    },
    "Nutrientes": {
        bg: "bg-green-50 dark:bg-green-900/20",
        text: "text-green-700 dark:text-green-400",
        border: "border-green-100 dark:border-green-900/50",
        icon: Leaf
    },
    "Bioestimulantes": {
        bg: "bg-blue-50 dark:bg-blue-900/20",
        text: "text-blue-700 dark:text-blue-400",
        border: "border-blue-100 dark:border-blue-900/50",
        icon: Zap
    }
};

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!mounted) return null;

    const theme = CategoryColors[product?.category] || CategoryColors["Nutrientes"];
    const Icon = theme.icon;

    return createPortal(
        <AnimatePresence>
            {isOpen && product && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                    />
                    <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-white dark:bg-gray-900 w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col pointer-events-auto"
                        >
                            {/* Header */}
                            <div className="relative p-6 border-b border-gray-100 dark:border-gray-800 flex items-start justify-between bg-gray-50/50 dark:bg-gray-800/50">
                                <div className="flex gap-4">
                                    <div className={cn("p-3 rounded-xl h-fit", theme.bg)}>
                                        <Icon className={cn("w-8 h-8", theme.text)} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                            {product.name}
                                        </h2>
                                        <div className="flex items-center gap-2 text-sm">
                                            <span className={cn("font-medium", theme.text)}>
                                                {product.category}
                                            </span>
                                            <span className="text-gray-300 dark:text-gray-600">•</span>
                                            <span className="text-gray-500 dark:text-gray-400">
                                                {product.concentration}% {product.concentrationLabel}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-500 dark:text-gray-400"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-8">
                                {/* Description */}
                                <div className="space-y-3">
                                    <h3 className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
                                        <FileText className="w-4 h-4 text-green-600" />
                                        Descripción
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {product.fullDescription || product.description}
                                    </p>
                                </div>

                                {/* Composition */}
                                {product.composition && (
                                    <div className="space-y-3">
                                        <h3 className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
                                            <Droplets className="w-4 h-4 text-blue-500" />
                                            Composición Garantizada
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {product.composition.map((item: string, idx: number) => (
                                                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                        {item.split(':')[0]}
                                                    </span>
                                                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                                                        {item.split(':')[1]}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Usage Table */}
                                {product.usage && (
                                    <div className="space-y-3">
                                        <h3 className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
                                            <Sprout className="w-4 h-4 text-green-500" />
                                            Recomendaciones de Uso
                                        </h3>
                                        <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
                                            <table className="w-full text-sm text-left">
                                                <thead className="bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 uppercase text-xs">
                                                    <tr>
                                                        <th className="px-4 py-3 font-semibold">Cultivo</th>
                                                        <th className="px-4 py-3 font-semibold">Dosis</th>
                                                        <th className="px-4 py-3 font-semibold">Indicaciones</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                    {product.usage.map((row: any, idx: number) => (
                                                        <tr key={idx} className="bg-white dark:bg-gray-900/50 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                                            <td className="px-4 py-3 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                                {row.crop}
                                                            </td>
                                                            <td className="px-4 py-3 text-gray-600 dark:text-gray-300 whitespace-nowrap">
                                                                {row.dose}
                                                            </td>
                                                            <td className="px-4 py-3 text-gray-600 dark:text-gray-300 min-w-[200px]">
                                                                {row.notes}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            <div className="p-6 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 flex justify-between items-center">
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Precio por unidad</p>
                                    <p className="text-2xl font-bold text-gray-900 dark:text-white">S/ {product.price.toFixed(2)}</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                                >
                                    Cerrar
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}
