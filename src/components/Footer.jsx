import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Scale, Phone, Mail, Instagram, Map } from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { to: '/', label: 'Início' },
    { to: '/sobre', label: 'Sobre' },
    { to: '/areas-atuacao', label: 'Áreas de Atuação' },
    { to: '/equipe', label: 'Equipe' },
    { to: '/escritorios', label: 'Escritórios' },
    { to: '/contato', label: 'Contato' }
  ]

  const legalAreas = [
    { to: '/areas-atuacao#trabalhista', label: 'Direito do Trabalho' },
    { to: '/areas-atuacao#tributario', label: 'Direito Tributário' },
    { to: '/areas-atuacao#publico', label: 'Direito Público' },
    { to: '/areas-atuacao#familia', label: 'Direito de Família' },
    { to: '/areas-atuacao#agronegocio', label: 'Direito do Agronegócio' }
  ]

  const offices = [
    {
      city: 'Canguçu',
      address: 'Rua General Osório, 245 - Centro',
      phone: '(53) 3352-0155'
    },
    {
      city: 'Pelotas',
      address: 'Rua Quinze de Novembro, 1220 - Centro',
      phone: '(53) 3278-0000'
    },
    {
      city: 'Porto Alegre',
      address: 'Av. Borges de Medeiros, 367 - Sala 802',
      phone: '(51) 3095-0000'
    }
  ]

  return (
    <footer className="bg-gray-900 text-white pb-20">
      <div className="container-custom">
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1760668061679_0.png"
                  alt="Nunes & Ribeiro Advocacia"
                  className="h-10 w-auto filter brightness-0 invert"
                />
                <div className="font-serif font-bold text-lg">
                  Nunes & Ribeiro Advocacia
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Advocacia moderna, técnica e humana. Oferecemos soluções jurídicas 
                personalizadas com ética, transparência e comprometimento.
              </p>
              
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/nuneseribeiroadv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-accent-600 transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="tel:(53)33520-155"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-accent-600 transition-colors duration-300"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a
                  href="mailto:contato@nunesribeiro.adv.br"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-accent-600 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-6">Navegação</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-6">Áreas de Atuação</h3>
              <ul className="space-y-3">
                {legalAreas.map((area, index) => (
                  <li key={index}>
                    <Link
                      to={area.to}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {area.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-6">Nossos Escritórios</h3>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="text-gray-400">
                    <div className="font-medium text-white mb-1">{office.city}</div>
                    <div className="text-sm mb-1">{office.address}</div>
                    <a
                      href={`tel:${office.phone.replace(/\D/g, '')}`}
                      className="text-sm hover:text-white transition-colors duration-200"
                    >
                      {office.phone}
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Nunes & Ribeiro Advocacia. Todos os direitos reservados.
            </div>
            
            <div className="text-gray-400 text-sm">
              Criado com <em><a href="https://papum.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Papum</a></em>
            </div>
          </div>
          
          <div className="mt-4 text-xs text-gray-500 text-center">
            Site institucional de caráter informativo, em conformidade com o Provimento nº 205/2021 da OAB.
          </div>
        </div>
      </div>
    </footer>
  )
}