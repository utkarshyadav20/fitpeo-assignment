import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [showD, setShowD] = useState(false);
  const [showExcl, setShowExcl] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowD(true), 300);
    setTimeout(() => setShowExcl(true), 1000);
    setTimeout(() => {
      onComplete();
    }, 2000); 
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-right  bg-black pointer-events-none">
      <h1 className="text-9xl font-bebas text-white flex space-x-4">
        <span className={`transition-opacity duration-1000 ${showD ? 'opacity-100' : 'opacity-0'}`}>D</span>
        <span className={`transition-opacity duration-1000 ${showExcl ? 'opacity-100' : 'opacity-0'}`}>!</span>
      </h1>
    </div>
  );
};

export default LoadingScreen;
