import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'
import { Phone, Mail, Map, Clock, Instagram, Calendar } from 'lucide-react'

export default function ContactPage() {
  const recaptchaRef = useRef(null)
  const [status, setStatus] = useState({ message: '', isError: false })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: '',
    urgency: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const payload = {
        ...formData,
        recipientEmail: '',
        token: token
      }
      
      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })
      
      if (response.ok) {
        setStatus({
          message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
          isError: false
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          preferredContact: '',
          urgency: ''
        })
      } else {
        throw new Error('Erro ao enviar mensagem')
      }
    } catch (error) {
      setStatus({
        message: 'Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.',
        isError: true
      })
    }
    
    recaptchaRef.current.reset()
  }

  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '(53) 3352-0155',
      description: 'Atendimento de segunda a sexta, das 9h às 18h',
      link: 'tel:(53)33520-155',
      action: 'Ligar agora'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contato@nunesribeiro.adv.br',
      description: 'Resposta em até 24 horas',
      link: 'mailto:contato@nunesribeiro.adv.br',
      action: 'Enviar email'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      content: '@nuneseribeiroadv',
      description: 'Informações jurídicas atualizadas',
      link: 'https://www.instagram.com/nuneseribeiroadv/',
      action: 'Seguir'
    }
  ]

  const offices = [
    {
      city: 'Canguçu - Matriz',
      address: 'Rua General Osório, nº 245 - Centro',
      phone: '(53) 3352-0155',
      hours: 'Segunda a sexta, das 9h às 18h',
      specialty: 'Direito do Trabalho, Previdenciário e Público',
      cep: 'CEP: 96600-000'
    },
    {
      city: 'Pelotas - Unidade Regional',
      address: 'Rua Quinze de Novembro, nº 1220 - Centro',
      phone: '(53) 3278-0000',
      hours: 'Atendimento mediante agendamento',
      specialty: 'Direito Tributário, Empresarial e do Agronegócio',
      cep: 'CEP: 96015-000'
    },
    {
      city: 'Porto Alegre - Unidade Capital',
      address: 'Av. Borges de Medeiros, nº 367 - Sala 802 - Centro Histórico',
      phone: '(51) 3095-0000',
      hours: 'Atendimento com hora marcada',
      specialty: 'Direito Público, Servidores e Contencioso Estratégico',
      cep: 'CEP: 90020-023'
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
            <Phone className="w-20 h-20 mx-auto mb-8 text-accent-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Entre em Contato</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Cada caso merece atenção exclusiva. Entre em contato e receba orientação 
              jurídica de forma ética, técnica e segura.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8 text-center card-hover"
              >
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-lg text-primary-600 font-semibold mb-2">{method.content}</p>
                <p className="text-gray-600 mb-6">{method.description}</p>
                <a
                  href={method.link}
                  target={method.title === 'Instagram' ? '_blank' : undefined}
                  rel={method.title === 'Instagram' ? 'noopener noreferrer' : undefined}
                  className="btn-primary w-full"
                >
                  {method.action}
                </a>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Envie sua mensagem</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                        Forma preferida de contato
                      </label>
                      <select
                        id="preferredContact"
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Selecione</option>
                        <option value="telefone">Telefone</option>
                        <option value="email">Email</option>
                        <option value="whatsapp">WhatsApp</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Área de interesse *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Selecione a área</option>
                        <option value="Direito do Trabalho">Direito do Trabalho</option>
                        <option value="Direito Tributário">Direito Tributário</option>
                        <option value="Direito Público">Direito Público</option>
                        <option value="Direito de Família">Direito de Família</option>
                        <option value="Direito do Agronegócio">Direito do Agronegócio</option>
                        <option value="Outros">Outros</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                        Urgência
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Selecione</option>
                        <option value="baixa">Baixa - Consulta geral</option>
                        <option value="media">Média - Preciso de orientação</option>
                        <option value="alta">Alta - Situação urgente</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Descreva sua situação ou dúvida jurídica com o máximo de detalhes possível..."
                    ></textarea>
                  </div>

                  {status.message && (
                    <div className={`p-4 rounded-lg ${
                      status.isError 
                        ? 'bg-red-50 text-red-700 border border-red-200' 
                        : 'bg-green-50 text-green-700 border border-green-200'
                    }`}>
                      {status.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Enviar mensagem
                  </button>

                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
                    size="invisible"
                  />
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Atendimento especializado</h3>
                <div className="space-y-4 text-gray-200">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-accent-300" />
                    <span>Atendimento online e presencial</span>
                  </div>
                  <div className="flex items-center">
                    <Map className="w-5 h-5 mr-3 text-accent-300" />
                    <span>Atuação em todo território nacional</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-3 text-accent-300" />
                    <span>Agendamento flexível de horários</span>
                  </div>
                </div>
                <p className="mt-4 text-gray-200">
                  Oferecemos consultas presenciais em nossas unidades e atendimento digital 
                  para maior comodidade dos nossos clientes.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Primeira consulta</h3>
                <p className="text-gray-600 mb-4">
                  Agende uma consulta inicial para avaliarmos seu caso e apresentarmos 
                  as melhores estratégias jurídicas.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-accent-500 mr-2" />
                    Análise detalhada do seu caso
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-accent-500 mr-2" />
                    Orientação sobre direitos e deveres
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-accent-500 mr-2" />
                    Estratégia jurídica personalizada
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-accent-500 mr-2" />
                    Orçamento transparente
                  </li>
                </ul>
                <a
                  href="tel:(53)33520-155"
                  className="btn-primary w-full text-center"
                >
                  Agendar consulta
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossos Escritórios</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Estamos próximos de você com unidades estrategicamente localizadas 
              para melhor atender nossos clientes em todo o Rio Grande do Sul.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8 card-hover"
              >
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Map className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">{office.city}</h3>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Endereço:</div>
                    <div>{office.address}</div>
                    <div className="text-sm text-gray-500">{office.cep}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900