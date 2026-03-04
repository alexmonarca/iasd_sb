/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  BookOpen, 
  Youtube, 
  Instagram, 
  MessageCircle, 
  ExternalLink,
  MapPin,
  Clock
} from "lucide-react";

const links = [
  {
    title: "Estudo Bíblico",
    description: "Aprenda mais sobre a Bíblia conosco",
    url: "https://www.biblia.com.br/",
    icon: <BookOpen className="w-6 h-6" />,
    color: "bg-emerald-600"
  },
  {
    title: "Youtube Novo Tempo",
    description: "Programação cristã 24 horas",
    url: "https://www.youtube.com/@NovoTempo",
    icon: <Youtube className="w-6 h-6" />,
    color: "bg-red-600"
  },
  {
    title: "Instagram IASD São Borja",
    description: "Acompanhe nosso dia a dia",
    url: "https://www.instagram.com/iasdsaoborja/",
    icon: <Instagram className="w-6 h-6" />,
    color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600"
  },
  {
    title: "WhatsApp",
    description: "Fale conosco agora mesmo",
    url: "https://wa.me/5555999999999", // Placeholder for São Borja
    icon: <MessageCircle className="w-6 h-6" />,
    color: "bg-green-500"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a2a] text-white font-sans selection:bg-indigo-500/30">
      {/* Background Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-indigo-900/20 via-purple-900/20 to-black pointer-events-none" />
      
      <main className="relative z-10 max-w-md mx-auto px-6 py-12 flex flex-col items-center">
        {/* Logo Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <div className="w-32 h-32 rounded-full border-4 border-white/10 p-1 bg-gradient-to-br from-indigo-600 to-purple-700 shadow-2xl mb-4 overflow-hidden mx-auto">
            {/* Using a standard IASD logo placeholder - replace with actual logo if needed */}
            <img 
              src="https://www.adventistas.org/pt/wp-content/uploads/sites/2/2013/05/logo-iasd-vertical.png" 
              alt="IASD Logo" 
              className="w-full h-full object-contain p-2 brightness-0 invert"
              referrerPolicy="no-referrer"
            />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">IASD São Borja</h1>
          <p className="text-indigo-200/70 text-sm mt-1">Igreja Adventista do Sétimo Dia</p>
        </motion.div>

        {/* Info Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex gap-4 mb-10 text-xs text-indigo-100/60 font-medium uppercase tracking-wider"
        >
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>São Borja, RS</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>Sábados às 09h</span>
          </div>
        </motion.div>

        {/* Links Section */}
        <div className="w-full space-y-4">
          {links.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * (index + 3), duration: 0.5 }}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg"
            >
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${link.color} flex items-center justify-center shadow-inner`}>
                {link.icon}
              </div>
              <div className="ml-4 flex-grow">
                <h2 className="text-base font-semibold text-white group-hover:text-indigo-300 transition-colors">
                  {link.title}
                </h2>
                <p className="text-xs text-indigo-100/50">
                  {link.description}
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-white/40 transition-colors" />
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-xs text-indigo-100/30 uppercase tracking-[0.2em] font-medium">
            Esperança em cada página
          </p>
          <div className="mt-4 h-px w-12 bg-indigo-500/20 mx-auto" />
        </motion.footer>
      </main>
    </div>
  );
}
