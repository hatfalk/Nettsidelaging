import React, { useState, useEffect } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('om-oss')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="om-oss" className="section-padding bg-gradient-to-br from-auto-silver to-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-5xl md:text-6xl font-bold text-auto-gray mb-8">
              Om Oslo Autosalg AS
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-auto-orange to-orange-400 mx-auto rounded-full"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Etter over 33 år i bransjen vet vi hva som skal til for å gi deg god service. 
                Vi spesialiserer oss på nyere person- og varebiler, og tilbyr alltid rundt 100 biler med garanti.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Blant våre kunder er både privatpersoner og store bedrifter. Siden 1992 har vi levert 
                tusenvis av biler, og i 2022 feiret vi 30 årsjubileum.
              </p>
            </div>
            
            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="text-center group">
                <div className="text-4xl font-bold text-auto-orange group-hover:scale-110 transition-transform duration-300">33+</div>
                <div className="text-sm text-gray-600 mt-2">Års erfaring</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-auto-orange group-hover:scale-110 transition-transform duration-300">100+</div>
                <div className="text-sm text-gray-600 mt-2">Biler med garanti</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-auto-orange group-hover:scale-110 transition-transform duration-300">1992</div>
                <div className="text-sm text-gray-600 mt-2">Etablert</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-auto-orange group-hover:scale-110 transition-transform duration-300">1000+</div>
                <div className="text-sm text-gray-600 mt-2">Biler levert</div>
              </div>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className={`transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="relative group">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform group-hover:scale-105 transition-all duration-500">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Oslo Autosalg AS - Profesjonell bilforretning"
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-semibold text-auto-gray mb-3">
                    Profesjonell service
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Vi holder til på Økern og Sinsen i Oslo
                  </p>
                  <div className="mt-4 flex justify-center space-x-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      Økern
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      Sinsen
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-auto-orange rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-auto-orange rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 