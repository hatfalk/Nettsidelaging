import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        {/* Enhanced Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-auto-orange/30"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-auto-orange/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-auto-orange/15 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      {/* Content with Enhanced Animations */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-wide">
              NYERE BILER TIL SALGS
            </h1>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-5xl font-semibold mb-10 text-auto-orange drop-shadow-lg">
              GODE GARANTIER – ENKEL FINANSIERING
            </h2>
          </div>
          
          <div className={`transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-xl md:text-2xl mb-16 max-w-4xl mx-auto opacity-95 leading-relaxed">
              Vi spesialiserer oss på nyere person- og varebiler med garanti. 
              Over 33 års erfaring i bransjen.
            </p>
          </div>
          
          <div className={`transition-all duration-1000 delay-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <a 
              href="https://www.finn.no/mobility/search/car?orgId=1183877671"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xl px-12 py-5 inline-block shadow-2xl hover:shadow-auto-orange/25 transform hover:scale-105 transition-all duration-300"
            >
              Se våre biler på FINN.no
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero 