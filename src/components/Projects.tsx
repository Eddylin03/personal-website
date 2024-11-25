import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Gold Price Prediction",
      description: "LSTM-based forecasting model achieving 96.5% accuracy in predicting gold price movements. Focused on time series analysis, data preprocessing, and performance visualization. Practical applications include stock trading, risk management, and economic forecasting.",
      tags: ["Python", "TensorFlow", "LSTM", "Time Series"],
      github: "https://github.com/Eddylin03/Gold-Price-Prediction",
    },
    {
      title: "CS540: AI Projects",
      description: "Comprehensive AI coursework including facial recognition using PCA, A* Search for N-tile puzzles, and Neural Network implementation with PyTorch. Explored applications in machine learning, NLP, and robotics.",
      tags: ["Python", "PyTorch", "Machine Learning", "AI"],
      github: "https://github.com/Eddylin03/CS540",
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-ink-light p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-medium mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-sm bg-white px-3 py-1 rounded-full text-gray-600">
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={project.github} 
                className="inline-flex items-center text-ink hover:text-ink-dark transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;