import React from "react";
import Section from "./Section";

const About: React.FC = () => {
  return (
    <Section>
      <div className="relative z-10 h-full flex items-center justify-center">
        <h1 className="text-6xl font-primary text-white">ABOUT</h1>
      </div>
    </Section>
  );
};

export default About;