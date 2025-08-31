import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BarChart, Users, DollarSign } from "lucide-react";

const ConsorcioData = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const highlights = t("consorcioData.highlights", { returnObjects: true });
  const distribution = t("consorcioData.distribution", { returnObjects: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const icons = [BarChart, DollarSign, Users];

  return (
    <section
      id="consorcio-data"
      className="section-padding relative bg-dark-900/30"
    >
      <div className="container-custom">
        {/* Título da seção */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t("consorcioData.title")}
          </h2>
        </motion.div>

        {/* Cards de destaques */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {highlights.map((item, index) => {
            const Icon = icons[index] || BarChart;
            return (
              <motion.div key={index} variants={itemVariants} className="group">
                <div className="glass-card neon-border p-8 h-full hover:neon-glow transition-all duration-500 group-hover:scale-105 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-blue to-neon-cyan opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
                  <div className="relative mb-6 flex justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-neon-purple to-neon-pink rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="relative text-center">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:neon-text transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {item.value}
                    </p>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Distribuição por categoria */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            {t('consorcioData.subtitle')}
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
            {distribution.map((item, idx) => (
              <li
                key={idx}
                className="glass-card p-6 text-center hover:neon-glow transition-all duration-500"
              >
                <span className="text-xl font-semibold">{item.category}</span>
                <p className="mt-2 text-gray-400">{item.value}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      <div className="mt-6 text-right">
        <a href="https://abac.org.br/imprensa/press-releases" className="text-gray-400 text-sm italic">Fonte: ABAC</a>
      </div>
    </section>
  );
};

export default ConsorcioData;
