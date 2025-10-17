import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Scale, Phone, Calendar, Play } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container-custom text-center text-white"
      >
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-full p-6 border border-white/20">
            <Scale className="w-16 h-16 text-white" />
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif"
        >
          Segurança jurídica, estratégia e{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-300">
            comprometimento
          </span>{' '}
          com cada cliente
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed"
        >
          Atuamos com excelência nas áreas trabalhista, tributária, pública, empresarial e de família, 
          defendendo os direitos de pessoas físicas e jurídicas com ética, técnica e resultado.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <a
            href="tel:(53)33520-155"
            className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:from-accent-600 hover:to-accent-700 hover:shadow-xl hover:scale-105 active:scale-95 inline-flex items-center"
          >
            <Phone className="w-5 h-5 mr-3" />
            Fale com um advogado
          </a>
          
          <Link
            to="/contato"
            className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:shadow-xl hover:scale-105 active:scale-95 inline-flex items-center"
          >
            <Calendar className="w-5 h-5 mr-3" />
            Agendar consulta
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold mb-2">15+</div>
            <div className="text-gray-200">Anos de experiência</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold mb-2">3</div>
            <div className="text-gray-200">Escritórios no RS</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold mb-2">1000+</div>
            <div className="text-gray-200">Casos atendidos</div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white text-center"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto mb-2 relative">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-3 bg-white/70 rounded-full absolute left-1/2 top-1 transform -translate-x-1/2"
            ></motion.div>
          </div>
          <div className="text-sm text-gray-300">Role para baixo</div>
        </motion.div>
      </motion.div>
    </section>
  )
}