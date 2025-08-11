import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { Send } from "lucide-react";
import Section from "./Section";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Reset status after 3 seconds to show normal send button
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      // Reset status after 3 seconds to show normal send button
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section>
      <div className="relative z-10 h-full flex items-center justify-center px-8 overflow-hidden">
        <div className="max-w-7xl w-full relative">
          {/* Main content grid */}
          <div className="flex items-center justify-center h-full">
            <motion.div
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-16 max-w-6xl w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="text-center space-y-4 flex flex-col h-full">
                {/* Top row - Logo */}
                <motion.div
                  className="absolute top-4 left-4 flex justify-start items-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {/* Logo */}
                  <img 
                    src="/assets/logo.png" 
                    alt="Logo" 
                    className="w-14 h-14 drop-shadow-lg"
                  />
                </motion.div>

                {/* Main Content - Vertical Layout */}
                <div className="flex items-center justify-center flex-1 -mt-8">
                  <div className="flex flex-col items-center w-full space-y-12">
                    {/* Text Content at Top */}
                    <motion.div
                      className="flex flex-col items-center space-y-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      {/* Main Heading */}
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      >
                        <h1 className="text-5xl font-primary text-white leading-none tracking-tight">
                          GET IN TOUCH
                        </h1>
                      </motion.div>

                      {/* Subtitle */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                      >
                        <p className="text-base text-white/80 font-secondary tracking-wide">
                          Let's connect, work on something together, or share project ideas!
                        </p>
                      </motion.div>
                    </motion.div>

                    {/* Form and Icons Row */}
                    <div className="flex w-full gap-20 items-stretch">
                      {/* Contact Form (60% width) */}
                      <motion.div
                        className="w-3/5 flex flex-col"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                      >
                      <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col justify-end">
                        {/* Name and Email on same row */}
                        <div className="flex gap-4">
                          <div className="flex-1">
                            <label className="block text-sm text-white/80 font-secondary tracking-wide mb-2 text-left">
                              Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Your Name"
                              required
                              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-sm font-secondary text-white/80 placeholder-white/60 focus:outline-none focus:border-indigo-400 transition-colors [&:-webkit-autofill]:!bg-white/10 [&:-webkit-autofill]:!shadow-[0_0_0_1000px_rgba(255,255,255,0.1)_inset] [&:-webkit-autofill]:!text-white/80"
                            />
                          </div>
                          
                          <div className="flex-1">
                            <label className="block text-sm text-white/80 font-secondary tracking-wide mb-2 text-left">
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="your.email@address.com"
                              required
                              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-sm font-secondary text-white/80 placeholder-white/60 focus:outline-none focus:border-indigo-400 transition-colors [&:-webkit-autofill]:!bg-white/10 [&:-webkit-autofill]:!shadow-[0_0_0_1000px_rgba(255,255,255,0.1)_inset] [&:-webkit-autofill]:!text-white/80"
                            />
                          </div>
                        </div>
                        
                        {/* Subject */}
                        <div>
                          <label className="block text-sm text-white/80 font-secondary tracking-wide mb-2 text-left">
                            Subject
                          </label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Subject of your message"
                            required
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-sm font-secondary text-white/80 placeholder-white/60 focus:outline-none focus:border-indigo-400 transition-colors [&:-webkit-autofill]:!bg-white/10 [&:-webkit-autofill]:!shadow-[0_0_0_1000px_rgba(255,255,255,0.1)_inset] [&:-webkit-autofill]:!text-white/80"
                          />
                        </div>
                        
                        {/* Message */}
                        <div>
                          <label className="block text-sm text-white/80 font-secondary tracking-wide mb-2 text-left">
                            Message
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Your message here..."
                            required
                            rows={6}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-sm font-secondary text-white/80 placeholder-white/60 focus:outline-none focus:border-indigo-400 transition-colors resize-none [&:-webkit-autofill]:!bg-white/10 [&:-webkit-autofill]:!shadow-[0_0_0_1000px_rgba(255,255,255,0.1)_inset] [&:-webkit-autofill]:!text-white/80"
                          />
                        </div>
                        
                        {/* Send Button with Icon */}
                        <motion.button
                          type="submit"
                          disabled={isSubmitting || submitStatus === 'success' || submitStatus === 'error'}
                          className="w-full px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-secondary rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {isSubmitting ? (
                            <>
                              <span>Sending...</span>
                              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                            </>
                          ) : submitStatus === 'success' ? (
                            <>
                              <span>Message sent successfully!</span>
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </>
                          ) : submitStatus === 'error' ? (
                            <>
                              <span>Failed to send message. Please try again.</span>
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </motion.button>


                      </form>
                    </motion.div>

                     {/* Right Side - Single Column Layout (40% width) */}
                     <motion.div
                       className="w-2/5 flex flex-col"
                       initial={{ opacity: 0, x: 30 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ duration: 0.8, delay: 1.4 }}
                     >
                       {/* Connect with Me Text */}
                       <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.6, delay: 1.6 }}
                         className="text-center mb-6"
                       >
                         <h2 className="text-3xl font-primary text-white tracking-tight">
                           CONNECT WITH ME
                         </h2>
                       </motion.div>

                       {/* Social Icons */}
                       <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.6, delay: 1.8 }}
                         className="flex justify-center gap-6 mb-6"
                       >
                         <motion.a
                           href="https://www.linkedin.com/in/pujan-desai"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="w-12 h-12 flex items-center justify-center hover:scale-110 transition-all duration-300"
                           whileHover={{ scale: 1.1 }}
                           whileTap={{ scale: 0.95 }}
                         >
                           <img 
                             src="/assets/linkedin.png" 
                             alt="LinkedIn" 
                             className="w-10 h-10 filter invert brightness-0"
                           />
                         </motion.a>

                         <motion.a
                           href="https://www.github.com/pujdesai"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="w-12 h-12 flex items-center justify-center hover:scale-110 transition-all duration-300"
                           whileHover={{ scale: 1.1 }}
                           whileTap={{ scale: 0.95 }}
                         >
                           <img 
                             src="/assets/github.png" 
                             alt="GitHub" 
                             className="w-10 h-10 filter invert brightness-0"
                           />
                         </motion.a>
                       </motion.div>


                       {/* Info Boxes - Evenly Spaced */}
                       <div className="flex flex-col items-center justify-end space-y-6 flex-1">
                        {/* Glassmorphic Divider */}
                       <motion.div
                         initial={{ opacity: 0, scaleX: 0 }}
                         animate={{ opacity: 1, scaleX: 1 }}
                         transition={{ duration: 0.8, delay: 1.5 }}
                         className="w-full h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent mb-8"
                       />
                         {/* Location Pin Icon */}
                         <motion.a
                           href="https://www.google.com/maps/place/Boston,+MA"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex items-center justify-center gap-4 p-3 bg-indigo-400/20 rounded-lg border border-indigo-400/30 w-72 cursor-pointer"
                           whileHover={{ scale: 1.05 }}
                           transition={{ duration: 0.2 }}
                         >
                           <svg className="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                           </svg>
                           <span className="text-indigo-300 font-secondary text-base">Boston, MA</span>
                         </motion.a>

                         {/* Education Icon */}
                         <motion.a
                           href="https://www.northeastern.edu/"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex items-center justify-center gap-4 p-3 bg-indigo-400/20 rounded-lg border border-indigo-400/30 w-72 cursor-pointer"
                           whileHover={{ scale: 1.05 }}
                           transition={{ duration: 0.2 }}
                         >
                           <svg className="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                           </svg>
                           <span className="text-indigo-300 font-secondary text-base">Northeastern University</span>
                         </motion.a>

                         {/* Download Icon */}
                         <motion.button
                           onClick={() => {
                             const link = document.createElement('a');
                             link.href = '/assets/Pujan_Desai_Resume.pdf';
                             link.download = 'Pujan_Desai_Resume.pdf';
                             document.body.appendChild(link);
                             link.click();
                             document.body.removeChild(link);
                           }}
                           className="flex items-center justify-center gap-4 p-3 bg-indigo-400/20 rounded-lg border border-indigo-400/30 w-72 cursor-pointer"
                           whileHover={{ scale: 1.05 }}
                           transition={{ duration: 0.2 }}
                         >
                           <svg className="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                           </svg>
                           <span className="text-indigo-300 font-secondary text-base">Download Resume</span>
                         </motion.button>
                       </div>
                     </motion.div>
                  </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;