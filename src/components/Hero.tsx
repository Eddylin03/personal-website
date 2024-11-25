import React from 'react';
import { GraduationCap, Code, LineChart } from 'lucide-react';
import ElixirFurnace from './ElixirFurnace';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center ink-wash-bg pt-24">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="section-title text-ink-dark">
            Yutai Lin
          </h1>
          <p className="subtitle mb-8">
            Data Science & Economics Student
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Exploring the intersection of data science, artificial intelligence, and economic analysis
          </p>
          
          {/* Added Elixir Furnace */}
          <div className="mb-20">
            <ElixirFurnace />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "Academic Excellence",
                description: "Pursuing advanced studies in Data Science and Economics"
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Technical Expertise",
                description: "Proficient in machine learning and statistical analysis"
              },
              {
                icon: <LineChart className="w-8 h-8" />,
                title: "Research Focus",
                description: "Specializing in predictive modeling and economic forecasting"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex flex-col items-center space-y-4"
              >
                <div className="text-ink">{item.icon}</div>
                <h3 className="text-xl font-medium text-ink-dark">{item.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;