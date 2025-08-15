import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, GraduationCap, Briefcase } from "lucide-react";
import Section from "./Section";

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState("about");
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
          {/* Navigation Buttons */}
          <div className="flex justify-center gap-6 mb-8">
            <motion.button
              className={`px-8 py-3 font-secondary rounded-lg flex items-center gap-2 transition-colors ${
                activeTab === "about"
                  ? "bg-indigo-600 text-white"
                  : "bg-white/10 text-white/60 hover:bg-white/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab("about")}
            >
              <User className="w-4 h-4" />
              About
            </motion.button>
            <motion.button
              className={`px-8 py-3 font-secondary rounded-lg flex items-center gap-2 transition-colors ${
                activeTab === "education"
                  ? "bg-indigo-600 text-white"
                  : "bg-white/10 text-white/60 hover:bg-white/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab("education")}
            >
              <GraduationCap className="w-4 h-4" />
              Education
            </motion.button>
            <motion.button
              className={`px-8 py-3 font-secondary rounded-lg flex items-center gap-2 transition-colors ${
                activeTab === "experience"
                  ? "bg-indigo-600 text-white"
                  : "bg-white/10 text-white/60 hover:bg-white/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab("experience")}
            >
              <Briefcase className="w-4 h-4" />
              Experience
            </motion.button>
          </div>

          {/* Content Area */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-[400px]"
          >
            {activeTab === "about" && (
              <div className="flex gap-8">
                {/* Left Side - Image */}
                <motion.div
                  className="w-1/3 flex items-center justify-center"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <motion.img
                    src="/assets/about.png"
                    alt="Pujan Desai"
                    className="w-full h-auto max-w-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Right Side - Text */}
                <motion.div
                  className="w-2/3 flex items-center"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <motion.p
                    className="text-lg font-secondary text-white/80 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    Hi, I'm Pujan Desai, a driven Computer Science and Business
                    Administration student with a concentration in Finance at
                    Northeastern University Honors College. I am passionate
                    about software engineering, AI and machine learning, and
                    data analytics, combining problem-solving and collaboration
                    to create meaningful impact. Beyond academics, I enjoy
                    creative pursuits like graphic design and working on
                    projects that blend technology and innovation. In my free
                    time, I love hanging out with friends, listening to music,
                    playing pickleball and tennis, going to the gym, and
                    cooking. I am always open to connecting, and I would love to
                    discuss ideas and opportunities. Feel free to reach out!
                  </motion.p>
                </motion.div>
              </div>
            )}

            {activeTab === "education" && (
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Header Section */}
                <motion.div
                  className="text-center mb-8"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-4xl uppercase font-primary text-white mb-2">
                    Northeastern University
                  </h3>
                  <p className="text-xl font-secondary text-white/80 mb-1">
                    Bachelor of Science in Computer Science & Business
                    Administration
                  </p>
                  <p className="text-lg font-secondary text-white/60 mb-3">
                    Concentration in Finance
                  </p>
                  <div className="flex justify-center gap-6 text-sm font-secondary text-white/60">
                    <span>2023 - Present</span>
                    <span>•</span>
                    <span>Expected Graduation: May 2027</span>
                  </div>
                </motion.div>

                {/* Courses Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h4 className="text-xl font-primary uppercase text-white mb-4 text-center">
                    Relevant Courses
                  </h4>
                  <div className="flex flex-wrap gap-3 justify-center [&>*]:mb-3">
                    {[
                      "Object-Oriented Design",
                      "Algorithms & Data",
                      "Information Presentation & Visualization",
                      "Foundations of Data Science",
                      "Fundamentals of Computer Science 1 & 2",
                      "Discrete Structures",
                      "Financial Management",
                      "Financial Accounting",
                    ].map((course, i) => (
                      <motion.div
                        key={i}
                        className="px-4 py-2 bg-indigo-400/20 border border-indigo-400/30 rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.05, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-sm font-secondary text-white/80 whitespace-nowrap">
                          {course}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Achievements Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-center"
                >
                  <h4 className="text-xl uppercase font-primary text-white mb-4">
                    Achievements
                  </h4>
                  <div className="flex justify-center gap-6">
                    {["Dean's List", "Honors College"].map((achievement, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-2 px-4 py-2 bg-emerald-400/20 border border-emerald-400/30 rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                        <span className="text-sm font-secondary text-white/80">
                          {achievement}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}

                          {activeTab === "experience" && (
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Liminality Capital - Software Engineer (AI/ML) */}
                  <motion.div
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-400 to-red-400/20 rounded-full"></div>
                    <div className="ml-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-2xl font-primary text-white mb-1 group-hover:text-red-400 transition-colors">
                            Software Engineer Co-op (AI/ML)
                          </h3>
                          <p className="text-lg font-secondary text-white/80">
                            Liminality Capital LP
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-white/60 text-sm font-medium">
                            Jun 2025 - Present
                          </p>
                          <p className="text-white/60 text-sm">Boston, MA</p>
                        </div>
                      </div>
                      
                                             <ul className="text-sm font-secondary text-white/80 mb-4 leading-relaxed space-y-2">
                         <li className="flex items-start">
                           <span className="text-red-400 mr-2 mt-1">•</span>
                           <span>Developed custom charting platform using FastAPI and React with Bloomberg data feeds for real-time financial market visualization</span>
                         </li>
                         <li className="flex items-start">
                           <span className="text-red-400 mr-2 mt-1">•</span>
                           <span>Built AI research agent using OpenAI and Chroma vector database to automatically summarize and extract insights from firm research</span>
                         </li>
                         <li className="flex items-start">
                           <span className="text-red-400 mr-2 mt-1">•</span>
                           <span>Created comprehensive PnL dashboard with interactive charts and analytics to track portfolio performance and risk metrics</span>
                         </li>
                         <li className="flex items-start">
                           <span className="text-red-400 mr-2 mt-1">•</span>
                           <span>Engineered financial applications including Portfolio Management System using AG Grid, swaption pricing models, and LBO valuation tools</span>
                         </li>
                       </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {[
                          "FastAPI",
                          "React",
                          "Bloomberg API",
                          "OpenAI",
                          "Chroma",
                          "AG Grid",
                          "Financial Modeling",
                          "Charting",
                          "PnL Analytics",
                          "Swaption Pricing",
                          "LBO Models",
                          "Repo Markets",
                        ].map((tech, i) => (
                          <motion.div
                            key={i}
                            className="px-3 py-1 bg-red-400/10 border border-red-400/20 rounded-full hover:bg-red-400/20 transition-colors"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7 + i * 0.05, duration: 0.3 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <span className="text-xs font-secondary text-white/80 whitespace-nowrap">
                              {tech}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* EduFlexAI - Software Developer & UI/UX Designer */}
                  <motion.div
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-400/20 rounded-full"></div>
                    <div className="ml-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-2xl font-primary text-white mb-1 group-hover:text-blue-400 transition-colors">
                            Software Developer & UI/UX Designer
                          </h3>
                          <p className="text-lg font-secondary text-white/80">
                            EduFlexAI
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-white/60 text-sm font-medium">
                            Jan 2025 - June 2025
                          </p>
                          <p className="text-white/60 text-sm">Hybrid</p>
                        </div>
                      </div>

                      <ul className="text-sm font-secondary text-white/80 mb-4 leading-relaxed space-y-2">
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2 mt-1">•</span>
                          <span>Contributing to the development of an AI-driven learning platform using Next.js, React, Django, PostgreSQL, and OpenAI</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2 mt-1">•</span>
                          <span>Developing a "Learn" page enabling GPT-driven, file-based personalized help, context-aware explanations, and code reviews</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2 mt-1">•</span>
                          <span>Building a dynamic resource aggregator using Pinecone vector embeddings to surface curated videos, articles, and materials</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2 mt-1">•</span>
                          <span>Engineering GitHub webhooks powering real-time project sync, automated feedback loops, and efficient version control</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2 mt-1">•</span>
                          <span>Crafting scalable UI/UX designs focused on intuitive user flows, modern design systems, and cross-device accessibility</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2 mt-1">•</span>
                          <span>Architecting scalable Dockerized infrastructure and CI/CD pipelines to accelerate development, deployment, and onboarding</span>
                        </li>
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {[
                          "Next.js",
                          "React",
                          "Django",
                          "PostgreSQL",
                          "OpenAI",
                          "Pinecone",
                          "Docker",
                          "CI/CD",
                          "UI/UX Design",
                        ].map((tech, i) => (
                          <motion.div
                            key={i}
                            className="px-3 py-1 bg-blue-400/10 border border-blue-400/20 rounded-full hover:bg-blue-400/20 transition-colors"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + i * 0.05, duration: 0.3 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <span className="text-xs font-secondary text-white/80 whitespace-nowrap">
                              {tech}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* D'Amore-McKim - Teaching Assistant */}
                  <motion.div
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-emerald-400/20 rounded-full"></div>
                    <div className="ml-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-2xl font-primary text-white mb-1 group-hover:text-emerald-400 transition-colors">
                            Accounting Undergraduate Teaching Assistant
                          </h3>
                          <p className="text-lg font-secondary text-white/80">
                            D'Amore-McKim School of Business
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-white/60 text-sm font-medium">
                            Aug 2024 - June 2025
                          </p>
                          <p className="text-white/60 text-sm">Boston, MA</p>
                        </div>
                      </div>

                      <ul className="text-sm font-secondary text-white/80 mb-4 leading-relaxed space-y-2">
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2 mt-1">•</span>
                          <span>Manage course-related administrative tasks and prepare materials for ACCT 1201 & 1209: Financial Accounting & Reporting</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2 mt-1">•</span>
                          <span>Hold weekly office hours, offering personalized support for students on course materials, exam prep, and study strategies</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2 mt-1">•</span>
                          <span>Grade exams and assignments, providing detailed feedback to enhance student understanding and performance</span>
                        </li>
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {[
                          "Financial Accounting",
                          "Teaching",
                          "Student Support",
                          "Grading",
                          "Office Hours",
                          "Course Management",
                        ].map((tech, i) => (
                          <motion.div
                            key={i}
                            className="px-3 py-1 bg-emerald-400/10 border border-emerald-400/20 rounded-full hover:bg-emerald-400/20 transition-colors"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.0 + i * 0.05, duration: 0.3 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <span className="text-xs font-secondary text-white/80 whitespace-nowrap">
                              {tech}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* CarePath - Project Manager */}
                  <motion.div
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-cyan-400/20 rounded-full"></div>
                    <div className="ml-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-2xl font-primary text-white mb-1 group-hover:text-cyan-400 transition-colors">
                            Project Manager
                          </h3>
                          <p className="text-lg font-secondary text-white/80">
                            CarePath
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-white/60 text-sm font-medium">
                            Oct 2024 - Nov 2024
                          </p>
                          <p className="text-white/60 text-sm">Hybrid</p>
                        </div>
                      </div>

                      <ul className="text-sm font-secondary text-white/80 mb-4 leading-relaxed space-y-2">
                        <li className="flex items-start">
                          <span className="text-cyan-400 mr-2 mt-1">•</span>
                          <span>Led a team of 4 developers using Agile, ensuring timely sprint deliverables and effective communication with project liaison</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-cyan-400 mr-2 mt-1">•</span>
                          <span>Managed and coded a health-tracker app with health metrics, medication reminders, and appointment scheduling using React</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-cyan-400 mr-2 mt-1">•</span>
                          <span>Oversaw team workflows, delivering an intuitive dashboard with real-time updates for enhanced functionality and experience</span>
                        </li>
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {[
                          "React",
                          "Agile",
                          "Project Management",
                          "Team Leadership",
                          "Health Tech",
                          "Dashboard Development",
                        ].map((tech, i) => (
                          <motion.div
                            key={i}
                            className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full hover:bg-cyan-400/20 transition-colors"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2 + i * 0.05, duration: 0.3 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <span className="text-xs font-secondary text-white/80 whitespace-nowrap">
                              {tech}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Oasis - Software Developer (ML) */}
                  <motion.div
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-400 to-pink-400/20 rounded-full"></div>
                    <div className="ml-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-2xl font-primary text-white mb-1 group-hover:text-pink-400 transition-colors">
                            Software Developer (Machine Learning)
                          </h3>
                          <p className="text-lg font-secondary text-white/80">
                            Oasis at Northeastern
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-white/60 text-sm font-medium">
                            Jan 2024 - Apr 2024
                          </p>
                          <p className="text-white/60 text-sm">Boston, MA</p>
                        </div>
                      </div>

                      <ul className="text-sm font-secondary text-white/80 mb-4 leading-relaxed space-y-2">
                        <li className="flex items-start">
                          <span className="text-pink-400 mr-2 mt-1">•</span>
                          <span>Built a machine learning model predicting NBA game winners with ~65% accuracy using NBA API, Scikit-learn, and Pandas</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-400 mr-2 mt-1">•</span>
                          <span>Improved model performance and correctness by engineering features like rolling averages and home/away statistics</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-pink-400 mr-2 mt-1">•</span>
                          <span>Presented and demoed the project to ~100 members/sponsors, explaining the model development process and its functionality</span>
                        </li>
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {[
                          "Python",
                          "Scikit-learn",
                          "Pandas",
                          "Machine Learning",
                          "NBA API",
                          "Data Analysis",
                          "Feature Engineering",
                        ].map((tech, i) => (
                          <motion.div
                            key={i}
                            className="px-3 py-1 bg-pink-400/10 border border-pink-400/20 rounded-full hover:bg-pink-400/20 transition-colors"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.4 + i * 0.05, duration: 0.3 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <span className="text-xs font-secondary text-white/80 whitespace-nowrap">
                              {tech}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Old Bridge High School - Scrum Master */}
                  <motion.div
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-amber-400/20 rounded-full"></div>
                    <div className="ml-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-2xl font-primary text-white mb-1 group-hover:text-amber-400 transition-colors">
                            Scrum Master
                          </h3>
                          <p className="text-lg font-secondary text-white/80">
                            Old Bridge High School – Online Bank
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-white/60 text-sm font-medium">
                            Nov 2022 - Mar 2023
                          </p>
                          <p className="text-white/60 text-sm">Old Bridge, NJ</p>
                        </div>
                      </div>

                      <ul className="text-sm font-secondary text-white/80 mb-4 leading-relaxed space-y-2">
                        <li className="flex items-start">
                          <span className="text-amber-400 mr-2 mt-1">•</span>
                          <span>Spearheaded a team of ~30 developers, optimizing task allocation and forming specialized teams for efficient execution</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-400 mr-2 mt-1">•</span>
                          <span>Delivered an online banking platform with account creation, transactions, loan approvals, and foreign exchange features</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-400 mr-2 mt-1">•</span>
                          <span>Streamlined GitHub integration, ensuring efficient code management and seamless collaboration across development teams</span>
                        </li>
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {[
                          "Scrum",
                          "Team Leadership",
                          "Banking Platform",
                          "GitHub",
                          "Agile",
                          "Project Management",
                          "Full-Stack Development",
                        ].map((tech, i) => (
                          <motion.div
                            key={i}
                            className="px-3 py-1 bg-amber-400/10 border border-amber-400/20 rounded-full hover:bg-amber-400/20 transition-colors"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.6 + i * 0.05, duration: 0.3 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <span className="text-xs font-secondary text-white/80 whitespace-nowrap">
                              {tech}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
