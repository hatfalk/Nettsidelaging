import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-auto-gray to-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-auto-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">OA</span>
              </div>
              <h3 className="text-3xl font-bold">Oslo Autosalg AS</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Over 33 års erfaring i bilbransjen. Vi spesialiserer oss på nyere person- og varebiler med garanti.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:91706310"
                className="flex items-center space-x-2 text-auto-orange hover:text-orange-400 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-lg font-medium">917 06 310</span>
              </a>
              <a 
                href="mailto:post@osloautosalg.no"
                className="flex items-center space-x-2 text-auto-orange hover:text-orange-400 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-lg font-medium">post@osloautosalg.no</span>
              </a>
            </div>
          </div>

          {/* Enhanced Contact Info */}
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold mb-6">Kontaktinformasjon</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-auto-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-lg">Org.nr: 964 385 688 MVA</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-auto-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-lg">Økern og Sinsen, Oslo</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-auto-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg">Mandag - Fredag: 09:00 - 18:00</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-auto-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg">Lørdag: 10:00 - 16:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-gray-300 text-base">
              © Oslo Autosalg AS 2025 
            </p>
            <div className="flex space-x-8">
              <a 
                href="https://www.finn.no/mobility/search/car?orgId=1183877671"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-auto-orange transition-all duration-300 text-base font-medium hover:scale-105 transform"
              >
                FINN.no
              </a>
              <button 
                onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-300 hover:text-auto-orange transition-all duration-300 text-base font-medium hover:scale-105 transform"
              >
                Kontakt
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 