import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Scale, Users, Award, Target, Eye, Heart, Play } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Oferecer atendimento jurídico de excelência, pautado pela ética, transparência e busca constante por soluções seguras e personalizadas.'
    },
    {
      icon: Eye,
      title: 'Visão',
      description: 'Ser reconhecido como escritório de referência em advocacia, destacando-se pela qualidade técnica e comprometimento com os resultados.'
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Ética profissional, transparência, comprometimento, excelência técnica e atendimento humanizado a cada cliente.'
    }
  ]

  const differentials = [
    {
      icon: Users,
      title: 'Atendimento humanizado',
      description: 'Cada cliente é acompanhado de perto pelos advogados responsáveis pelo caso, garantindo atenção personalizada.'
    },
    {
      icon: Award,
      title: 'Agilidade e transparência',
      description: 'Informações claras sobre prazos, andamento e estratégias processuais, mantendo você sempre informado.'
    },
    {
      icon: Scale,
      title: 'Soluções personalizadas',
      description: 'Análise individual de cada situação, sem modelos prontos, desenvolvendo estratégias específicas para seu caso.'
    }
  ]

  return (
    <section id="sobre" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-primary">
            Uma advocacia <span className="text-gradient">moderna, técnica e humana</span>
          </h2>
          <p className="text-large max-w-3xl mx-auto">
            O escritório Nunes & Ribeiro Advocacia foi fundado pelos advogados Gustavo Nunes e Talisse Ribeiro, 
            com o propósito de oferecer um atendimento jurídico de excelência.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-secondary mb-6">Nossa História</h3>
            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                Com unidades em <strong>Canguçu, Pelotas e Porto Alegre</strong>, atuamos de forma presencial 
                e digital em todo o Brasil, oferecendo suporte jurídico estratégico tanto para pessoas 
                quanto para empresas.
              </p>
              <p className="text-lg leading-relaxed">
                Nossa abordagem combina a experiência tradicional da advocacia com ferramentas modernas, 
                garantindo eficiência e resultados excepcionais para nossos clientes.
              </p>
              <p className="text-lg leading-relaxed">
                Acreditamos que cada caso é único e merece atenção personalizada, por isso desenvolvemos 
                estratégias específicas para cada situação, sempre priorizando os melhores resultados.
              </p>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/sobre"
                className="btn-primary"
              >
                Conheça nossa história
              </Link>
              <Link
                to="/equipe"
                className="btn-secondary"
              >
                Nossa equipe
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-transparent rounded-2xl"></div>
              <div className="relative z-10">
                <Scale className="w-12 h-12 mb-6 text-accent-300" />
                <h4 className="text-2xl font-bold mb-4">Escritório de referência</h4>
                <p className="text-lg text-gray-200 mb-6">
                  Mais de 15 anos de experiência em diversas áreas do direito, 
                  sempre priorizando a ética e os melhores resultados para nossos clientes.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent-300">1000+</div>
                    <div className="text-sm text-gray-300">Casos atendidos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent-300">98%</div>
                    <div className="text-sm text-gray-300">Taxa de sucesso</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="heading-secondary text-center mb-12">Missão, Visão e Valores</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center card-hover"
              >
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="heading-secondary text-center mb-12">Por que escolher o Nunes & Ribeiro?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {differentials.map((differential, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 card-hover"
              >
                <div className="bg-gradient-to-br from-accent-500 to-accent-600 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <differential.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{differential.title}</h4>
                <p className="text-gray-600 leading-relaxed">{differential.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}