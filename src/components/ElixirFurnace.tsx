import React, { useState } from 'react';
import { Flame, Brain, LineChart, Database, Cpu } from 'lucide-react';

const ElixirFurnace: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [elixirs, setElixirs] = useState<string[]>([]);

  const elixirTypes = [
    { name: "Prediction", description: "Forecasting Elixir", icon: <LineChart size={20} className="text-blue-500" /> },
    { name: "AI", description: "Intelligence Elixir", icon: <Brain size={20} className="text-purple-500" /> },
    { name: "Data", description: "Knowledge Elixir", icon: <Database size={20} className="text-green-500" /> },
    { name: "Model", description: "Algorithm Elixir", icon: <Cpu size={20} className="text-red-500" /> },
  ];

  const activateFurnace = () => {
    if (!isActive) {
      setIsActive(true);
      setTimeout(() => {
        const randomElixir = elixirTypes[Math.floor(Math.random() * elixirTypes.length)];
        setElixirs(prev => [...prev, randomElixir.name]);
        setIsActive(false);
      }, 3000);
    }
  };

  const getElixirIcon = (name: string) => {
    return elixirTypes.find(type => type.name === name)?.icon;
  };

  return (
    <div className="max-w-md mx-auto text-center">
      <div 
        className={`relative cursor-pointer transition-transform duration-300 ${
          isActive ? 'animate-pulse' : 'hover:scale-105'
        }`}
        onClick={activateFurnace}
      >
        {/* Furnace Base */}
        <div className="w-32 h-32 mx-auto bg-gray-800 rounded-full relative overflow-hidden">
          {/* Flames */}
          <div className={`absolute inset-0 flex items-center justify-center ${
            isActive ? 'animate-bounce text-red-500' : 'text-gray-600'
          }`}>
            <Flame size={48} />
          </div>
          
          {/* Chinese Character */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-chinese text-white z-10">炉</span>
          </div>
        </div>
        
        {/* Furnace Label */}
        <h3 className="mt-4 text-2xl font-chinese">Elixir Furnace</h3>
        <p className="text-sm text-gray-600">Click to create elixirs</p>
      </div>

      {/* Elixir Display */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        {elixirs.map((elixir, index) => (
          <div
            key={index}
            className="flex items-center justify-center space-x-2 p-3 bg-white/80 rounded-lg shadow-sm"
            style={{
              animation: 'fadeIn 0.5s ease-out'
            }}
          >
            {getElixirIcon(elixir)}
            <span className="font-chinese">{elixir} Elixir</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElixirFurnace;