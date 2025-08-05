import React, { useState, useEffect } from 'react'

const Contact = () => {
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

    const element = document.getElementById('kontakt')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="kontakt" className="section-padding bg-gradient-to-br from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-20">
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-5xl md:text-6xl font-bold text-auto-gray mb-8">
              Kontakt Oss
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-auto-orange to-orange-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Vi holder til på Økern og Sinsen i Oslo. Ta kontakt for visning.
            </p>
          </div>
        </div>

        <div className={`grid lg:grid-cols-2 gap-16 transition-all duration-1000 delay-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Enhanced Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-3xl font-bold text-auto-gray mb-8">
                Kontaktinformasjon
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-auto-orange to-orange-500 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-auto-gray text-lg mb-2">Telefon</h4>
                    <a href="tel:91706310" className="text-xl text-gray-700 hover:text-auto-orange transition-colors duration-300">
                      917 06 310
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-auto-orange to-orange-500 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-auto-gray text-lg mb-2">E-post</h4>
                    <a href="mailto:post@osloautosalg.no" className="text-xl text-gray-700 hover:text-auto-orange transition-colors duration-300">
                      post@osloautosalg.no
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-auto-orange to-orange-500 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-auto-gray text-lg mb-2">Organisasjonsnummer</h4>
                    <p className="text-xl text-gray-700">964 385 688 MVA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-auto-gray to-gray-800 text-white rounded-2xl p-10 shadow-xl">
              <h3 className="text-3xl font-bold mb-8">
                Åpningstider
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-lg">Mandag - Fredag:</span>
                  <span className="text-lg font-semibold">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-lg">Lørdag:</span>
                  <span className="text-lg font-semibold">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-lg">Søndag:</span>
                  <span className="text-lg font-semibold text-orange-300">Stengt</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact 