import React from "react";
import { motion } from "framer-motion";
import { Palette, Settings, Database, Cloud, Brain, Wrench } from "lucide-react";
import Section from "./Section";

const Skills: React.FC = () => {
  const skillCategories = [
    { 
      icon: Palette, 
      title: "Frontend", 
      color: "blue",
      skills: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS", "JavaScript", "TypeScript", "Java Swing", "Figma", "AG Grid", "Framer Motion", "Vite", "Streamlit"]
    },
    { 
      icon: Settings, 
      title: "Backend", 
      color: "emerald",
      skills: ["Django", "Flask", "FastAPI", "Node.js", "PyDantic", "Uvicorn", "REST APIs", "Postman"]
    },
    { 
      icon: Database, 
      title: "Database", 
      color: "purple",
      skills: ["PostgreSQL", "Pinecone", "Chroma", "Prisma", "SQL"]
    },
    { 
      icon: Cloud, 
      title: "DevOps & Cloud", 
      color: "cyan",
      skills: ["Git", "Docker", "AWS", "Microsoft Azure", "CI/CD", "Unix/Linux"]
    },
    { 
      icon: Brain, 
      title: "AI & ML", 
      color: "pink",
      skills: ["Pandas", "NumPy", "Scikit-learn", "Jupyter Notebook", "SciPy", "Matplotlib", "Seaborn", "Vega-Altair", "D3.js", "Plotly", "OpenAI", "TensorFlow", "Folium", "LLMs", "RAG"]
    },
    { 
      icon: Wrench, 
      title: "Other", 
      color: "amber",
      skills: ["Adobe Creative Suite", "VS Code", "Eclipse", "IntelliJ", "DrRacket", "Bloomberg", "QuantLib", "MS Office Suite", "Python", "Java", "C++", "Scrum/Agile", "Spline"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; border: string; icon: string } } = {
      blue: { bg: "bg-blue-400/20", border: "border-blue-400/30", icon: "text-blue-400" },
      emerald: { bg: "bg-emerald-400/20", border: "border-emerald-400/30", icon: "text-emerald-400" },
      purple: { bg: "bg-purple-400/20", border: "border-purple-400/30", icon: "text-purple-400" },
      cyan: { bg: "bg-cyan-400/20", border: "border-cyan-400/30", icon: "text-cyan-400" },
      pink: { bg: "bg-pink-400/20", border: "border-pink-400/30", icon: "text-pink-400" },
      amber: { bg: "bg-amber-400/20", border: "border-amber-400/30", icon: "text-amber-400" }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <Section>
      <div className="relative z-10 h-full flex items-center justify-center p-2 2xs:p-4 xs:p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 2xl:p-24">
        {/* Skills Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 2xs:gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 w-full h-full max-w-8xl max-h-[90vh] overflow-y-auto">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl xs:rounded-2xl md:rounded-2xl relative p-3 2xs:p-4 xs:p-5 sm:p-6 md:p-6 lg:p-6 overflow-y-auto lg:overflow-visible"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 0.98 }}
              >
                {/* Icon box and title in top-left corner */}
                <motion.div
                  className="absolute top-3 2xs:top-4 xs:top-5 sm:top-6 md:top-6 lg:top-6 left-3 2xs:left-4 xs:left-5 sm:left-6 md:left-6 lg:left-6 flex items-center gap-2 2xs:gap-3 xs:gap-3 sm:gap-3 md:gap-3 z-20 rounded-lg px-2 py-1"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 + (index * 0.1) }}
                >
                  <div className={`flex items-center justify-center p-1 2xs:p-1 xs:p-1 sm:p-1 md:p-1 ${colors.bg} rounded-lg border ${colors.border} w-10 h-10 2xs:w-12 2xs:h-12 xs:w-14 xs:h-14 sm:w-14 sm:h-14 md:w-14 md:h-14`}>
                    <category.icon 
                      className={`w-5 h-5 2xs:w-6 2xs:h-6 xs:w-6 xs:h-6 sm:w-6 sm:h-6 md:w-6 md:h-6 ${colors.icon}`}
                    />
                  </div>
                  <h3 className="text-sm 2xs:text-base xs:text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl font-primary text-white uppercase tracking-tight">
                    {category.title}
                  </h3>
                </motion.div>

                {/* Skills tags */}
                <div className="absolute top-16 2xs:top-20 xs:top-24 sm:top-28 md:top-28 lg:top-28 left-2 2xs:left-3 xs:left-4 sm:left-5 md:left-5 lg:left-5 right-2 2xs:right-3 xs:right-4 sm:right-5 md:right-5 lg:right-5 bottom-2 2xs:bottom-3 xs:bottom-4 sm:bottom-5 md:bottom-5 lg:bottom-5">
                  <div className="flex flex-wrap gap-1 2xs:gap-1.5 xs:gap-2 sm:gap-2 md:gap-2 [&>*]:mb-1 2xs:[&>*]:mb-1.5 xs:[&>*]:mb-2 sm:[&>*]:mb-2 md:[&>*]:mb-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className={`px-1.5 py-0.5 2xs:px-2 2xs:py-1 xs:px-2.5 xs:py-1 sm:px-3 sm:py-1 md:px-3 md:py-1 ${colors.bg} border ${colors.border} rounded-full max-w-full`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + (skillIndex * 0.05), duration: 0.3 }}
                      >
                        <span className={`text-[8px] 2xs:text-[9px] xs:text-[10px] sm:text-xs md:text-xs font-secondary text-white/80 break-words leading-tight`}>
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Skills;