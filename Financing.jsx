import React, { useState, useEffect } from 'react'

const Financing = () => {
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

    const element = document.getElementById('finansiering')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const financingOptions = [
    {
      title: "Lån opptil 10 år",
      description: "Fleksible låneperioder som passer dine behov",
      icon: "📅",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Inntil 100 % finansiering",
      description: "Vi kan finansiere hele kjøpesummen",
      icon: "💰",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Samarbeid med Gjensidige, SP1 Finans og DNB Finans",
      description: "Konkurransedyktige renter fra anerkjente finansinstitusjoner",
      icon: "🤝",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Raskt svar – mens du ser på bil",
      description: "Få svar på finansieringstilbudet umiddelbart",
      icon: "⚡",
      color: "from-orange-500 to-orange-600"
    }
  ]

  const partnerLogos = [
    { name: "Gjensidige", logo: "/gjensidige-logo.png" },
    { name: "SP1 Finans", logo: "/sp1-finans-logo.jpeg" },
    { name: "DNB Finans", logo: "/dnb-finans-logo.png" }
  ]

  return (
    <section id="finansiering" className="section-padding bg-gradient-to-br from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-20">
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-5xl md:text-6xl font-bold text-auto-gray mb-8">
              Finansiering
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-auto-orange to-orange-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Vi tilbyr fleksible finansieringsløsninger som gjør det enkelt å finne din drømmebil
            </p>
          </div>
        </div>

        {/* Enhanced Financing Options */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {financingOptions.map((option, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-full flex items-center justify-center mx-auto mb-6 text-2xl text-white group-hover:scale-110 transition-transform duration-300`}>
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold text-auto-gray mb-4 leading-tight">
                  {option.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {option.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Logos Section */}
        <div className={`mb-16 transition-all duration-1000 delay-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-auto-gray mb-4">
              Våre Finanspartnere
            </h3>
            <p className="text-gray-600 text-lg">
              Samarbeid med anerkjente finansinstitusjoner
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {partnerLogos.map((partner, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200">
                  <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors duration-300 overflow-hidden">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-contain p-2"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                    <div className="hidden items-center justify-center text-gray-500 text-sm font-medium">
                      {partner.name}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-auto-gray">{partner.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Annuitetslån Explanation */}
        <div className={`bg-gradient-to-r from-auto-gray to-gray-800 text-white rounded-2xl p-10 mb-12 transition-all duration-1000 delay-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-3xl font-bold mb-8 text-center">
            Hva er annuitetslån?
          </h3>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl leading-relaxed">
                Et annuitetslån er det vanligste lånetypen for bilkjøp. Du betaler samme beløp hver måned, 
                men sammensetningen av renter og avdrag endres over tid. I starten betaler du mer i renter, 
                men etter hvert som lånet nedbetales, øker avdragsbeløpet.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="w-4 h-4 bg-auto-orange rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                <span className="text-lg">Faste månedlige betalinger</span>
              </div>
              <div className="flex items-center group">
                <div className="w-4 h-4 bg-auto-orange rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                <span className="text-lg">Forutsigbar nedbetaling</span>
              </div>
              <div className="flex items-center group">
                <div className="w-4 h-4 bg-auto-orange rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                <span className="text-lg">Fleksible låneperioder</span>
              </div>
              <div className="flex items-center group">
                <div className="w-4 h-4 bg-auto-orange rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                <span className="text-lg">Konkurransedyktige renter</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Button */}
        <div className={`text-center transition-all duration-1000 delay-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button className="btn-primary text-xl px-12 py-5 shadow-2xl hover:shadow-auto-orange/25 transform hover:scale-105 transition-all duration-300">
            Ta kontakt for tilbud
          </button>
        </div>
      </div>
    </section>
  )
}

export default Financing 