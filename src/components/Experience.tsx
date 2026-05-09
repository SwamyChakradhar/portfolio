import { Briefcase } from 'lucide-react'

interface Job {
  title: string
  company: string
  period: string
  description: string
  highlights: string[]
}

const jobs: Job[] = [
  {
    title: 'Senior Full-Stack Developer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    description: 'Leading development of cloud-based enterprise solutions',
    highlights: [
      'Architected microservices infrastructure using Node.js and Python',
      'Improved application performance by 40% through optimization',
      'Led team of 5 developers on major product initiatives',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Digital Solutions Co.',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple web applications',
    highlights: [
      'Built responsive React applications with modern UI frameworks',
      'Designed and implemented REST APIs with Node.js and Express',
      'Implemented CI/CD pipelines using GitHub Actions and Docker',
    ],
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Labs',
    period: '2019 - 2020',
    description: 'Contributed to early-stage product development',
    highlights: [
      'Developed frontend components using React and Vue.js',
      'Worked with PostgreSQL and MongoDB databases',
      'Collaborated with designers and product managers',
    ],
  },
]

export default function Experience() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-500">
            Experience
          </span>
        </h2>

        <div className="space-y-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-primary-500/30 transition-colors duration-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-500/20 p-3 rounded-lg">
                  <Briefcase className="text-primary-400" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{job.title}</h3>
                  <p className="text-primary-400 font-semibold">{job.company}</p>
                  <p className="text-slate-400 text-sm">{job.period}</p>
                </div>
              </div>

              <p className="text-slate-300 mb-4">{job.description}</p>

              <ul className="space-y-2">
                {job.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-slate-300"
                  >
                    <span className="text-primary-400 font-bold mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
