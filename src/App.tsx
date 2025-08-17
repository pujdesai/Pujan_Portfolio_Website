import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Loading from "./components/Loading";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigation />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [loadingDone, setLoadingDone] = useState(false);

  // Check if this is a fresh page load (not a navigation within the app)
  useEffect(() => {
    const hasVisitedThisSession = sessionStorage.getItem('hasVisitedThisSession');
    
    if (hasVisitedThisSession) {
      // If user has already seen loading screen in this session, skip it
      setLoadingDone(true);
    } else {
      // First time in this session, show loading screen
      sessionStorage.setItem('hasVisitedThisSession', 'true');
    }
  }, []);

  return (
    <Router>
      <div className="w-screen h-screen overflow-hidden bg-black">
        <CustomCursor />
        {!loadingDone ? (
          <Loading onComplete={() => setLoadingDone(true)} />
        ) : (
          <AnimatedRoutes />
        )}
      </div>
    </Router>
  );
};

export default App;
