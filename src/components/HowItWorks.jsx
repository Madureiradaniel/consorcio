import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { UserPlus, Shield, Zap, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const steps = [
    {
      icon: UserPlus,
      title: t('howItWorks.steps.0.title'),
      description: t('howItWorks.steps.0.description'),
      color: 'from-neon-blue to-neon-cyan'
    },
    {
      icon: Shield,
      title: t('howItWorks.steps.1.title'),
      description: t('howItWorks.steps.1.description'),
      color: 'from-neon-purple to-neon-pink'
    },
    {
      icon: Zap,
      title: t('howItWorks.steps.2.title'),
      description: t('howItWorks.steps.2.description'),
      color: 'from-neon-green to-neon-blue'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="how-it-works" className="section-padding relative">
      <div className="container-custom">
        {/* Título da seção */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">{t('howItWorks.title')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </motion.div>

        {/* Passos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              {/* Card principal */}
              <div className="glass-card neon-border p-8 h-full hover:neon-glow transition-all duration-500 group-hover:scale-105">
                {/* Número do passo */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {index + 1}
                </div>

                {/* Ícone */}
                <div className="mb-6 flex justify-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:neon-text transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Indicador de progresso */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="text-neon-blue"
                    >
                      <ArrowRight className="w-8 h-8" />
                    </motion.div>
                  </div>
                )}
              </div>

              {/* Linha conectora (apenas desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-12 h-0.5 bg-gradient-to-r from-neon-blue/50 to-neon-purple/50 transform -translate-y-1/2 z-0"></div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          {/* <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-cyan text-white font-semibold rounded-xl neon-glow hover:shadow-2xl transition-all duration-300"
          >
            Começar Agora
          </motion.button> */}
        </motion.div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-32 h-32 border border-neon-blue/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-24 h-24 border border-neon-purple/20 rounded-full"
        />
      </div>
    </section>
  );
};

export default HowItWorks; 