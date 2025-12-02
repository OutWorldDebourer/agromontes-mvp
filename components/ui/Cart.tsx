"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, X, Plus, Minus, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

export default function Cart() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { items, updateQuantity, removeItem, totalItems, subtotal, tax, total } = useCart();

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleCart = () => setIsOpen(!isOpen);

    return (
        <>
            <button
                onClick={toggleCart}
                className="relative p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors group"
            >
                <ShoppingCart className="w-6 h-6 text-gray-700 dark:text-slate-200 group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors" />
                {totalItems > 0 && (
                    <span className="absolute top-0 right-0 bg-green-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white dark:border-slate-900 transform scale-100 transition-transform group-hover:scale-110">
                        {totalItems}
                    </span>
                )}
            </button>

            {mounted && createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={toggleCart}
                                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
                            />

                            {/* Drawer */}
                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-slate-950 shadow-2xl z-[70] flex flex-col"
                            >
                                <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-slate-800">
                                    <h2 className="text-xl font-bold text-gray-800 dark:text-slate-100">Tu Carrito</h2>
                                    <button
                                        onClick={toggleCart}
                                        className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                                    >
                                        <X className="w-6 h-6 text-gray-500 dark:text-slate-400" />
                                    </button>
                                </div>

                                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                                    {items.length === 0 ? (
                                        <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-4">
                                            <ShoppingCart className="w-16 h-16 opacity-20" />
                                            <p>Tu carrito está vacío</p>
                                            <button
                                                onClick={toggleCart}
                                                className="text-green-600 font-medium hover:underline"
                                            >
                                                Seguir comprando
                                            </button>
                                        </div>
                                    ) : (
                                        items.map((item) => (
                                            <motion.div
                                                layout
                                                key={item.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, x: -50 }}
                                                className="flex gap-4"
                                            >
                                                <div className={cn(
                                                    "w-20 h-20 rounded-lg flex items-center justify-center shrink-0",
                                                    item.category === "Fitoprotectores" ? "bg-red-50 dark:bg-red-900/20" : "bg-green-50 dark:bg-green-900/20"
                                                )}>
                                                    {/* Placeholder for image */}
                                                    <div className={cn(
                                                        "w-12 h-12 rounded-full opacity-50",
                                                        item.category === "Fitoprotectores" ? "bg-red-200 dark:bg-red-800" : "bg-green-200 dark:bg-green-800"
                                                    )} />
                                                </div>

                                                <div className="flex-1 flex flex-col justify-between">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h3 className="font-semibold text-gray-800 dark:text-slate-100">{item.name}</h3>
                                                            <p className="text-sm text-gray-500 dark:text-slate-400">{item.category}</p>
                                                        </div>
                                                        <button
                                                            onClick={() => removeItem(item.id)}
                                                            className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                                            aria-label="Eliminar producto"
                                                        >
                                                            <X className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-medium text-gray-900 dark:text-slate-100">S/ {item.price.toFixed(2)}</span>
                                                        <div className="flex items-center gap-3 bg-gray-100 dark:bg-slate-900 rounded-full px-3 py-1">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, -1)}
                                                                className="p-1 text-gray-600 hover:text-red-500 transition-colors dark:text-slate-300"
                                                            >
                                                                {item.quantity === 1 ? <Trash2 className="w-4 h-4" /> : <Minus className="w-4 h-4" />}
                                                            </button>
                                                            <span className="text-sm font-medium w-4 text-center text-gray-900 dark:text-slate-100">{item.quantity}</span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, 1)}
                                                                className="p-1 text-gray-600 hover:text-green-600 transition-colors dark:text-slate-300"
                                                            >
                                                                <Plus className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))
                                    )}
                                </div>

                                {items.length > 0 && (
                                    <div className="p-6 bg-gray-50 dark:bg-slate-900/50 border-t border-gray-100 dark:border-slate-800 space-y-4">
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between text-gray-600 dark:text-slate-400">
                                                <span>Subtotal</span>
                                                <span>S/ {subtotal.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between text-gray-600 dark:text-slate-400">
                                                <span>IGV (18%)</span>
                                                <span>S/ {tax.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-slate-100 pt-2 border-t border-gray-200 dark:border-slate-700">
                                                <span>Total</span>
                                                <span>S/ {total.toFixed(2)}</span>
                                            </div>
                                        </div>
                                        <button className="w-full py-4 bg-green-600 text-white rounded-xl font-bold shadow-lg shadow-green-600/20 hover:bg-green-700 hover:shadow-green-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all">
                                            Proceder al Pago
                                        </button>
                                    </div>
                                )}
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
}
