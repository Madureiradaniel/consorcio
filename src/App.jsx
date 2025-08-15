import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Technology from './components/Technology';
import LiftLabSection from './components/LiftLabSection';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingParticles from './components/FloatingParticles';
import LiftLabPopup from './components/LiftLabPopup';

function App() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    // Simular carregamento inicial
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-neon-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-neon-blue">Consórcio Futurista</h2>
          <p className="text-gray-400 mt-2">Carregando...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900 relative overflow-hidden">
      <FloatingParticles />
      
      {/* Background animado */}
      <motion.div
        className="fixed inset-0 z-0"
        style={{ y: backgroundY, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,212,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      </motion.div>

      {/* Conteúdo principal */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <HowItWorks />
          <Benefits />
          <Technology />
          <LiftLabSection />
          <CTA />
        </main>
        <Footer />
      </div>
      
      {/* Popup do Lift Lab */}
      <LiftLabPopup />
    </div>
  );
}

export default App; 