import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Scale, Briefcase, Calculator, Shield, Heart, Wheat, Play } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Briefcase,
      title: 'Direito do Trabalho',
      description: 'Defesa de empregados e empregadores, adicional de insalubridade, horas extras, rescisões, pejotização e passivos trabalhistas.',
      features: ['Ações trabalhistas', 'Horas extras', 'Adicional de insalubridade', 'Rescisões contratuais', 'Passivos trabalhistas'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Calculator,
      title: 'Direito Tributário',
      description: 'Compensações fiscais, isenção de imposto de renda, revisão de tributos, créditos tributários e defesas administrativas.',
      features: ['Compensações fiscais', 'Revisão de tributos', 'Créditos tributários', 'Defesas administrativas', 'Planejamento tributário'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Shield,
      title: 'Direito Público e Administrativo',
      description: 'Servidores e empregados públicos, precatórios, doenças ocupacionais, indenizações e estabilidade.',
      features: ['Servidores públicos', 'Precatórios', 'Doenças ocupacionais', 'Indenizações', 'Estabilidade funcional'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Heart,
      title: 'Direito de Família e Sucessões',
      description: 'Divórcios, pensão alimentícia, guarda, inventários e regularização de bens.',
      features: ['Divórcios', 'Pensão alimentícia', 'Guarda de menores', 'Inventários', 'Sucessões'],
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Wheat,
      title: 'Direito do Agronegócio',
      description: 'Planejamento tributário rural, contratos de parceria, arrendamento, regularização de terras e responsabilidade ambiental.',
      features: ['Planejamento tributário rural', 'Contratos agrícolas', 'Regularização de terras', 'Licenciamento ambiental', 'Sucessão rural'],
      color: 'from-amber-500 to-amber-600'
    }
  ]

  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-primary">
            Principais <span className="text-gradient">áreas de atuação</span>
          </h2>
          <p className="text-large max-w-3xl mx-auto">
            Oferecemos serviços jurídicos especializados em diversas áreas do direito, 
            sempre com foco na excelência técnica e nos melhores resultados para nossos clientes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden card-hover group"
            >
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                <service.icon className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/90 leading-relaxed">{service.description}</p>
              </div>
              
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Principais serviços:</h4>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <Check className="w-4 h-4 text-accent-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/areas-atuacao"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
                >
                  Saiba mais
                  <Play className="w-4 h-4 ml-2 rotate-90 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <div className="max-w-3xl mx-auto">
            <Scale className="w-16 h-16 mx-auto mb-6 text-accent-300" />
            <h3 className="text-3xl font-bold mb-4">Advocacia estratégica com resultados</h3>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Fundamentação sólida e atuação técnica com base em jurisprudência atualizada. 
              Cada caso é analisado individualmente para desenvolver a melhor estratégia jurídica.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <div className="text-3xl font-bold mb-2 text-accent-300">Atuação</div>
                <div className="text-gray-200">Híbrida presencial e digital</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <div className="text-3xl font-bold mb-2 text-accent-300">Cobertura</div>
                <div className="text-gray-200">Todo território nacional</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <div className="text-3xl font-bold mb-2 text-accent-300">Especialização</div>
                <div className="text-gray-200">Múltiplas áreas do direito</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/areas-atuacao"
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Ver todas as áreas
              </Link>
              <Link
                to="/contato"
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/20 hover:border-white/50"
              >
                Fale conosco
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}