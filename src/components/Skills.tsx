import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillImages: Record<string, string> = {
  React: "/images/react.png",
  TypeScript: "/images/typescript.png",
  JavaScript: "/images/java-script.png",
  HTML5: "/images/html.png",
  HTML: "/images/html.png",
  CSS3: "/images/css-3.png",
  CSS: "/images/css-3.png",
  Git: "/images/git.png",
  GitHub: "/images/github.png",
  MySQL: "/images/mysql.png",
  PHP: "/images/php.png",
  Figma: "/images/figma.png",
  Java: "/images/java.png",
};

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["PHP", "Laravel", "MySQL", "REST APIs"],
  },
  {
    title: "QA & Testing",
    skills: ["Mobile Testing", "Web Testing", "Screaming Frog", "Selenium"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "GitHub", "VS Code", "Figma"],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24">
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
              What I Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Skills & Technologies
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-4 text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skillImages[skill] ? (
                        <img src={skillImages[skill]} alt={skill} className="h-4 w-4 rounded-sm" />
                      ) : null}
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
