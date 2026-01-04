import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Target } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Get to Know Me
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
          >
            <p className="text-muted-foreground text-lg leading-relaxed text-center">
              I'm a dedicated Quality Assurance Specialist and Web Developer with
              a passion for creating robust, user-friendly applications. With a
              keen eye for detail and a commitment to excellence, I bridge the gap
              between development and quality assurance to deliver products that
              not only work flawlessly but also provide exceptional user
              experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={itemVariants}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Education</h3>
              <p className="text-muted-foreground text-sm">
                Bachelor's Degree in Computer Science with focus on Software
                Engineering and Quality Assurance methodologies.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Experience</h3>
              <p className="text-muted-foreground text-sm">
                Professional experience in both QA testing and full-stack web
                development, working with agile teams on various projects.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Goal</h3>
              <p className="text-muted-foreground text-sm">
                To contribute to impactful projects that prioritize quality and
                user experience while continuously growing my technical skills.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
