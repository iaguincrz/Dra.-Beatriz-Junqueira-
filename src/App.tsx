/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import About from "./components/About";
import Results from "./components/Results";
import Trust from "./components/Trust";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Results />
      <Trust />
      <CTA 
        title="Pronto(a) para começar sua transformação?" 
        subtitle="Não deixe para depois o cuidado que você merece hoje. Clique no botão abaixo e fale diretamente com minha equipe."
      />
      <HowItWorks />
      <CTA 
        isFinal
        title="Sua jornada para a melhor versão começa aqui." 
        subtitle="Agende sua primeira consulta gratuita e descubra como nossos protocolos exclusivos podem ajudar você."
      />
      <Footer />
    </main>
  );
}

