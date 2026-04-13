import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { EXPERT_DATA, IMAGES } from "../constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt={EXPERT_DATA.name}
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-premium-cream via-premium-cream/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-xl px-6 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-widest uppercase text-premium-gold border border-premium-gold/30 rounded-full bg-white/50 backdrop-blur-sm">
            {EXPERT_DATA.city}
          </span>
          
          <h1 className="text-4xl md:text-5xl font-medium mb-4 leading-tight">
            Eu sou Dra. Beatriz Junqueira, sua médica em SJ Rio Preto.
          </h1>
          
          <p className="text-lg text-gray-700 mb-8 font-light leading-relaxed">
            Especialista em protocolos de alta performance para quem busca resultados reais com segurança e elegância.
          </p>

          <div className="flex flex-col items-center gap-3">
            <a
              href={EXPERT_DATA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full sm:w-auto"
            >
              <MessageCircle size={20} />
              Agendar primeira consulta gratuita
            </a>
            <p className="text-xs text-gray-500 italic">
              Resposta rápida • Sem compromisso
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
