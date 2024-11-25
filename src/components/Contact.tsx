import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 ink-wash-bg">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Contact</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-12">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
          
          <div className="flex justify-center space-x-8">
            {[
              {
                icon: <Mail className="w-6 h-6" />,
                label: "Email",
                href: "mailto:ltalpha51759@gmail.com"
              },
              {
                icon: <Github className="w-6 h-6" />,
                label: "GitHub",
                href: "https://github.com/Eddylin03"
              },
              {
                icon: <Linkedin className="w-6 h-6" />,
                label: "LinkedIn",
                href: "https://linkedin.com/in/yutai-lin-a8b888298"
              }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex flex-col items-center space-y-2 text-ink hover:text-ink-dark transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
                <span className="text-sm">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;