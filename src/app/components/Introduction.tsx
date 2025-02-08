import { GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react"

export default function Introduction() {
  return (
    <section id="about" className="py-20 text-center">
      <img src="/placeholder.svg?height=150&width=150" alt="John Doe" className="mx-auto rounded-full w-32 h-32 mb-4" />
      <h2 className="text-4xl font-bold mb-4">John Doe</h2>
      <p className="text-xl mb-6">Full Stack Web Developer</p>
      <p className="max-w-2xl mx-auto mb-8">
        I'm a passionate full stack developer with experience in building scalable, secure and reliable web
        applications. I enjoy solving complex problems and learning new skills.
      </p>
      <div className="flex justify-center space-x-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
        >
          <GitHub size={24} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="mailto:johndoe@example.com"
          className="text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
        >
          <Mail size={24} />
        </a>
      </div>
    </section>
  )
}

