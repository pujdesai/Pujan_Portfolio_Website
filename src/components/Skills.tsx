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
      skills: ["Adobe Creative Suite", "VS Code", "Eclipse", "IntelliJ", "DrRacket", "Bloomberg", "QuantLib", "MS Office Suite", "Python", "Java", "C++"]
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
      <div className="relative z-10 h-full flex items-center justify-center p-24">
        {/* Skills Grid */}
        <div className="grid grid-cols-3 gap-20 w-full h-full max-w-8xl">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl relative p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Icon box and title in top-left corner */}
                <motion.div
                  className="absolute top-6 left-6 flex items-center gap-3"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 + (index * 0.1) }}
                >
                  <div className={`flex items-center justify-center p-1 ${colors.bg} rounded-lg border ${colors.border} w-14 h-14`}>
                    <category.icon 
                      className={`w-6 h-6 ${colors.icon}`}
                    />
                  </div>
                  <h3 className="ml-2 text-2xl font-primary text-white uppercase tracking-tight">
                    {category.title}
                  </h3>
                </motion.div>

                {/* Skills tags */}
                <div className="absolute top-32 left-6 right-6">
                  <div className="flex flex-wrap gap-2 [&>*]:mb-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className={`px-3 py-1 ${colors.bg} border ${colors.border} rounded-full`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + (skillIndex * 0.05), duration: 0.3 }}
                      >
                        <span className={`text-xs font-secondary text-white/80 whitespace-nowrap`}>
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