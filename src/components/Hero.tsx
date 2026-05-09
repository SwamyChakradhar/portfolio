import { ChevronDown } from 'lucide-react'

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  const scrollToContact = () => {
    setActiveSection('contact')
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500">
            Swamalatha Chakradhar
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
          Full-Stack Developer | Cloud Engineer | Problem Solver
        </p>

        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Building scalable applications and innovative solutions with modern technologies.
          Passionate about clean code, user experience, and continuous learning.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <button
            onClick={scrollToContact}
            className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/20"
          >
            Get in Touch
          </button>
          <button
            onClick={() => {
              setActiveSection('about')
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-3 border border-slate-600 hover:border-primary-400 text-slate-300 hover:text-white font-semibold rounded-lg transition-all duration-200"
          >
            Learn More
          </button>
        </div>

        <div className="animate-bounce text-slate-400 absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <ChevronDown size={32} />
        </div>
      </div>
    </section>
  )
}
