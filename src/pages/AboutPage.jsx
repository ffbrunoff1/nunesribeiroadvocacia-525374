import React from 'react'
import { motion } from 'framer-motion'
import { Scale, Award, Target, Eye, Heart, Users, Building, Calendar } from 'lucide-react'

export default function AboutPage() {
  const milestones = [
    {
      year: '2010',
      title: 'Fundação do escritório',
      description: 'Dr. Gustavo Nunes e Dra. Talisse Ribeiro fundam o escritório em Canguçu'
    },
    {
      year: '2015',
      title: 'Expansão para Pelotas',
      description: 'Abertura da segunda unidade para atender a região sul do RS'
    },
    {
      year: '2020',
      title: 'Unidade em Porto Alegre',
      description: 'Inauguração do escritório na capital, expandindo nossa atuação'
    },
    {
      year: '2024',
      title: 'Mais de 1000 casos',
      description: 'Marco de mil casos atendidos com excelência e comprometimento'
    }
  ]

  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Oferecer atendimento jurídico de excelência, pautado pela ética, transparência e busca constante por soluções seguras e personalizadas para cada cliente.'
    },
    {
      icon: Eye,
      title: 'Visão',
      description: 'Ser reconhecido como escritório de referência em advocacia no Rio Grande do Sul, destacando-se pela qualidade técnica e comprometimento com os resultados.'
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Ética profissional, transparência nas relações, comprometimento com resultados, excelência técnica e atendimento humanizado a cada cliente.'
    }
  ]

  const principles = [
    {
      icon: Scale,
      title: 'Ética e Transparência',
      description: 'Atuamos sempre com base nos mais altos padrões éticos da advocacia, mantendo transparência total com nossos clientes sobre estratégias, prazos e custos.'
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Cada cliente recebe atenção individualizada, com acompanhamento direto dos advogados responsáveis pelo caso e comunicação constante sobre o andamento.'
    },
    {
      icon: Award,
      title: 'Excelência Técnica',
      description: 'Nossa equipe mantém-se constantemente atualizada com as mudanças legislativas e jurisprudenciais, garantindo a melhor defesa dos interesses dos clientes.'
    },
    {
      icon: Building,
      title: 'Atuação Estratégica',
      description: 'Desenvolvemos estratégias jurídicas personalizadas para cada caso, combinando conhecimento técnico com visão prática dos negócios e das relações humanas.'
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
            <Building className="w-20 h-20 mx-auto mb-8 text-accent-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre o Escritório</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Uma advocacia moderna, técnica e humana, comprometida com a excelência 
              no atendimento e na busca pelos melhores resultados para nossos clientes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa História</h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  O escritório <strong>Nunes & Ribeiro Advocacia</strong> foi fundado pelos advogados 
                  Dr. Gustavo Nunes e Dra. Talisse Ribeiro, com o propósito de oferecer um atendimento 
                  jurídico de excelência, pautado pela ética, transparência e busca constante por 
                  soluções seguras e personalizadas.
                </p>
                <p className="text-lg leading-relaxed">
                  Com mais de 15 anos de experiência no mercado jurídico, nosso escritório cresceu 
                  organicamente, sempre mantendo o foco na qualidade do atendimento e na satisfação 
                  dos clientes.
                </p>
                <p className="text-lg leading-relaxed">
                  Hoje, com unidades em <strong>Canguçu, Pelotas e Porto Alegre</strong>, atuamos 
                  de forma presencial e digital em todo o Brasil, oferecendo suporte jurídico 
                  estratégico tanto para pessoas físicas quanto para empresas de diversos segmentos.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Nossos Números</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
                    <div className="text-gray-600">Anos de experiência</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-600 mb-2">3</div>
                    <div className="text-gray-600">Escritórios no RS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
                    <div className="text-gray-600">Casos atendidos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
                    <div className="text-gray-600">Taxa de sucesso</div>
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
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nossa Trajetória</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-accent-500"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-500 rounded-full border-4 border-white shadow-lg"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Missão, Visão e Valores</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nossos pilares fundamentais orientam todas as nossas ações e decisões, 
              garantindo que sempre atuemos com excelência e integridade.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8 text-center card-hover"
              >
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nossos Princípios</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-8 card-hover"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-accent-500 to-accent-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <principle.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{principle.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}