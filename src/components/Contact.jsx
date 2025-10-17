import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'
import { Phone, Mail, Map, Clock, Instagram } from 'lucide-react'

export default function Contact() {
  const recaptchaRef = useRef(null)
  const [status, setStatus] = useState({ message: '', isError: false })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
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
          message: ''
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

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '(53) 3352-0155',
      link: 'tel:(53)33520-155'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contato@nunesribeiro.adv.br',
      link: 'mailto:contato@nunesribeiro.adv.br'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      content: '@nuneseribeiroadv',
      link: 'https://www.instagram.com/nuneseribeiroadv/'
    }
  ]

  const offices = [
    {
      city: 'Canguçu - Matriz',
      address: 'Rua General Osório, nº 245 - Centro',
      hours: 'Segunda a sexta, das 9h às 18h',
      specialty: 'Direito do Trabalho, Previdenciário e Público'
    },
    {
      city: 'Pelotas - Unidade Regional',
      address: 'Rua Quinze de Novembro, nº 1220 - Centro',
      hours: 'Atendimento mediante agendamento',
      specialty: 'Direito Tributário, Empresarial e do Agronegócio'
    },
    {
      city: 'Porto Alegre - Unidade Capital',
      address: 'Av. Borges de Medeiros, nº 367 - Sala 802 - Centro Histórico',
      hours: 'Atendimento com hora marcada',
      specialty: 'Direito Público, Servidores e Contencioso Estratégico'
    }
  ]

  return (
    <section id="contato" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-primary">
            <span className="text-gradient">Fale com um advogado</span>
          </h2>
          <p className="text-large max-w-3xl mx-auto">
            Cada caso merece atenção exclusiva. Entre em contato e receba orientação jurídica 
            de forma ética, técnica e segura.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie sua mensagem</h3>
              
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
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Assunto *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Selecione o assunto</option>
                      <option value="Direito do Trabalho">Direito do Trabalho</option>
                      <option value="Direito Tributário">Direito Tributário</option>
                      <option value="Direito Público">Direito Público</option>
                      <option value="Direito de Família">Direito de Família</option>
                      <option value="Direito do Agronegócio">Direito do Agronegócio</option>
                      <option value="Outros">Outros</option>
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
                    placeholder="Descreva sua situação ou dúvida jurídica..."
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
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de contato</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-primary-100 p-3 rounded-lg mr-4">
                      <info.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500">{info.title}</div>
                      <a
                        href={info.link}
                        className="text-gray-900 hover:text-primary-600 transition-colors duration-200"
                        target={info.title === 'Instagram' ? '_blank' : undefined}
                        rel={info.title === 'Instagram' ? 'noopener noreferrer' : undefined}
                      >
                        {info.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

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
              </div>
              <p className="mt-4 text-gray-200">
                Oferecemos consultas presenciais em nossas unidades e atendimento digital 
                para maior comodidade dos nossos clientes.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="heading-secondary text-center mb-12">Nossos escritórios</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8 card-hover"
              >
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Map className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{office.city}</h4>
                <div className="space-y-3 text-gray-600">
                  <div>
                    <div className="font-medium text-gray-900">Endereço:</div>
                    <div>{office.address}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Horário:</div>
                    <div>{office.hours}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Especialização:</div>
                    <div>{office.specialty}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}