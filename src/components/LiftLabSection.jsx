import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Star, TrendingUp, Rocket, Users, Target } from 'lucide-react';

const LiftLabSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const achievements = [
    {
      icon: Award,
      title: 'Selecionados no Lift Lab',
      description: 'Programa de aceleração de startups inovadoras',
      color: 'from-neon-green to-neon-blue'
    },
    {
      icon: TrendingUp,
      title: 'Crescimento Exponencial',
      description: 'Mentoria e recursos para escalar o negócio',
      color: 'from-neon-blue to-neon-cyan'
    },
    {
      icon: Rocket,
      title: 'Inovação Tecnológica',
      description: 'Desenvolvimento de soluções blockchain avançadas',
      color: 'from-neon-purple to-neon-pink'
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Mentoria Especializada',
      description: 'Acompanhamento de especialistas em blockchain e fintech'
    },
    {
      icon: Target,
      title: 'Networking Premium',
      description: 'Conexões com investidores e parceiros estratégicos'
    },
    {
      icon: Star,
      title: 'Validação de Mercado',
      description: 'Teste e validação com usuários reais'
    }
  ];

  return (
    <section className="section-padding relative bg-gradient-to-br from-dark-800/50 to-dark-700/50">
      <div className="container-custom">
        {/* Título da seção */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-3 px-6 py-3 glass-card neon-border rounded-full mb-6">
            <Award className="w-6 h-6 text-neon-green" />
            <span className="text-neon-green font-semibold">Lift Lab</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Selecionados no</span>
            <br />
            <span className="neon-text text-shadow">Lift Lab</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            O Consórcio 4.0 foi selecionado para participar do programa de aceleração do Lift Lab, 
            reconhecendo nossa inovação em tecnologia blockchain para consórcios.
          </p>
        </motion.div>

        {/* Imagem principal do Lift Lab */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="glass-card neon-border p-12 inline-block max-w-4xl">
            <div className="relative group">
              <img
                src="https://s3.multdesk.com.br/public/lift.png"
                alt="Lift Lab - Programa de Aceleração"
                className="max-w-full h-auto rounded-lg shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl"
                style={{ maxHeight: '500px', minHeight: '400px' }}
              />
              {/* Efeito de brilho ao hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            </div>
          </div>
        </motion.div>

        {/* Conquistas */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="group"
            >
              <div className="glass-card neon-border p-8 h-full hover:neon-glow transition-all duration-500 group-hover:scale-105 text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500`}>
                  <achievement.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:neon-text transition-all duration-300">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefícios do programa */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            O que o Lift Lab nos oferece
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-neon-green to-neon-blue rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="glass-card neon-border p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              🚀 Junte-se à Revolução
            </h3>
            <p className="text-gray-300 mb-6">
              Como parte do programa Lift Lab, estamos acelerando o desenvolvimento de soluções 
              inovadoras que transformarão o futuro dos consórcios.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-neon-green to-neon-blue text-white font-semibold rounded-xl neon-glow hover:shadow-2xl transition-all duration-300"
            >
              Saiba Mais sobre o Lift Lab
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-24 h-24 border border-neon-green/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-20 h-20 border border-neon-blue/10 rounded-full"
        />
      </div>
    </section>
  );
};

export default LiftLabSection; 