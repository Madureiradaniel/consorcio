import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Mail, CheckCircle, AlertCircle } from 'lucide-react';

const CTA = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simular envio do formulário
    setTimeout(() => {
      if (email.includes('@')) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    }, 1000);
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-neon-green" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-400" />;
      default:
        return <Mail className="w-5 h-5 text-neon-blue" />;
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'success':
        return t('form.success');
      case 'error':
        return t('form.error');
      default:
        return t('form.email');
    }
  };

  return (
    <section id="contact" className="section-padding relative bg-gradient-to-br from-dark-800/50 to-dark-700/50">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          {/* Título principal */}
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
          >
            <span className="text-white">
              {t('cta.text').split(' ').slice(0, -3).join(' ')}
            </span>
            <br />
            <span className="neon-text text-shadow">
              {t('cta.text').split(' ').slice(-3).join(' ')}
            </span>
          </motion.h2>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-12 leading-relaxed"
          >
            Junte-se a milhares de pessoas que já estão revolucionando seus consórcios com nossa tecnologia blockchain.
          </motion.p>

          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-md mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('form.placeholder')}
                  className="w-full px-6 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                  required
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  {getStatusIcon()}
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-cyan text-white font-semibold rounded-xl neon-glow hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <span>{t('form.submit')}</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>

              {/* Status message */}
              {status !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-sm font-medium ${
                    status === 'success' ? 'text-neon-green' : 
                    status === 'error' ? 'text-red-400' : 'text-gray-400'
                  }`}
                >
                  {getStatusText()}
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Botão secundário */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-card neon-border text-white font-semibold rounded-xl hover:neon-glow transition-all duration-300"
            >
              {t('cta.button')}
            </motion.button>
          </motion.div>

          {/* Informações adicionais */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: '🔒', title: '100% Seguro', description: 'Seus dados estão protegidos' },
              { icon: '⚡', title: 'Sem Spam', description: 'Apenas conteúdo relevante' },
              { icon: '📱', title: 'Mobile First', description: 'Otimizado para todos os dispositivos' }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-32 h-32 border border-neon-blue/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-28 h-28 border border-neon-purple/10 rounded-full"
        />
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-10 w-16 h-16 border border-neon-cyan/10 rounded-full"
        />
      </div>
    </section>
  );
};

export default CTA; 