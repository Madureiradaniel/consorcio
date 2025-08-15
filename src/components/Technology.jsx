import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Server, Shield, Zap, Eye, Database, Lock, Cpu, Network } from 'lucide-react';

const Technology = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const techFeatures = [
    {
      icon: Server,
      title: 'Smart Contracts',
      description: 'Execução automática e confiável de todas as regras do consórcio',
      color: 'from-neon-blue to-neon-cyan'
    },
    {
      icon: Database,
      title: 'Blockchain Pública',
      description: 'Transparência total com dados imutáveis e verificáveis',
      color: 'from-neon-purple to-neon-pink'
    },
    {
      icon: Eye,
      title: 'Auditoria em Tempo Real',
      description: 'Monitoramento contínuo de todas as transações',
      color: 'from-neon-green to-neon-blue'
    },
    {
      icon: Lock,
      title: 'Criptografia Avançada',
      description: 'Segurança de nível bancário para seus dados',
      color: 'from-neon-pink to-neon-purple'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section id="technology" className="section-padding relative">
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
            <span className="text-white">{t('technology.title')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('technology.subtitle')}
          </p>
        </motion.div>

        {/* Layout em duas colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Coluna esquerda - Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('technology.text')}
              </p>
              
              {/* Destaques */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
                  <span className="text-white font-medium">Execução automática via smart contracts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                  <span className="text-white font-medium">Transparência total em tempo real</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                  <span className="text-white font-medium">Segurança criptográfica avançada</span>
                </div>
              </div>
            </div>

            {/* Botão CTA */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-cyan text-white font-semibold rounded-xl neon-glow hover:shadow-2xl transition-all duration-300"
            >
              Explorar Tecnologia
            </motion.button>
          </motion.div>

          {/* Coluna direita - Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {techFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="glass-card neon-border p-6 hover:neon-glow transition-all duration-500 group-hover:scale-105">
                  <div className="flex items-start space-x-4">
                    {/* Ícone */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 flex-shrink-0`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:neon-text transition-all duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Arquitetura visual */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="glass-card neon-border p-8 relative overflow-hidden">
            {/* Background com gradiente */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Arquitetura do Sistema
              </h3>
              
              {/* Diagrama simplificado */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-neon-blue to-neon-cyan rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Cpu className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Frontend</h4>
                  <p className="text-gray-400 text-sm">Interface moderna e responsiva</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-neon-purple to-neon-pink rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Network className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Blockchain</h4>
                  <p className="text-gray-400 text-sm">Rede descentralizada e segura</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-neon-green to-neon-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Smart Contracts</h4>
                  <p className="text-gray-400 text-sm">Lógica de negócio automatizada</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-24 h-24 border border-neon-blue/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-20 h-20 border border-neon-purple/10 rounded-full"
        />
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-16 h-16 border border-neon-cyan/10 rounded-full"
        />
      </div>
    </section>
  );
};

export default Technology; 