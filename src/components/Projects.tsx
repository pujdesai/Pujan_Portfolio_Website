import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Globe, TrendingUp, Brain, Map, Gamepad2, Building2 } from "lucide-react";
import Section from "./Section";

const Projects: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showDemo, setShowDemo] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalSteps = 6;

  // Project data
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, glassmorphic design elements, and interactive components showcasing my skills and projects.",
      githubUrl: "https://github.com/pujdesai/Pujan_Portfolio_Website",
      hasDemo: false,
      demoUrl: "",
      skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"]
    },
    {
      title: "Stock Portfolio Application",
      description: "Developed a mock stock portfolio application utilizing the Alpha Vantage API to fetch real-time and past stock data. Implemented stock performance charts, portfolio composition and rebalancing, moving averages, and buying/selling shares. Designed an intuitive GUI using Java Swing, ensuring a user-friendly experience for managing and viewing portfolios. Built project using MVC architecture alongside the Command Design & Adapter patterns to ensure scalability and flexibility.",
      githubUrl: "",
      hasDemo: true,
      demoUrl: "GUIDemo.png",
      skills: ["Java", "Java Swing", "MVC Architecture", "Command Design Pattern", "Adapter Pattern", "Alpha Vantage API", "Financial Data Analysis"]
    },
    {
      title: "NBA Game Outcome Prediction Model",
      description: "Built a machine learning model that predicts NBA game outcomes using historical game data. The project retrieves data using the nba_api, computes rolling averages for key game statistics, and trains a classifier to predict whether a team will win. The modeling approach includes data retrieval using nba_api endpoints, data combination and cleaning, feature engineering with rolling averages, target variable creation, model training with Gaussian Naive Bayes classifier, and prediction functions for upcoming games.",
      githubUrl: "https://github.com/pujdesai/NBA-Prediction-Model",
      hasDemo: false,
      demoUrl: "",
      skills: ["Python", "Machine Learning", "Gaussian Naive Bayes", "NBA API", "Data Analysis", "Feature Engineering", "Statistical Modeling"]
    },
    {
      title: "Car Theft Analysis in India",
      description: "A comprehensive data visualization project exploring car theft patterns across India using interactive and static visualizations. Analyzes 10,000 car theft incidents with 22 key features including car brand, model, theft location, security measures, and recovery status. Features include an interactive choropleth map for geographic distribution, stacked bar charts for brand analysis, recovery aids impact visualization, daily theft trends with rolling averages, and heatmaps for theft frequency patterns. Implements responsive design with dynamic component rendering and media queries for optimal viewing across all devices.",
      githubUrl: "https://github.com/pujdesai/Car_Theft_India_Analysis",
      hasDemo: true,
      demoUrl: "https://car-theft-india-analysis.vercel.app/",
      skills: ["React", "D3.js", "Plotly", "Altair", "Folium", "Pandas", "Framer Motion", "CSS", "Interactive Charts", "Responsive Design", "Geographic Analysis", "Data Visualization", "Jupyter Notebook", "HTML"]
    },
    {
      title: "PvP Chess",
      description: "PvP chess game built with Pygame featuring multiple board themes, last-move highlighting, and valid moves display. Engineered with a modular, scalable architecture applying OOP practices to accelerate feature development and reduce technical debt. Implements all core chess mechanics including move validation, checkmate, stalemate, pawn promotion, en passant, and castling for a complete chess experience.",
      githubUrl: "https://github.com/pujdesai/PvP_Chess",
      hasDemo: true,
      demoUrl: "chess1.png",
      skills: ["Python", "Pygame", "Object-Oriented Programming", "Game Development", "Chess Logic", "Move Validation", "UI/UX Design"]
    },
    {
      title: "Online Banking System",
      description: "A Java-based banking system developed as part of a Scrum Master role, demonstrating both technical implementation and agile project management. The system includes account management, ATM operations, transaction processing, and various financial products. Features a Swing-based user interface and implements core banking functionalities including deposits, withdrawals, transfers, and financial product management (Bonds, Annuities, CDs). Built with modular architecture to ensure maintainability and scalability.",
      githubUrl: "https://github.com/pujdesai/Online-Bank",
      hasDemo: false,
      demoUrl: "",
      skills: ["Java", "Java Swing", "Scrum/Agile", "Project Management", "Banking Systems", "Financial Products", "User Interface Design", "Modular Architecture"]
    },
  ];

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % totalSteps);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => (prev - 1 + totalSteps) % totalSteps);
  };

  const currentProject = projects[currentStep];

  // Icon mapping for each project
  const projectIcons = {
    "Personal Portfolio Website": Globe,
    "Stock Portfolio Application": TrendingUp,
    "NBA Game Outcome Prediction Model": Brain,
    "Car Theft Analysis in India": Map,
    "PvP Chess": Gamepad2,
    "Online Banking System": Building2
  };

  const ProjectIcon = projectIcons[currentProject.title as keyof typeof projectIcons];

  return (
    <>
      <Section>
        <div className="relative z-10 h-full flex items-center justify-center p-2 2xs:p-4 xs:p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 2xl:p-24">
          <motion.div
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl xs:rounded-2xl md:rounded-2xl p-3 2xs:p-4 xs:p-6 sm:p-6 md:p-8 lg:p-8 xl:p-8 w-full max-w-6xl max-h-[85vh] overflow-y-auto relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {/* Logo in top-left corner - Hidden below lg */}
            <img
              src="/assets/logo.png"
              alt="Logo"
              className="absolute top-2 2xs:top-3 xs:top-4 sm:top-4 md:top-4 w-8 h-8 2xs:w-10 2xs:h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 drop-shadow-lg hidden lg:block"
            />
            
            {/* Content Area */}
            <div className="flex flex-col items-center justify-center h-full pt-8 2xs:pt-10 xs:pt-12 sm:pt-12 md:pt-12 lg:pt-16">
              {/* Stepper Timeline */}
              <motion.div
                className="flex items-center justify-center mb-4 2xs:mb-6 xs:mb-6 sm:mb-6 md:mb-8 lg:mb-8 w-full max-w-4xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {Array.from({ length: totalSteps }, (_, index) => (
                  <div key={index} className="flex items-center">
                    {/* Step Circle */}
                    <motion.div
                      className={`w-4 h-4 2xs:w-5 2xs:h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        index === currentStep
                          ? 'bg-indigo-600 border-indigo-600 text-white'
                          : index < currentStep
                          ? 'bg-indigo-400 border-indigo-400 text-white'
                          : 'bg-transparent border-white/40 text-white/40'
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-[8px] 2xs:text-[9px] xs:text-[10px] sm:text-xs md:text-xs font-secondary font-medium">
                        {index + 1}
                      </span>
                    </motion.div>
                    
                    {/* Connector Line */}
                    {index < totalSteps - 1 && (
                      <div className={`w-8 2xs:w-10 xs:w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 h-0.5 transition-all duration-300 ${
                        index < currentStep ? 'bg-indigo-400' : 'bg-white/20'
                      }`} />
                    )}
                  </div>
                ))}
              </motion.div>

               {/* Project Content Area */}
               <motion.div
                 className="flex-1 flex flex-col items-center justify-center w-full"
                 key={currentStep}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 transition={{ duration: 0.3 }}
               >
                 {/* Project Content */}
                 <div className="flex flex-col items-center w-full max-w-3xl">
                   {/* Project Icon */}
                   {ProjectIcon && (
                     <motion.div
                       className="flex justify-center mb-4 2xs:mb-6 xs:mb-6 sm:mb-6 md:mb-8 lg:mb-8"
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.4, delay: 0.1 }}
                     >
                       <motion.div
                         className="p-2 2xs:p-2.5 xs:p-3 sm:p-3 md:p-3 bg-indigo-600/20 border border-indigo-400/30 rounded-xl"
                         initial={{ opacity: 0, scale: 0.8 }}
                         animate={{ opacity: 1, scale: 1 }}
                         transition={{ duration: 0.4, delay: 0.2 }}
                       >
                         <ProjectIcon className="w-6 h-6 2xs:w-7 2xs:h-7 xs:w-8 xs:h-8 sm:w-8 sm:h-8 md:w-8 md:h-8 text-indigo-400" />
                       </motion.div>
                     </motion.div>
                   )}

                   {/* Project Title */}
                   <motion.h2 
                     className="text-lg 2xs:text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-3xl uppercase font-primary text-white mb-2 2xs:mb-3 xs:mb-3 sm:mb-3 md:mb-4 lg:mb-4 text-center px-2"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.4, delay: 0.3 }}
                   >
                     {currentProject.title}
                   </motion.h2>
                   
                   {/* Project Description */}
                   <motion.p 
                     className="text-xs 2xs:text-sm xs:text-sm sm:text-sm md:text-sm lg:text-sm font-secondary text-white/80 leading-relaxed mb-4 2xs:mb-5 xs:mb-5 sm:mb-5 md:mb-6 lg:mb-6 text-center px-2"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.4, delay: 0.2 }}
                   >
                     {currentProject.description}
                   </motion.p>

                   {/* Skills Pills */}
                   {currentProject.skills.length > 0 && (
                     <motion.div 
                       className="flex flex-wrap justify-center gap-2 2xs:gap-2 xs:gap-2 sm:gap-3 md:gap-3 lg:gap-3 mb-4 2xs:mb-6 xs:mb-6 sm:mb-6 md:mb-8 lg:mb-8 px-2"
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.4, delay: 0.3 }}
                     >
                       {currentProject.skills.map((skill, index) => (
                         <motion.div
                           key={skill}
                           className="px-2 py-1 2xs:px-2.5 2xs:py-1 xs:px-3 xs:py-1 sm:px-3 sm:py-1 md:px-3 md:py-1 bg-indigo-400/20 border border-indigo-400/30 rounded-full"
                           initial={{ opacity: 0, scale: 0.8 }}
                           animate={{ opacity: 1, scale: 1 }}
                           transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
                           whileHover={{ scale: 1.05 }}
                         >
                           <span className="text-xs 2xs:text-xs xs:text-xs sm:text-xs md:text-xs font-secondary text-white/80 whitespace-nowrap">
                             {skill}
                           </span>
                         </motion.div>
                       ))}
                     </motion.div>
                   )}

                   {/* Project Buttons */}
                   <motion.div 
                     className="flex flex-col xs:flex-row items-center justify-center gap-3 2xs:gap-3 xs:gap-4 sm:gap-4 md:gap-4 lg:gap-4"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.4, delay: 0.5 }}
                   >
                     {/* GitHub Button */}
                     {currentProject.githubUrl && (
                       <motion.a
                         href={currentProject.githubUrl}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="px-4 py-2 2xs:px-5 2xs:py-2 xs:px-6 xs:py-3 sm:px-6 sm:py-3 md:px-6 md:py-3 lg:px-6 lg:py-3 bg-white/10 hover:bg-white/20 text-white font-secondary rounded-lg transition-all duration-300 flex items-center gap-2 border border-white/20 text-sm 2xs:text-sm xs:text-sm sm:text-sm md:text-sm lg:text-sm"
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                       >
                         <img 
                           src="/assets/github.png" 
                           alt="GitHub" 
                           className="w-4 h-4 2xs:w-4 2xs:h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-5 md:h-5 filter invert brightness-0"
                         />
                         GitHub
                       </motion.a>
                     )}

                     {/* Demo Button */}
                     {currentProject.hasDemo && (
                       <motion.button
                         onClick={() => {
                           if (currentProject.demoUrl.startsWith('http')) {
                             // External URL - open in new tab
                             window.open(currentProject.demoUrl, '_blank', 'noopener,noreferrer');
                           } else {
                             // Image file - open in modal
                             setCurrentImageIndex(0);
                             setShowDemo(true);
                           }
                         }}
                         className="px-4 py-2 2xs:px-5 2xs:py-2 xs:px-6 xs:py-3 sm:px-6 sm:py-3 md:px-6 md:py-3 lg:px-6 lg:py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-secondary rounded-lg transition-all duration-300 flex items-center gap-2 text-sm 2xs:text-sm xs:text-sm sm:text-sm md:text-sm lg:text-sm"
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                       >
                         <svg className="w-4 h-4 2xs:w-4 2xs:h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className="flex items-center justify-between w-full max-w-4xl mt-4 2xs:mt-6 xs:mt-6 sm:mt-6 md:mt-8 lg:mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Previous Button - Left Aligned */}
                <div>
                  {currentStep > 0 && (
                    <motion.button
                      onClick={handlePrev}
                      className="w-10 h-10 2xs:w-11 2xs:h-11 xs:w-12 xs:h-12 sm:w-12 sm:h-12 md:w-12 md:h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <ChevronLeft className="w-5 h-5 2xs:w-5 2xs:h-5 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-5 md:h-5" />
                    </motion.button>
                  )}
                </div>

                {/* Next Button - Right Aligned */}
                <div>
                  {currentStep < totalSteps - 1 && (
                    <motion.button
                      onClick={handleNext}
                      className="w-10 h-10 2xs:w-11 2xs:h-11 xs:w-12 xs:h-12 sm:w-12 sm:h-12 md:w-12 md:h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <ChevronRight className="w-5 h-5 2xs:w-5 2xs:h-5 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-5 md:h-5" />
                    </motion.button>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Demo Modal */}
      <AnimatePresence>
        {showDemo && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDemo(false)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowDemo(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center z-10 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation Controls - Only show for chess project */}
              {currentProject.title === "PvP Chess" && currentProject.demoUrl && (
                <>
                  {/* Previous Button */}
                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : 4))}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center z-10 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev < 4 ? prev + 1 : 0))}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center z-10 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
                    {currentImageIndex + 1} / 5
                  </div>
                </>
              )}
              
              {/* Demo Image */}
              {currentProject.demoUrl && (
                <motion.img 
                  key={currentImageIndex}
                  src={`/assets/${currentProject.title === "PvP Chess" ? `chess${currentImageIndex + 1}.png` : currentProject.demoUrl}`}
                  alt={`${currentProject.title} Demo`}
                  className="w-full h-auto max-h-[90vh] object-contain"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;