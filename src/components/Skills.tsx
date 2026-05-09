import { Code2, Database, Cloud, Zap } from 'lucide-react'

interface Skill {
  category: string
  icon: React.ReactNode
  skills: string[]
}

const skillCategories: Skill[] = [
  {
    category: 'Frontend',
    icon: <Code2 className="text-primary-400" size={28} />,
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Next.js'],
  },
  {
    category: 'Backend',
    icon: <Zap className="text-primary-400" size={28} />,
    skills: ['Node.js', 'Python', 'Express.js', 'FastAPI', 'GraphQL'],
  },
  {
    category: 'Databases',
    icon: <Database className="text-primary-400" size={28} />,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Supabase'],
  },
  {
    category: 'Cloud & DevOps',
    icon: <Cloud className="text-primary-400" size={28} />,
    skills: ['AWS', 'Docker', 'GitHub Actions', 'Kubernetes', 'Azure'],
  },
]

export default function Skills() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-500">
            Skills & Technologies
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-primary-500/30 transition-colors duration-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary-500/20 p-2 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-primary-500/10 border border-primary-500/30 text-primary-300 rounded-full text-sm font-medium hover:bg-primary-500/20 hover:border-primary-400 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
