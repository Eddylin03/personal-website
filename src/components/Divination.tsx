import React, { useState } from 'react';

const Divination: React.FC = () => {
  const [trigram, setTrigram] = useState<boolean[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const trigramMeanings = {
    '111': { name: '乾 (Qián)', meaning: 'Heaven - Creative Power' },
    '000': { name: '坤 (Kūn)', meaning: 'Earth - Receptive Power' },
    '100': { name: '震 (Zhèn)', meaning: 'Thunder - Arousing' },
    '010': { name: '坎 (Kǎn)', meaning: 'Water - Dangerous' },
    '001': { name: '艮 (Gèn)', meaning: 'Mountain - Stillness' },
    '110': { name: '离 (Lí)', meaning: 'Fire - Clinging' },
    '011': { name: '兑 (Duì)', meaning: 'Lake - Joyous' },
    '101': { name: '巽 (Xùn)', meaning: 'Wind - Gentle' },
  };

  const castDivination = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTrigram([]);
    
    // Generate three lines with animation
    let currentLines: boolean[] = [];
    const generateLine = (index: number) => {
      setTimeout(() => {
        const newLine = Math.random() < 0.5;
        currentLines.push(newLine);
        setTrigram([...currentLines]);
        
        if (index === 2) {
          setIsAnimating(false);
        }
      }, index * 1000);
    };

    [0, 1, 2].forEach(generateLine);
  };

  const getTrigramKey = () => {
    if (trigram.length < 3) return '';
    return trigram.map(b => b ? '1' : '0').join('');
  };

  const getTrigramMeaning = () => {
    const key = getTrigramKey();
    return trigramMeanings[key as keyof typeof trigramMeanings];
  };

  return (
    <div className="max-w-md mx-auto text-center mt-12">
      <div 
        onClick={castDivination}
        className={`cursor-pointer transition-transform hover:scale-105 ${isAnimating ? 'animate-pulse' : ''}`}
      >
        <div className="w-32 h-32 mx-auto bg-gray-800 rounded-full relative overflow-hidden flex items-center justify-center">
          <span className="text-4xl font-chinese text-white">卦</span>
        </div>
        <h3 className="mt-4 text-2xl font-chinese">Divine Wisdom</h3>
        <p className="text-sm text-gray-600">Click to cast trigram</p>
      </div>

      <div className="mt-8 space-y-4">
        {trigram.map((isYang, i) => (
          <div 
            key={i}
            className="flex justify-center"
            style={{
              animation: 'fadeIn 0.5s ease-out'
            }}
          >
            {/* Traditional I Ching line representation */}
            {isYang ? (
              <div className="w-24 h-2 bg-gray-800 rounded" /> // Solid line for Yang
            ) : (
              <div className="w-24 h-2 flex justify-between">
                <div className="w-10 h-2 bg-gray-800 rounded" />
                <div className="w-10 h-2 bg-gray-800 rounded" />
              </div> // Broken line for Yin
            )}
          </div>
        ))}
      </div>

      {trigram.length === 3 && getTrigramMeaning() && (
        <div className="mt-8 p-4 bg-white/80 rounded-lg shadow-sm">
          <h4 className="text-xl font-chinese mb-2">{getTrigramMeaning()?.name}</h4>
          <p className="text-gray-600">{getTrigramMeaning()?.meaning}</p>
        </div>
      )}
    </div>
  );
};

export default Divination;