import { ExternalLink, GitlabIcon as GitHub } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Task Management App",
      description: "A responsive web application for managing tasks and projects with real-time updates.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that provides real-time weather data and forecasts for multiple locations.",
      technologies: ["React", "Redux", "Node.js", "OpenWeatherMap API"],
      github: "https://github.com",
      live: "https://example.com",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
              src={`/placeholder.svg?height=200&width=400&text=${project.title}`}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                >
                  <GitHub size={20} className="mr-1" />
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
                >
                  <ExternalLink size={20} className="mr-1" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

