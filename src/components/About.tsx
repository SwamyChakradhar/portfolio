export default function About() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-500">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary-500 to-blue-600 rounded-lg opacity-80 blur-sm"></div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate full-stack developer with expertise in building modern web applications
              and cloud-based solutions. With a strong foundation in computer science and years of
              hands-on experience, I thrive in collaborative environments where I can contribute
              to impactful projects.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              My journey in tech has been driven by curiosity and a commitment to excellence.
              I specialize in translating complex requirements into elegant, scalable solutions
              using cutting-edge technologies and best practices.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <p className="text-primary-400 font-bold text-2xl">10+</p>
                <p className="text-slate-400">Projects Completed</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <p className="text-primary-400 font-bold text-2xl">5+</p>
                <p className="text-slate-400">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
