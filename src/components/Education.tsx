import { BookOpen } from 'lucide-react'

interface EducationItem {
  degree: string
  school: string
  year: string
  details: string[]
}

const education: EducationItem[] = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'University of Technology',
    year: '2018 - 2020',
    details: [
      'GPA: 3.8/4.0',
      'Specialized in Cloud Computing and Distributed Systems',
      'Thesis: Optimizing Microservices Architecture',
    ],
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'State University',
    year: '2014 - 2018',
    details: [
      'GPA: 3.7/4.0',
      'Dean\'s List all semesters',
      'Relevant Coursework: Web Development, Database Design, Software Engineering',
    ],
  },
]

export default function Education() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-500">
            Education
          </span>
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-primary-500/30 transition-colors duration-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-500/20 p-3 rounded-lg">
                  <BookOpen className="text-primary-400" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-primary-400 font-semibold">{edu.school}</p>
                  <p className="text-slate-400 text-sm">{edu.year}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {edu.details.map((detail, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-slate-300"
                  >
                    <span className="text-primary-400 font-bold mt-1">▪</span>
                    <span>{detail}</span>
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
