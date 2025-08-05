import React, { useState, useEffect } from 'react'

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const carImages = [
    {
      src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Volkswagen Golf",
      title: "Volkswagen Golf",
      description: "Praktisk og pålitelig"
    },
    {
      src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Volkswagen Transporter",
      title: "Volkswagen Transporter",
      description: "Perfekt for næring"
    },
    {
      src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Volkswagen Amarok",
      title: "Volkswagen Amarok",
      description: "Kraftig og robust"
    },
    {
      src: "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Pickup Truck",
      title: "Pickup Truck",
      description: "Allsidig og pålitelig"
    },
    {
      src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Commercial Vehicle",
      title: "Commercial Vehicle",
      description: "Profesjonell løsning"
    },
    // Additional car images as requested
    {
      src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Volkswagen Passat",
      title: "Volkswagen Passat",
      description: "Elegant og komfortabel"
    },
    {
      src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Volkswagen Tiguan",
      title: "Volkswagen Tiguan",
      description: "Moderne SUV"
    },
    {
      src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Volkswagen Caddy",
      title: "Volkswagen Caddy",
      description: "Kompakt og praktisk"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('gallery')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [carImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carImages.length) % carImages.length)
  }

  return (
    <section id="gallery" className="section-padding bg-gradient-to-br from-auto-silver to-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-5xl md:text-6xl font-bold text-auto-gray mb-8">
              Våre Biler
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-auto-orange to-orange-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Vi spesialiserer oss på Volkswagen og pickup-trucker. Se våre biler på FINN.no for mer informasjon.
            </p>
          </div>
        </div>

        {/* Enhanced Carousel */}
        <div className={`relative max-w-6xl mx-auto transition-all duration-1000 delay-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative h-[400px] md:h-[600px] overflow-hidden rounded-2xl shadow-2xl">
            {carImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentSlide 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="max-w-2xl">
                    <h3 className="text-white text-3xl md:text-4xl font-bold mb-3">{image.title}</h3>
                    <p className="text-white/90 text-lg md:text-xl mb-4">{image.description}</p>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-1 bg-auto-orange"></div>
                      <span className="text-white/80 text-sm">Volkswagen kvalitet</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-auto-gray p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 group"
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-auto-gray p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 group"
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Enhanced Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {carImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
                  index === currentSlide 
                    ? 'bg-auto-orange scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <a
            href="https://www.finn.no/mobility/search/car?orgId=1183877671"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xl px-12 py-5 shadow-2xl hover:shadow-auto-orange/25 transform hover:scale-105 transition-all duration-300"
          >
            Se alle våre biler på FINN.no
          </a>
        </div>

        {/* Car Type Highlights */}
        <div className={`grid md:grid-cols-3 gap-8 mt-20 transition-all duration-1000 delay-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center group">
            <div className="w-16 h-16 bg-auto-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl">🚗</span>
            </div>
            <h3 className="text-xl font-semibold text-auto-gray mb-2">Personbiler</h3>
            <p className="text-gray-600">Volkswagen Golf, Passat og Tiguan</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-auto-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl">🚐</span>
            </div>
            <h3 className="text-xl font-semibold text-auto-gray mb-2">Varebiler</h3>
            <p className="text-gray-600">Transporter og Caddy</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-auto-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl">🛻</span>
            </div>
            <h3 className="text-xl font-semibold text-auto-gray mb-2">Pickup</h3>
            <p className="text-gray-600">Amarok og andre pickup-modeller</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery 