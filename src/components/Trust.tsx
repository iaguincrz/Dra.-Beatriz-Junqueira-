import { motion } from "motion/react";
import { ShieldCheck, UserCheck, Eye, Sparkles, HeartPulse, Clock } from "lucide-react";

const DIFFERENTIALS = [
  {
    icon: ShieldCheck,
    title: "Segurança Médica",
    description: "Todos os procedimentos são realizados sob rigoroso protocolo médico."
  },
  {
    icon: UserCheck,
    title: "Atendimento Comigo",
    description: "Você será atendido(a) diretamente por mim, do início ao fim."
  },
  {
    icon: Eye,
    title: "Avaliação Honesta",
    description: "Clareza total sobre o que é possível alcançar em cada tratamento."
  },
  {
    icon: Sparkles,
    title: "Tecnologia de Ponta",
    description: "Uso dos equipamentos mais modernos do mercado mundial."
  },
  {
    icon: HeartPulse,
    title: "Cuidado Humanizado",
    description: "Um ambiente acolhedor onde sua saúde e bem-estar são prioridade."
  },
  {
    icon: Clock,
    title: "Acompanhamento",
    description: "Suporte contínuo pós-procedimento para garantir sua satisfação."
  }
];

export default function Trust() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Por que confiar em mim?</h2>
          <p className="text-gray-600">Diferenciais que tornam o meu atendimento único e exclusivo.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIFFERENTIALS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-premium-cream border border-gray-100 hover:border-premium-gold/30 transition-colors group"
            >
              <item.icon className="text-premium-gold mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-medium mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
