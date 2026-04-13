import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { EXPERT_DATA, IMAGES } from "../constants";

export default function About() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto grid md:grid-row-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={IMAGES.hero}
              alt={EXPERT_DATA.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-premium-gold text-white p-6 rounded-xl shadow-xl hidden sm:block">
            <p className="text-sm font-semibold uppercase tracking-wider">CRM-SP</p>
            <p className="text-2xl font-serif">237796</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-6 leading-tight">
            Excelência médica focada na sua melhor versão.
          </h2>
          
          <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
            <p>
              Acredito que a medicina deve ser personalizada e humana. Meu objetivo é entregar resultados que elevam a autoestima através de ciência e tecnologia de ponta.
            </p>
            <p>
              Com o Protocolo ALLMA e o Protocolo LipoLaser, oferecemos o que há de mais moderno em tratamentos estéticos e de saúde.
            </p>
          </div>

          <ul className="space-y-4 mb-8">
            {[
              "Atendimento 100% personalizado",
              "Protocolos exclusivos e validados",
              "Foco em resultados naturais e seguros",
              "Acompanhamento médico em todas as etapas"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-800">
                <CheckCircle2 className="text-premium-gold" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
