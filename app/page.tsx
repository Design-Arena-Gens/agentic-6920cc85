'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('all')

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'fullstack',
      description: 'Scalable marketplace with real-time inventory management',
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI Dashboard',
      category: 'frontend',
      description: 'Interactive analytics platform with ML insights',
      tech: ['React', 'TypeScript', 'D3.js', 'TailwindCSS'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Microservices API',
      category: 'backend',
      description: 'Distributed system handling 10k+ requests/sec',
      tech: ['Node.js', 'GraphQL', 'Docker', 'Kubernetes'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Real-time Chat App',
      category: 'fullstack',
      description: 'WebSocket-based messaging with end-to-end encryption',
      tech: ['Vue.js', 'Socket.io', 'MongoDB', 'Express'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'DevOps Pipeline',
      category: 'backend',
      description: 'CI/CD automation with zero-downtime deployments',
      tech: ['Jenkins', 'AWS', 'Terraform', 'Python'],
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Mobile-First PWA',
      category: 'frontend',
      description: 'Progressive web app with offline-first architecture',
      tech: ['React', 'Service Workers', 'IndexedDB'],
      gradient: 'from-pink-500 to-rose-500'
    }
  ]

  const skills = [
    { name: 'React/Next.js', level: 95, color: 'bg-blue-500' },
    { name: 'Node.js/Express', level: 90, color: 'bg-green-500' },
    { name: 'TypeScript', level: 92, color: 'bg-indigo-500' },
    { name: 'PostgreSQL/MongoDB', level: 88, color: 'bg-purple-500' },
    { name: 'Docker/K8s', level: 85, color: 'bg-cyan-500' },
    { name: 'AWS/Cloud', level: 87, color: 'bg-orange-500' },
  ]

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab)

  return (
    <main className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold gradient-text"
            >
              &lt;Dev/&gt;
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-8"
            >
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-9xl font-bold mb-6 gradient-text">
              Fullstack
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Developer
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Crafting scalable web applications with cutting-edge technologies.
              From elegant frontends to robust backends.
            </p>
            <div className="flex gap-6 justify-center">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold animate-glow cursor-pointer"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass rounded-full font-semibold cursor-pointer"
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-16 text-center gradient-text">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="glass rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-4">Building Digital Experiences</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  With 5+ years of experience in fullstack development, I specialize in creating
                  performant, scalable applications that solve real-world problems.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  My expertise spans modern frameworks, cloud architecture, and DevOps practices.
                  I'm passionate about clean code, optimal UX, and continuous learning.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: '⚡', text: 'Fast & Optimized Performance' },
                  { icon: '🎨', text: 'Modern UI/UX Design' },
                  { icon: '🔒', text: 'Security-First Approach' },
                  { icon: '📱', text: 'Responsive & Mobile-Ready' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass rounded-2xl p-6 flex items-center gap-4 card-hover"
                  >
                    <span className="text-4xl">{item.icon}</span>
                    <span className="text-lg">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-16 text-center gradient-text">Featured Projects</h2>

            {/* Filter Tabs */}
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
              {['all', 'fullstack', 'frontend', 'backend'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-primary to-secondary'
                      : 'glass hover:bg-white/10'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-6 card-hover cursor-pointer group"
                >
                  <div className={`w-full h-48 bg-gradient-to-br ${project.gradient} rounded-xl mb-6 flex items-center justify-center text-6xl opacity-80 group-hover:opacity-100 transition-opacity`}>
                    💻
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, j) => (
                      <span key={j} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-16 text-center gradient-text">Technical Skills</h2>
            <div className="space-y-8">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold text-lg">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className={`h-full ${skill.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-16 text-center gradient-text">Get In Touch</h2>
            <div className="glass rounded-3xl p-12">
              <p className="text-xl text-center text-gray-400 mb-12">
                Have a project in mind? Let's build something amazing together.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: '📧', label: 'Email', value: 'dev@example.com' },
                  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/dev' },
                  { icon: '🐙', label: 'GitHub', value: 'github.com/dev' },
                ].map((contact, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="glass rounded-2xl p-6 text-center card-hover cursor-pointer"
                  >
                    <div className="text-5xl mb-4">{contact.icon}</div>
                    <div className="font-semibold mb-2">{contact.label}</div>
                    <div className="text-sm text-gray-400">{contact.value}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p className="mb-4">© 2025 Fullstack Developer Portfolio</p>
          <p className="text-sm">Built with Next.js, TailwindCSS & Framer Motion</p>
        </div>
      </footer>
    </main>
  )
}
