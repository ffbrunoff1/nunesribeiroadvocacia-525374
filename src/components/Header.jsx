import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Scale, Gavel, Users, Building, Phone, Play, Briefcase, Calculator, Shield, Map } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDropdownToggle = (dropdown) => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown)
  }

  const closeMenu = () => {
    setIsOpen(false)
    setDropdownOpen(null)
  }

  const NavigationItem = ({ to, children, onClick }) => (
    <Link
      to={to}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
        location.pathname === to
          ? 'text-primary-700 bg-primary-50'
          : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
      }`}
    >
      {children}
    </Link>
  )

  const DropdownMenu = ({ title, items, isOpen, onToggle }) => (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-primary-700 hover:bg-gray-50 transition-all duration-300"
      >
        {title}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-1"
        >
          <Play className="w-3 h-3 rotate-90" />
        </motion.div>
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
        >
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              onClick={closeMenu}
              className="flex items-center px-4 py-3 text-gray-700 hover:text-primary-700 hover:bg-gray-50 transition-colors duration-200"
            >
              <item.icon className="w-4 h-4 mr-3 text-primary-600" />
              <div>
                <div className="font-medium">{item.title}</div>
                <div className="text-sm text-gray-500">{item.description}</div>
              </div>
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  )

  const servicesItems = [
    {
      to: '/areas-atuacao',
      icon: Scale,
      title: 'Áreas de Atuação',
      description: 'Conheça todas as nossas especialidades jurídicas'
    },
    {
      to: '/areas-atuacao#trabalhista',
      icon: Briefcase,
      title: 'Direito do Trabalho',
      description: 'Defesa de empregados e empregadores'
    },
    {
      to: '/areas-atuacao#tributario',
      icon: Calculator,
      title: 'Direito Tributário',
      description: 'Compensações fiscais e revisões tributárias'
    },
    {
      to: '/areas-atuacao#publico',
      icon: Shield,
      title: 'Direito Público',
      description: 'Servidores públicos e precatórios'
    }
  ]

  const aboutItems = [
    {
      to: '/sobre',
      icon: Building,
      title: 'Sobre o Escritório',
      description: 'Nossa história, missão e valores'
    },
    {
      to: '/equipe',
      icon: Users,
      title: 'Nossa Equipe',
      description: 'Conheça nossos advogados especialistas'
    },
    {
      to: '/escritorios',
      icon: Map,
      title: 'Nossos Escritórios',
      description: 'Unidades em Canguçu, Pelotas e Porto Alegre'
    }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1760668061679_0.png"
              alt="Nunes & Ribeiro Advocacia"
              className="h-12 w-auto"
            />
            <div className={`font-serif font-bold text-xl ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Nunes & Ribeiro Advocacia
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-2">
            <NavigationItem to="/">Início</NavigationItem>
            
            <DropdownMenu
              title="Serviços"
              items={servicesItems}
              isOpen={dropdownOpen === 'services'}
              onToggle={() => handleDropdownToggle('services')}
            />
            
            <DropdownMenu
              title="Escritório"
              items={aboutItems}
              isOpen={dropdownOpen === 'about'}
              onToggle={() => handleDropdownToggle('about')}
            />
            
            <NavigationItem to="/contato">Contato</NavigationItem>
            
            <div className="ml-4 pl-4 border-l border-gray-300">
              <a
                href="tel:(53)33520-155"
                className="btn-primary inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (53) 3352-0155
              </a>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="py-4 space-y-2">
              <Link
                to="/"
                onClick={closeMenu}
                className="block px-4 py-3 text-gray-700 hover:text-primary-700 hover:bg-gray-50 transition-colors duration-200"
              >
                Início
              </Link>
              
              <div className="border-t border-gray-100 pt-2">
                <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Serviços
                </div>
                {servicesItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    onClick={closeMenu}
                    className="flex items-center px-6 py-3 text-gray-700 hover:text-primary-700 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <item.icon className="w-4 h-4 mr-3 text-primary-600" />
                    {item.title}
                  </Link>
                ))}
              </div>
              
              <div className="border-t border-gray-100 pt-2">
                <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Escritório
                </div>
                {aboutItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    onClick={closeMenu}
                    className="flex items-center px-6 py-3 text-gray-700 hover:text-primary-700 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <item.icon className="w-4 h-4 mr-3 text-primary-600" />
                    {item.title}
                  </Link>
                ))}
              </div>
              
              <div className="border-t border-gray-100 pt-2">
                <Link
                  to="/contato"
                  onClick={closeMenu}
                  className="block px-4 py-3 text-gray-700 hover:text-primary-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  Contato
                </Link>
                
                <div className="px-4 py-3">
                  <a
                    href="tel:(53)33520-155"
                    className="btn-primary w-full text-center inline-flex items-center justify-center"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    (53) 3352-0155
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}