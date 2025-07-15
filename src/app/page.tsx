"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Home() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false)
      } else {
        setShowScrollIndicator(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className="min-h-screen bg-black text-white">


      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ext.same-assets.com/2367087198/3301106891.jpeg"
            alt="Mountain landscape background"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center animate-fadeInUp">
          <h1 className="text-6xl md:text-8xl font-serif mb-4 tracking-tight">
            Miniiar Rakhimkulov
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wider text-gray-200">
            ML Researcher | AI Enthusiast
          </p>
        </div>

        {/* Scroll indicator */}
        {showScrollIndicator && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 transition-opacity duration-300">
            <div className="w-6 h-10 border border-white/40 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        )}
      </section>

      {/* Bio Section */}
      <section className="relative bg-black px-8 py-16">
        <div className="max-w-6xl mx-auto mx-auto space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start animate-fadeInUp">
            {/* Left Column - Name */}
            <div>
              <h2 className="text-4xl font-serif mb-8">Miniiar Rakhimkulov</h2>
            </div>

            {/* Right Column - Bio */}
            <div className="border border-gray-700 rounded-lg p-8 transition-all duration-300 hover:border-gray-500 hover:shadow-lg hover:shadow-gray-900/ 20">
              <p className="text-gray-300 leading-relaxed space-y-4 mb-6">
                Currently Tech Lead at Justmagic LLC and former Tech Lead at ChatMasters,
                with experience as Software Engineer at Lyft.
                Specialized in AI multi-agent systems and machine learning integration.
              </p>
              <p className="text-gray-300 leading-relaxed space-y-4  mb-6">
                Leading projects in multi-agent cost-estimation engines, AI sales chatbots,
                and user support platforms that optimize business processes
                and reduce operational complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto space-y-8">

          {/* Project 1 - Multi-Agent Engine */}
          <div className="mb-8 animate-fadeInUp" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-1 border border-gray-700 rounded-lg p-8 transition-all duration-300 hover:border-gray-500 hover:shadow-lg hover:shadow-gray-900/20">
                <div className="mb-4">
                  <span className="text-gray-400 text-sm">2024 - Present</span>
                </div>
                <h3 className="text-3xl font-serif mb-4">Justmagic LLC</h3>
                <h4 className="text-xl mb-6 text-gray-300">Multi-Agent Cost-Estimation Engine</h4>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Designed and delivered a sophisticated multi-agent cost-estimation engine using ReAct, Swarm,
                  and Supervisor patterns to completely automate project bidding processes for construction clients.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Led system architecture design, evaluation and tuning of agent performance metrics,
                  while managing a three-developer team and presenting results to both technical and non-technical stakeholders.
                </p>
              </div>
              <div className="relative h-64 lg:h-96 lg:order-2">
                {/* Blank space where image was */}
              </div>
            </div>
          </div>

          {/* Project 2 - AI Sales Chatbots */}
          <div className="mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-64 lg:h-96 lg:order-1">
                {/* Blank space where image was */}
              </div>
              <div className="lg:order-2 border border-gray-700 rounded-lg p-8 transition-all duration-300 hover:border-gray-500 hover:shadow-lg hover:shadow-gray-900/20">
                <div className="mb-4">
                  <span className="text-gray-400 text-sm">2023</span>
                </div>
                <h3 className="text-3xl font-serif mb-4">ChatMasters</h3>
                <h4 className="text-xl mb-6 text-gray-300">AI Sales Chatbot Platform</h4>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Built a comprehensive SaaS platform enabling businesses and clients without technical expertise
                  to rapidly deploy AI sales chatbots with pre-built templates and comprehensive analytics dashboards.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Designed infrastructure architecture and monitoring systems for optimal model performance,
                  led a four-developer team, and regularly briefed executives on technical trade-offs and platform capabilities.
                </p>
              </div>
            </div>
          </div>

          {/* Project 3 - User Support Platform */}
          <div className="mb-8 animate-fadeInUp" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-1 border border-gray-700 rounded-lg p-8 transition-all duration-300 hover:border-gray-500 hover:shadow-lg hover:shadow-gray-900/20">
                <div className="mb-4">
                  <span className="text-gray-400 text-sm">2022</span>
                </div>
                <h3 className="text-3xl font-serif mb-4">Lyft</h3>
                <h4 className="text-xl mb-6 text-gray-300">User Support Platform</h4>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Contributed to Lyft's User Support platform with a focused mission to reduce average ticket resolution time
                  and improve customer satisfaction through streamlined support processes and automated solutions.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Responsible for software design, feature planning and shipping, coordinating with adjacent teams
                  for compatibility, and participating in weekly service monitoring rotations to ensure platform reliability.
                </p>
              </div>
              <div className="relative h-64 lg:h-96 lg:order-2">
                {/* Blank space where image was */}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer Links */}
      <footer className="px-8 py-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center space-x-8 animate-fadeInUp">
            <Link
              href="https://www.linkedin.com/in/miniiar/"
              className="text-gray-300 hover:text-white transition-colors text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:contact@miniiar.com"
              className="text-gray-300 hover:text-white transition-colors text-lg"
            >
              Email
            </Link>
            <Link
              href="https://github.com/miniiarrr"
              className="text-gray-300 hover:text-white transition-colors text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
