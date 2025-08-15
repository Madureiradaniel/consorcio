import React from 'react';
import { motion } from 'framer-motion';

const FloatingParticles = () => {
  // Gerar partículas aleatórias
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-gradient-to-br from-neon-blue to-neon-cyan rounded-full opacity-20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay
          }}
        />
      ))}
      
      {/* Partículas especiais com cores diferentes */}
      <motion.div
        className="absolute w-2 h-2 bg-neon-purple rounded-full opacity-30"
        style={{ left: '15%', top: '25%' }}
        animate={{
          y: [-30, 30, -30],
          x: [-15, 15, -15],
          opacity: [0.2, 0.5, 0.2],
          scale: [0.5, 1.5, 0.5]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute w-3 h-3 bg-neon-green rounded-full opacity-25"
        style={{ left: '85%', top: '75%' }}
        animate={{
          y: [-25, 25, -25],
          x: [-20, 20, -20],
          opacity: [0.15, 0.4, 0.15],
          scale: [0.6, 1.4, 0.6]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div
        className="absolute w-1.5 h-1.5 bg-neon-pink rounded-full opacity-20"
        style={{ left: '70%', top: '15%' }}
        animate={{
          y: [-35, 35, -35],
          x: [-25, 25, -25],
          opacity: [0.1, 0.35, 0.1],
          scale: [0.7, 1.3, 0.7]
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />

      {/* Linhas de conexão sutis */}
      <motion.div
        className="absolute h-px bg-gradient-to-r from-transparent via-neon-blue/10 to-transparent"
        style={{ left: '20%', top: '40%', width: '60%' }}
        animate={{
          opacity: [0, 0.3, 0],
          scaleX: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute h-px bg-gradient-to-r from-transparent via-neon-purple/10 to-transparent"
        style={{ left: '10%', top: '60%', width: '80%' }}
        animate={{
          opacity: [0, 0.2, 0],
          scaleX: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      {/* Círculos rotativos grandes */}
      <motion.div
        className="absolute border border-neon-blue/5 rounded-full"
        style={{ left: '50%', top: '50%', width: '300px', height: '300px' }}
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 200,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute border border-neon-purple/5 rounded-full"
        style={{ left: '50%', top: '50%', width: '200px', height: '200px' }}
        animate={{
          rotate: -360
        }}
        transition={{
          duration: 150,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute border border-neon-cyan/5 rounded-full"
        style={{ left: '50%', top: '50%', width: '400px', height: '400px' }}
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 300,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default FloatingParticles; 