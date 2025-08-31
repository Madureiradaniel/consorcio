import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng === "pt" ? "pt-BR" : "en";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-800/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div>
            <a href="#hero">
              <img
                src="/src/assets/logo.png"
                alt="Logo"
                className="w-32 h-auto" // removido mx-auto
              />
            </a>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-neon-blue transition-colors duration-300"
              >
              {t('header.items.0.title')}
            </a>
            <a
              href="#benefits"
              className="text-gray-300 hover:text-neon-blue transition-colors duration-300"
            >
              {t('header.items.1.title')}
            </a>
            <a
              href="#technology"
              className="text-gray-300 hover:text-neon-blue transition-colors duration-300"
            >
              {t('header.items.2.title')}
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-neon-blue transition-colors duration-300"
            >
              {t('header.items.3.title')}
            </a>
          </nav>

          {/* Seletor de Idioma */}
          <div className="flex items-center space-x-4 bg-dark-700">
            <motion.div whileHover={{ scale: 1.05 }} className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 bg-dark-700/90 neon-border rounded-lg hover:neon-glow transition-all duration-300">
                <Globe className="w-4 h-4 text-neon-blue" />
                <span className="text-white font-medium">
                  {i18n.language === "pt" ? "PT" : "EN"}
                </span>
              </button>

              {/* Dropdown de idiomas */}

              <div className="absolute right-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-dark-700/90 neon-border rounded-lg p-2 min-w-[120px]">
                  <button
                    onClick={() => changeLanguage("pt")}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${
                      i18n.language === "pt"
                        ? "bg-neon-blue/20 text-neon-blue"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    Português
                  </button>
                  <button
                    onClick={() => changeLanguage("en")}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${
                      i18n.language === "en"
                        ? "bg-neon-blue/20 text-neon-blue"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Menu Mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-300 hover:text-neon-blue transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-white/10 z-50 px-4 relative bg-dark-700/90 neon-border rounded-lg"
            >
              <nav className="py-4 space-y-4">
                <a
                  href="#how-it-works"
                  className="block text-gray-300 hover:text-neon-blue transition-colors duration-300"
                >
                  Como Funciona
                </a>
                <a
                  href="#benefits"
                  className="block text-gray-300 hover:text-neon-blue transition-colors duration-300"
                >
                  Benefícios
                </a>
                <a
                  href="#technology"
                  className="block text-gray-300 hover:text-neon-blue transition-colors duration-300"
                >
                  Tecnologia
                </a>
                <a
                  href="#contact"
                  className="block text-gray-300 hover:text-neon-blue transition-colors duration-300"
                >
                  Contato
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
