import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calculator, Shield, Heart, Wheat, Scale, Check, Phone } from 'lucide-react'

export default function WorkAreasPage() {
  const areas = [
    {
      id: 'trabalhista',
      icon: Briefcase,
      title: 'Direito do Trabalho',
      description: 'Defesa especializada de empregados e empregadores em todas as questões trabalhistas, garantindo o cumprimento da legislação e a proteção dos direitos.',
      services: [
        'Ações trabalhistas para empregados',
        'Defesa de empregadores em processos',
        'Adicional de insalubridade e periculosidade',
        'Horas extras e sobretrabalho',
        'Rescisões contratuais',
        'Pejotização e vínculos empregatícios',
        'Passivos trabalhistas',
        'Negociações sindicais',
        'Auditoria trabalhista preventiva'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'tributario',
      icon: Calculator,
      title: 'Direito Tributário',
      description: 'Soluções completas em planejamento tributário, compensações fiscais e defesas administrativas para pessoas físicas e jurídicas.',
      services: [
        'Compensações fiscais',
        'Isenção de imposto de renda',
        'Revisão de tributos pagos indevidamente',
        'Créditos tributários',
        'Defesas administrativas',
        'Planejamento tributário empresarial',
        'Parcelamentos fiscais',
        'Restituição de valores',
        'Consultoria preventiva'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'publico',
      icon: Shield,
      title: 'Direito Público e Administrativo',
      description: 'Especialização em questões envolvendo servidores públicos, precatórios e relações com a administração pública.',
      services: [
        'Direitos de servidores públicos',
        'Empregados públicos CLT',
        'Precatórios e RPVs',
        'Doenças ocupacionais',
        'Indenizações por danos morais',
        'Estabilidade funcional',
        'Aposentadorias especiais',
        'Licenças e afastamentos',
        'Concursos públicos'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'familia',
      icon: Heart,
      title: 'Direito de Família e Sucessões',
      description: 'Atendimento humanizado em questões familiares e sucessórias, priorizando o diálogo e as melhores soluções para todos os envolvidos.',
      services: [
        'Divórcios consensuais e litigiosos',
        'Pensão alimentícia',
        'Guarda de menores',
        'Inventários e partilhas',
        'Sucessões e heranças',
        'União estável',
        'Adoções',
        'Testamentos',
        'Mediação familiar'
      ],
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 'agronegocio',
      icon: Wheat,
      title: 'Direito do Agronegócio',
      description: 'Assessoria jurídica especializada para o setor rural, abrangendo questões tributárias, contratuais e ambientais do agronegócio.',
      services: [
        'Planejamento tributário rural',
        'Contratos de parceria rural',
        'Arrendamento de terras',
        'Regularização fundiária',
        'Licenciamento ambiental',
        'Responsabilidade ambiental',
        'Sucessão rural',
        'Financiamentos rurais',
        'Cooperativas agrícolas'
      ],
      color: 'from-amber-500 to-amber-600'
    }
  ]

  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Scale className="w-20 h-20 mx-auto mb-8 text-accent-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Áreas de Atuação</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Oferecemos serviços jurídicos especializados em diversas áreas do direito, 
              sempre com foco na excelência técnica e nos melhores resultados para nossos clientes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {areas.map((area, index) => (
              <motion.div
                key={area.id}
                id={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`bg-gradient-to-r ${area.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{area.title}</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{area.description}</p>
                  
                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Principais serviços:</h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {area.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a
                    href="tel:(53)33520-155"
                    className="btn-primary inline-flex items-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Falar com especialista
                  </a>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className={`bg-gradient-to-br ${area.color} rounded-2xl p-8 text-white`}>
                    <div className="relative z-10">
                      <area.icon className="w-16 h-16 mb-6 text-white/90" />
                      <h3 className="text-2xl font-bold mb-4">Experiência comprovada</h3>
                      <p className="text-white/90 mb-6 leading-relaxed">
                        Nossa equipe possui vasta experiência em {area.title.toLowerCase()}, 
                        oferecendo soluções eficazes e personalizadas para cada situação.
                      </p>
                      
                      <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
                        <div className="text-sm text-white/80 mb-1">Casos atendidos</div>
                        <div className="text-2xl font-bold">200+</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white text-center"
          >
            <Scale className="w-16 h-16 mx-auto mb-6 text-accent-300" />
            <h2 className="text-3xl font-bold mb-4">Precisa de orientação jurídica?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e receba atendimento especializado na área do direito 
              que melhor atende às suas necessidades.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:(53)33520-155"
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                (53) 3352-0155
              </a>
              <a
                href="/contato"
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/20 hover:border-white/50"
              >
                Agendar consulta
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}