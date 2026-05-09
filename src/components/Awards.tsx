import { Trophy, Star } from 'lucide-react'

interface Award {
  title: string
  issuer: string
  year: string
  description: string
}

const awards: Award[] = [
  {
    title: 'Developer of the Year',
    issuer: 'Tech Community Awards 2023',
    year: '2023',
    description: 'Recognized for outstanding contributions to open-source projects and community engagement.',
  },
  {
    title: 'Innovation Excellence Award',
    issuer: 'Tech Innovations Inc.',
    year: '2022',
    description: 'Awarded for implementing innovative solutions that increased system efficiency by 40%.',
  },
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    year: '2021',
    description: 'Professional certification demonstrating expertise in designing scalable cloud solutions.',
  },
  {
    title: 'Best Hackathon Project',
    issuer: 'StartUp Labs Hackathon',
    year: '2020',
    description: 'First place in 48-hour hackathon for creating an innovative real-time collaboration platform.',
  },
]

export default function Awards() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-500">
            Awards & Recognition
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary-500/10 to-blue-500/5 border border-primary-500/30 rounded-lg p-6 hover:border-primary-400/60 transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/10"
            >
              <div className="flex items-start gap-3 mb-3">
                {index === 0 ? (
                  <Trophy className="text-primary-400 flex-shrink-0 mt-1" size={24} />
                ) : (
                  <Star className="text-primary-400 flex-shrink-0 mt-1" size={24} />
                )}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white">{award.title}</h3>
                  <p className="text-primary-300 font-semibold text-sm">{award.issuer}</p>
                  <p className="text-slate-400 text-xs">{award.year}</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
