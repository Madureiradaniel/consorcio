import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Eye, TrendingDown, CheckCircle } from 'lucide-react';

const Benefits = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

 const benefits = [
  {
    icon: Shield,
    title: t('benefits.items.0.title'),
    description: t('benefits.items.0.description'),
    color: 'from-neon-blue to-neon-cyan',
    features: t('benefits.items.0.features', { returnObjects: true })
  },
  {
    icon: Eye,
    title: t('benefits.items.1.title'),
    description: t('benefits.items.1.description'),
    color: 'from-neon-purple to-neon-pink',
    features: t('benefits.items.1.features', { returnObjects: true })
  },
  {
    icon: TrendingDown,
    title: t('benefits.items.2.title'),
    description: t('benefits.items.2.description'),
    color: 'from-neon-green to-neon-blue',
    features: t('benefits.items.2.features', { returnObjects: true })
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="benefits" className="section-padding relative bg-dark-800/30">
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
            <span className="text-white">{t('benefits.title')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('benefits.subtitle')}
          </p>
        </motion.div>

        {/* Cards de benefícios */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="glass-card neon-border p-8 h-full hover:neon-glow transition-all duration-500 group-hover:scale-105 relative overflow-hidden">
                {/* Background gradiente sutil */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Ícone */}
                <div className="relative mb-6 flex justify-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500`}>
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="relative text-center">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:neon-text transition-all duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {benefit.description}
                  </p>

                  {/* Lista de features */}
                  <div className="space-y-3">
                    {benefit.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-neon-green" />
                        <span className="text-gray-300 text-sm font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Indicador de destaque */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-neon-blue to-neon-cyan rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Estatísticas adicionais */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { number: '99.9%', label: t('benefits.labels.0') },
            { number: '<100ms', label: t('benefits.labels.1') },
            { number: '256-bit', label: t('benefits.labels.2') },
            { number: '24/7', label: t('benefits.labels.3') },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
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

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-10 w-20 h-20 border border-neon-blue/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-10 w-16 h-16 border border-neon-purple/10 rounded-full"
        />
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-neon-cyan/5 rounded-full"
        />
      </div>
    </section>
  );
};

export default Benefits; 