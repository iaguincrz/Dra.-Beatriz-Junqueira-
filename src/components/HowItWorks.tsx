import { motion } from "motion/react";
import { MessageCircle, Calendar, ClipboardCheck } from "lucide-react";

const STEPS = [
  {
    icon: MessageCircle,
    title: "Contato via WhatsApp",
    description: "Clique no botão e fale com minha equipe para tirar dúvidas iniciais."
  },
  {
    icon: Calendar,
    title: "Agendamento",
    description: "Escolha o melhor horário para sua primeira consulta gratuita."
  },
  {
    icon: ClipboardCheck,
    title: "Avaliação Médica",
    description: "Realizamos uma análise completa para definir seu protocolo personalizado."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-premium-cream">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Como funciona a primeira consulta</h2>
          <p className="text-gray-600">Simples, transparente e sem compromisso.</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-premium-gold/20 -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg mb-6 border-4 border-premium-cream">
                  <step.icon className="text-premium-gold" size={32} />
                </div>
                <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="inline-block px-6 py-3 bg-white rounded-full text-premium-gold font-medium border border-premium-gold/20 shadow-sm">
            ✨ Primeira consulta gratuita e sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
}
