import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Section from "./Section";

const Projects: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 7;

  // Project data
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, glassmorphic design elements, and interactive components showcasing my skills and projects.",
      githubUrl: "https://github.com/pujdesai/Pujan_Portfolio_Website",
      hasDemo: false,
      skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"]
    },
    {
      title: "Project 2",
      description: "Project description will be added here...",
      githubUrl: "",
      hasDemo: false,
      skills: []
    },
    {
      title: "Project 3", 
      description: "Project description will be added here...",
      githubUrl: "",
      hasDemo: false,
      skills: []
    },
    {
      title: "Project 4",
      description: "Project description will be added here...", 
      githubUrl: "",
      hasDemo: false,
      skills: []
    },
    {
      title: "Project 5",
      description: "Project description will be added here...",
      githubUrl: "",
      hasDemo: false,
      skills: []
    }
  ];

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % totalSteps);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => (prev - 1 + totalSteps) % totalSteps);
  };

  const currentProject = projects[currentStep];

  return (
    <Section>
      <div className="relative z-10 h-full flex items-center justify-center p-24">
        <motion.div
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 w-full max-w-6xl max-h-[80vh] overflow-y-auto relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* Logo in top-left corner */}
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="absolute top-4 left-4 w-14 h-14 drop-shadow-lg"
          />
          
          {/* Content Area */}
          <div className="flex flex-col items-center justify-center h-full pt-16">
            {/* Stepper Timeline */}
            <motion.div
              className="flex items-center justify-center mb-8 w-full max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {Array.from({ length: totalSteps }, (_, index) => (
                <div key={index} className="flex items-center">
                  {/* Step Circle */}
                  <motion.div
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      index === currentStep
                        ? 'bg-indigo-600 border-indigo-600 text-white'
                        : index < currentStep
                        ? 'bg-indigo-400 border-indigo-400 text-white'
                        : 'bg-transparent border-white/40 text-white/40'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-xs font-secondary font-medium">
                      {index + 1}
                    </span>
                  </motion.div>
                  
                  {/* Connector Line */}
                  {index < totalSteps - 1 && (
                    <div className={`w-32 h-0.5 transition-all duration-300 ${
                      index < currentStep ? 'bg-indigo-400' : 'bg-white/20'
                    }`} />
                  )}
                </div>
              ))}
            </motion.div>

            {/* Project Content Area */}
            <motion.div
              className="flex-1 flex items-center justify-center w-full"
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center max-w-2xl">
                {/* Project Title */}
                <motion.h2 
                  className="text-3xl uppercase font-primary text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  {currentProject.title}
                </motion.h2>

                {/* Project Image Area */}
                <motion.div
                  className="w-full h-48 bg-white/5 border border-white/10 rounded-lg mb-4 flex items-center justify-center overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                >
                  <img 
                    src="/assets/project 1.png" 
                    alt="Personal Portfolio Website" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </motion.div>
                
                {/* Project Description */}
                <motion.p 
                  className="text-sm font-secondary text-white/80 leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {currentProject.description}
                </motion.p>

                {/* Skills Pills */}
                {currentProject.skills.length > 0 && (
                  <motion.div 
                    className="flex flex-wrap justify-center gap-3 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.25 }}
                  >
                    {currentProject.skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        className="px-3 py-1 bg-indigo-400/20 border border-indigo-400/30 rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-xs font-secondary text-white/80 whitespace-nowrap">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Project Buttons */}
                <motion.div 
                  className="flex items-center justify-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  {/* GitHub Button */}
                  {currentProject.githubUrl && (
                    <motion.a
                      href={currentProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-secondary rounded-lg transition-all duration-300 flex items-center gap-2 border border-white/20"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img 
                        src="/assets/github.png" 
                        alt="GitHub" 
                        className="w-5 h-5 filter invert brightness-0"
                      />
                      GitHub
                    </motion.a>
                  )}

                  {/* Demo Button */}
                  {currentProject.hasDemo && (
                    <motion.button
                      className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-secondary rounded-lg transition-all duration-300 flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Demo
                    </motion.button>
                  )}
                </motion.div>
              </div>
            </motion.div>

            {/* Navigation Buttons - Inside Card */}
            <motion.div
              className="flex items-center justify-between w-full max-w-4xl mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Previous Button - Left Aligned */}
              <div>
                {currentStep > 0 && (
                  <motion.button
                    onClick={handlePrev}
                    className="w-12 h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>
                )}
              </div>

              {/* Next Button - Right Aligned */}
              <div>
                {currentStep < totalSteps - 1 && (
                  <motion.button
                    onClick={handleNext}
                    className="w-12 h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Remove the outside navigation buttons */}
      </div>
    </Section>
  );
};

export default Projects;