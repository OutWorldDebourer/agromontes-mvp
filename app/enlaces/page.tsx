"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Globe, MessageCircle, Leaf } from "lucide-react";
import Link from "next/link";

// Custom TikTok Icon since Lucide doesn't have it yet or it might vary
const TikTokIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

const LINKS = [
    {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=100066852608519&locale=es_LA",
        icon: Facebook,
        color: "bg-[#1877F2]",
        textColor: "text-white"
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/agromontes.peru/",
        icon: Instagram,
        color: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]",
        textColor: "text-white"
    },
    {
        name: "TikTok",
        url: "https://www.tiktok.com/@agromontesad",
        icon: TikTokIcon,
        color: "bg-black",
        textColor: "text-white"
    },
    {
        name: "YouTube",
        url: "#",
        icon: Youtube,
        color: "bg-[#FF0000]",
        textColor: "text-white",
        onClick: (e: React.MouseEvent) => {
            e.preventDefault();
            alert("¡Nuestro canal de YouTube estará disponible próximamente! Suscríbete a nuestras redes para enterarte.");
        }
    },
    {
        name: "Página Web",
        url: "https://outworlddebourer.github.io/agromontes-mvp/",
        icon: Globe,
        color: "bg-green-600",
        textColor: "text-white"
    },
    {
        name: "WhatsApp",
        url: "https://wa.me/51952348485?text=Hola,%20vi%20tu%20perfil%20y%20me%20interesa%20conocer%20más%20sobre%20Agro%20Montes",
        icon: MessageCircle,
        color: "bg-[#25D366]",
        textColor: "text-white"
    }
];

export default function LinksPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-gray-900 dark:via-gray-800 dark:to-green-900/20 flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md z-10"
            >
                {/* Header */}
                <div className="text-center mb-8">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                        className="w-24 h-24 bg-white dark:bg-gray-800 rounded-full mx-auto mb-4 shadow-xl flex items-center justify-center border-4 border-green-500 p-4"
                    >
                        <Leaf className="w-12 h-12 text-green-600 dark:text-green-400" />
                    </motion.div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                        AGRO MONTES
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">
                        Tecnología agrícola de vanguardia
                    </p>
                </div>

                {/* Links */}
                <div className="space-y-4">
                    {LINKS.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.url}
                            target={link.url.startsWith("http") ? "_blank" : "_self"}
                            onClick={link.onClick}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className={`
                                flex items-center p-4 rounded-xl shadow-md hover:shadow-lg transition-all
                                ${link.color} ${link.textColor}
                                group relative overflow-hidden
                            `}
                        >
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                            <span className="text-2xl mr-4 bg-white/20 p-2 rounded-lg">
                                <link.icon className="w-6 h-6" />
                            </span>
                            <span className="font-bold text-lg flex-1 text-center pr-10">
                                {link.name}
                            </span>
                        </motion.a>
                    ))}
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-12 text-center"
                >
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        © {new Date().getFullYear()} Agro Montes
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}
