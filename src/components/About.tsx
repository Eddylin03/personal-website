import React from 'react';
import { BookOpen, Brain, Database } from 'lucide-react';
import Divination from './Divination';

const About = () => {
  return (
    <section id="about" className="py-24 ink-wash-bg">
      <div className="container mx-auto">
        <h2 className="section-title text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed mb-12 text-center">
            Dedicated to bridging the gap between theoretical economics and practical data science applications
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-6 h-6" />,
                title: "Education",
                description: "Advanced studies in Data Science and Economics, focusing on quantitative analysis"
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "Research",
                description: "Exploring machine learning applications in economic forecasting"
              },
              {
                icon: <Database className="w-6 h-6" />,
                title: "Skills",
                description: "Python, R, Machine Learning, Statistical Analysis, Economic Modeling"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm p-6 rounded-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-ink">{item.icon}</div>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <Divination />
        </div>
      </div>
    </section>
  );
};

export default About;