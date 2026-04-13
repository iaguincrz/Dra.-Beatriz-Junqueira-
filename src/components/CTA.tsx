import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { EXPERT_DATA } from "../constants";

interface CTAProps {
  title: string;
  subtitle: string;
  isFinal?: boolean;
}

export default function CTA({ title, subtitle, isFinal = false }: CTAProps) {
  return (
    <section className={`py-20 px-6 ${isFinal ? 'bg-premium-dark text-white' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-3xl md:text-5xl font-medium mb-6 leading-tight ${isFinal ? 'text-white' : 'text-premium-dark'}`}>
            {title}
          </h2>
          <p className={`text-lg mb-10 font-light max-w-2xl mx-auto ${isFinal ? 'text-gray-300' : 'text-gray-600'}`}>
            {subtitle}
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <a
              href={EXPERT_DATA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-12 py-5 text-lg"
            >
              <MessageCircle size={24} />
              Agendar minha consulta gratuita
            </a>
            <p className={`text-sm italic ${isFinal ? 'text-gray-500' : 'text-gray-400'}`}>
              Vagas limitadas para este mês • Resposta rápida
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
