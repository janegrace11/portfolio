import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const techImages: Record<string, string> = {
  React: "/images/react.png",
  "JavaScript": "/images/java-script.png",
  HTML: "/images/html.png",
  CSS: "/images/css-3.png",
  GitHub: "/images/github.png",
  Git: "/images/git.png",
  MySQL: "/images/mysql.png",
  PHP: "/images/php.png",
  Figma: "/images/figma.png",
};

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and comprehensive admin dashboard.",
    icon: "/placeholder.svg",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative project management tool featuring real-time updates, kanban boards, and team collaboration features.",
    icon: "/placeholder.svg",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Testing Automation Framework",
    description:
      "A comprehensive testing framework for web applications, supporting both E2E and unit testing with detailed reporting.",
    icon: "/placeholder.svg",
    techStack: ["Cypress", "Jest", "GitHub Actions", "Docker"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Portfolio Generator",
    description:
      "A dynamic portfolio website generator that creates beautiful, responsive portfolios from simple configuration files.",
    icon: "/placeholder.svg",
    techStack: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              My Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Featured Projects
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img src={project.icon} alt={`${project.title} icon`} className="h-8 w-8" />
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <div key={tech} className="flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {techImages[tech] ? (
                        <img src={techImages[tech]} alt={tech} className="h-4 w-4 rounded-sm" />
                      ) : null}
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
