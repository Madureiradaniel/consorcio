import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, Star } from 'lucide-react';

const LiftLabPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostrar popup após 2 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 50 }}
            animate={{ scale: 0.77, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-4xl w-full glass-card neon-border p-10 text-center"
          >
            {/* Botão fechar */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Ícone de prêmio */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", damping: 15 }}
              className="mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-neon-green to-neon-blue rounded-full flex items-center justify-center shadow-2xl"
            >
              <Award className="w-10 h-10 text-white" />
            </motion.div>

            {/* Título */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              🎉 Selecionados no Lift Lab!
            </motion.h2>

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-300 mb-6"
            >
              Temos o orgulho de anunciar que o Consórcio 4.0 foi selecionado para participar do programa de aceleração do Lift Lab!
            </motion.p>

            {/* Imagem do Lift Lab */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-6"
            >
              <div className="relative group">
                <img
                  src="https://s3.multdesk.com.br/public/lift.png"
                  alt="Lift Lab - Programa de Aceleração"
                  className="mx-auto max-w-full h-auto rounded-lg shadow-2xl transition-all duration-500 group-hover:scale-105"
                  style={{ maxHeight: '350px', minHeight: '300px' }}
                />
                {/* Efeito de brilho ao hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              </div>
            </motion.div>

            {/* Descrição */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="space-y-3 mb-8"
            >
              <div className="flex items-center justify-center space-x-2 text-neon-green">
                <Star className="w-5 h-5" />
                <span className="text-white font-medium">Inovação em Blockchain</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-neon-blue">
                <Star className="w-5 h-5" />
                <span className="text-white font-medium">Tecnologia de Ponta</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-neon-purple">
                <Star className="w-5 h-5" />
                <span className="text-white font-medium">Futuro dos Consórcios</span>
              </div>
            </motion.div>

            {/* Botão de ação */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={closePopup}
              className="px-8 py-4 bg-gradient-to-r from-neon-green to-neon-blue text-white font-semibold rounded-xl neon-glow hover:shadow-2xl transition-all duration-300"
            >
              Continuar Explorando
            </motion.button>

            {/* Badge de destaque */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-neon-pink to-neon-purple rounded-full flex items-center justify-center shadow-lg"
            >
              <span className="text-white font-bold text-sm">NEW</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LiftLabPopup; 