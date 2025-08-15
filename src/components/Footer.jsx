import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Produto',
      links: [
        { name: 'Como Funciona', href: '#how-it-works' },
        { name: 'Benefícios', href: '#benefits' },
        { name: 'Tecnologia', href: '#technology' },
        { name: 'Preços', href: '#pricing' }
      ]
    },
    {
      title: 'Empresa',
      links: [
        { name: 'Sobre Nós', href: '#about' },
        { name: 'Carreiras', href: '#careers' },
        { name: 'Imprensa', href: '#press' },
        { name: 'Blog', href: '#blog' }
      ]
    },
    {
      title: 'Suporte',
      links: [
        { name: 'Central de Ajuda', href: '#help' },
        { name: 'Documentação', href: '#docs' },
        { name: 'Contato', href: '#contact' },
        { name: 'Status', href: '#status' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacidade', href: '#privacy' },
        { name: 'Termos de Uso', href: '#terms' },
        { name: 'Cookies', href: '#cookies' },
        { name: 'Licenças', href: '#licenses' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-dark-900 border-t border-white/10 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-800/50 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <div className="py-16">
          {/* Seção principal */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Logo e descrição */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">C</span>
                  </div>
                  <span className="text-xl font-bold text-white">Consórcio 4.0</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {t('footer.description')}
                </p>
              </motion.div>

              {/* Informações de contato */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-3"
              >
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-4 h-4 text-neon-blue" />
                  <span>contato@consorciofuturista.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-4 h-4 text-neon-blue" />
                  <span>+55 (11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-4 h-4 text-neon-blue" />
                  <span>São Paulo, Brasil</span>
                </div>
              </motion.div>
            </div>

            {/* Links organizados */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-white font-semibold text-lg">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Linha divisória */}
          <div className="border-t border-white/10 my-8"></div>

          {/* Seção inferior */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm"
            >
              © {currentYear} Consórcio Futurista. Todos os direitos reservados.
            </motion.div>

            {/* Redes sociais */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 glass-card neon-border rounded-lg flex items-center justify-center text-gray-400 hover:text-neon-blue hover:neon-glow transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-24 h-24 border border-neon-blue/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-16 h-16 border border-neon-purple/5 rounded-full"
        />
      </div>
    </footer>
  );
};

export default Footer; 