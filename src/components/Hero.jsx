import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-32">
      {/* Background com gradientes */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Animação de blocos blockchain */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blocos blockchain flutuantes */}
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-br from-neon-blue to-neon-cyan rounded-sm opacity-20"
            style={{
              left: `${10 + (i * 7) % 80}%`,
              top: `${15 + (i * 11) % 70}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 180, 360],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
        
        {/* Linhas de conexão entre blocos */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent"
            style={{
              left: `${15 + (i * 10) % 70}%`,
              top: `${20 + (i * 8) % 60}%`,
              width: `${60 + (i * 5) % 40}px`,
              transform: `rotate(${i * 45}deg)`
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scaleX: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}
        
        {/* Círculos de validação */}
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute border border-neon-green/20 rounded-full"
            style={{
              left: `${20 + (i * 15) % 60}%`,
              top: `${25 + (i * 12) % 50}%`,
              width: `${20 + i * 8}px`,
              height: `${20 + i * 8}px`
            }}
            animate={{
              rotate: 360,
              scale: [0.8, 1.1, 0.8],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="container-custom text-center relative z-10">
        {/* Badge superior */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-2 glass-card neon-border rounded-full mb-8"
        >
          <Sparkles className="w-4 h-4 text-neon-blue" />
          <span className="text-sm font-medium text-white">
            {t('hero.badge', '🚀 Tecnologia Blockchain')}
          </span>
        </motion.div>

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">Consórcio</span>
          <br />
          <span className="neon-text text-shadow">4.0</span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* Botões */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-cyan text-white font-semibold rounded-xl neon-glow hover:shadow-2xl transition-all duration-300"
          >
            <span>{t('hero.buttons.primary')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center space-x-3 px-8 py-4 glass-card neon-border text-white font-semibold rounded-xl hover:neon-glow transition-all duration-300"
          >
            <Play className="w-5 h-5 text-neon-blue group-hover:scale-110 transition-transform duration-300" />
            <span>{t('hero.buttons.secondary')}</span>
          </motion.button>
        </motion.div>

        {/* Estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: '100%', label: 'Seguro' },
            { number: '24/7', label: 'Disponível' },
            { number: '0%', label: 'Intermediários' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold neon-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Elemento decorativo flutuante */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-neon-blue rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 