import { motion } from "framer-motion";
import { FaGitAlt } from "react-icons/fa";
import {
  SiBootstrap,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { getStaticFIle } from "../utility/staticFile";

const skills = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    description: "Building interactive and dynamic web applications.",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    description: "Writing type-safe and maintainable JavaScript.",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
    description: "Developing scripts, applications, and backend logic.",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    description: "Creating responsive interfaces with utility classes.",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "#7952B3",
    description: "Building responsive layouts with reusable UI components.",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    description: "Building reusable components and interactive UIs.",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "currentColor",
    description: "Creating performant React applications and web experiences.",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#5FA04E",
    description: "Running JavaScript on the server to build backend services.",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "currentColor",
    description: "Developing APIs and web servers with Node.js.",
  },
  {
    name: "NestJS",
    icon: SiNestjs,
    color: "#E0234E",
    description: "Building structured and scalable server-side applications.",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    description: "Working with flexible document-based databases.",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
    description: "Managing relational data with SQL queries.",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    color: "currentColor",
    description: "Managing database access with a modern ORM.",
  },
  {
    name: "Git & GitHub",
    icon: FaGitAlt,
    color: "#F05032",
    description: "Tracking code changes and collaborating on projects.",
    secondaryIcon: SiGithub,
  },
  {
    name: "Redux",
    icon: SiRedux,
    color: "#764ABC",
    description: "Managing predictable application state across components.",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "#FFCA28",
    description: "Adding authentication, database, and backend services.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-(--color-redwine)">
          Skills
        </h2>

        <p className="mb-14 text-center text-sm text-gray-500 dark:text-gray-400">
          Hover over a logo to explore my skills.
        </p>

        <div className="grid grid-cols-3 gap-x-5 gap-y-10 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const SecondaryIcon = skill.secondaryIcon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
                className="group relative mx-auto aspect-square w-full max-w-32"
                style={{
                  perspective: "800px",
                  "--skill-color": skill.color,
                }}
              >
                <div
                  aria-hidden="true"
                  className="skill-glow-border pointer-events-none absolute -inset-1 rounded-xl opacity-100"
                />
                <motion.button
                  type="button"
                  aria-label={`${skill.name}: ${skill.description}`}
                  className="relative h-full w-full cursor-pointer rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-(--color-redwine)"
                  style={{ transformStyle: "preserve-3d" }}
                  whileHover={{ rotateY: 180 }}
                  whileFocus={{ rotateY: 180 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Front: technology logo */}
                  <span
                    className="absolute inset-0 flex items-center justify-center gap-1"
                    style={{ backfaceVisibility: "hidden" }}
                    aria-hidden="true"
                  >
                    {skill.image ? (
                      <img
                        src={getStaticFIle(skill.image)}
                        alt=""
                        className="h-12 w-12 object-contain sm:h-14 sm:w-14"
                      />
                    ) : (
                      <>
                        <Icon
                          size={skill.secondaryIcon ? 42 : 52}
                          color={skill.color}
                        />
                        {SecondaryIcon && (
                          <SecondaryIcon size={30} color="currentColor" />
                        )}
                      </>
                    )}
                  </span>

                  {/* Back: skill name and description */}
                  <span
                    className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-xl px-2 text-center"
                    style={{
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <span className="text-sm font-bold text-(--color-redwine) sm:text-base">
                      {skill.name}
                    </span>

                    <span className="text-xs leading-relaxed text-gray-600 dark:text-gray-300">
                      {skill.description}
                    </span>
                  </span>
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
