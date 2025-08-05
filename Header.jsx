import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center group">
            <div className="relative">
              <img 
                src="/logo.jpeg" 
                alt="Oslo Autosalg AS" 
                className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'block'
                }}
              />
              <div className="h-14 w-14 bg-auto-orange rounded-lg flex items-center justify-center text-white font-bold text-xl hidden">
                OA
              </div>
            </div>
            <span className="ml-4 text-2xl font-bold text-auto-gray hidden sm:block transition-all duration-300 group-hover:text-auto-orange">
              Oslo Autosalg AS
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <button 
              onClick={() => scrollToSection('om-oss')}
              className="text-auto-gray hover:text-auto-orange transition-all duration-300 font-medium relative group"
            >
              Om oss
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-auto-orange transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('finansiering')}
              className="text-auto-gray hover:text-auto-orange transition-all duration-300 font-medium relative group"
            >
              Finansiering
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-auto-orange transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('kontakt')}
              className="text-auto-gray hover:text-auto-orange transition-all duration-300 font-medium relative group"
            >
              Kontakt
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-auto-orange transition-all duration-300 group-hover:w-full"></span>
            </button>
            <a 
              href="https://www.finn.no/mobility/search/car?orgId=1183877671"
              target="_blank"
              rel="noopener noreferrer"
              className="text-auto-gray hover:text-auto-orange transition-all duration-300 font-medium relative group"
            >
              FINN.no
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-auto-orange transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 pt-4 pb-6 space-y-3 bg-white/95 backdrop-blur-md rounded-lg mt-2">
            <button 
              onClick={() => scrollToSection('om-oss')}
              className="block w-full text-left px-4 py-3 text-auto-gray hover:text-auto-orange hover:bg-gray-50 transition-all duration-300 font-medium rounded-lg"
            >
              Om oss
            </button>
            <button 
              onClick={() => scrollToSection('finansiering')}
              className="block w-full text-left px-4 py-3 text-auto-gray hover:text-auto-orange hover:bg-gray-50 transition-all duration-300 font-medium rounded-lg"
            >
              Finansiering
            </button>
            <button 
              onClick={() => scrollToSection('kontakt')}
              className="block w-full text-left px-4 py-3 text-auto-gray hover:text-auto-orange hover:bg-gray-50 transition-all duration-300 font-medium rounded-lg"
            >
              Kontakt
            </button>
            <a 
              href="https://www.finn.no/mobility/search/car?orgId=1183877671"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 text-auto-gray hover:text-auto-orange hover:bg-gray-50 transition-all duration-300 font-medium rounded-lg"
            >
              FINN.no
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 