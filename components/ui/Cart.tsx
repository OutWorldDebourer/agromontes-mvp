"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, X, Plus, Minus, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock data for the cart
const INITIAL_CART_ITEMS = [
    {
        id: 1,
        name: "Sulfa Max 87",
        price: 45.00,
        quantity: 2,
        image: "/placeholder-sulfa.png", // We'll need placeholders or use colors
        category: "Fitoprotectores"
    },
    {
        id: 2,
        name: "AminoZ V32",
        price: 32.50,
        quantity: 1,
        image: "/placeholder-amino.png",
        category: "Nutrientes"
    }
];

export default function Cart() {
    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState(INITIAL_CART_ITEMS);

    const toggleCart = () => setIsOpen(!isOpen);

    const updateQuantity = (id: number, change: number) => {
        setItems(prev => prev.map(item => {
            if (item.id === id) {
                const newQuantity = Math.max(0, item.quantity + change);
                return { ...item, quantity: newQuantity };
            }
            return item;
        }).filter(item => item.quantity > 0));
    };

    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * 0.18; // 18% IGV example
    const total = subtotal + tax;

    return (
        <>
            <button
                onClick={toggleCart}
                className="relative p-2 hover:bg-gray-100 rounded-full transition-colors group"
            >
                <ShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-green-700 transition-colors" />
                {items.length > 0 && (
                    <span className="absolute top-0 right-0 bg-green-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white transform scale-100 transition-transform group-hover:scale-110">
                        {items.reduce((acc, item) => acc + item.quantity, 0)}
                    </span>
                )}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleCart}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
                        >
                            <div className="p-6 flex items-center justify-between border-b border-gray-100">
                                <h2 className="text-xl font-bold text-gray-800">Tu Carrito</h2>
                                <button
                                    onClick={toggleCart}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6 text-gray-500" />
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
                                                item.category === "Fitoprotectores" ? "bg-red-50" : "bg-green-50"
                                            )}>
                                                {/* Placeholder for image */}
                                                <div className={cn(
                                                    "w-12 h-12 rounded-full opacity-50",
                                                    item.category === "Fitoprotectores" ? "bg-red-200" : "bg-green-200"
                                                )} />
                                            </div>

                                            <div className="flex-1 flex flex-col justify-between">
                                                <div>
                                                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                                    <p className="text-sm text-gray-500">{item.category}</p>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="font-medium text-gray-900">${item.price.toFixed(2)}</span>
                                                    <div className="flex items-center gap-3 bg-gray-50 rounded-full px-3 py-1">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, -1)}
                                                            className="p-1 hover:text-red-500 transition-colors"
                                                        >
                                                            {item.quantity === 1 ? <Trash2 className="w-4 h-4" /> : <Minus className="w-4 h-4" />}
                                                        </button>
                                                        <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, 1)}
                                                            className="p-1 hover:text-green-600 transition-colors"
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
                                <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-4">
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between text-gray-600">
                                            <span>Subtotal</span>
                                            <span>${subtotal.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-gray-600">
                                            <span>IGV (18%)</span>
                                            <span>${tax.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t border-gray-200">
                                            <span>Total</span>
                                            <span>${total.toFixed(2)}</span>
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
            </AnimatePresence>
        </>
    );
}
