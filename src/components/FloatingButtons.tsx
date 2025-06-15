
import React from 'react';
import { Plus, X } from 'lucide-react';

interface FloatingButtonsProps {
  onMenuClick: () => void;
  onDeclareClick: () => void;
  isMenuOpen: boolean;
}

const FloatingButtons: React.FC<FloatingButtonsProps> = ({ 
  onMenuClick, 
  onDeclareClick, 
  isMenuOpen 
}) => {
  return (
    <div className="sticky px-8 bottom-8 right-8 z-50 flex justify-end bg-transparent">
         <div className=" bottom-8 right-8 z-55 flex flex-col max-w-72 ">
      <button
        onClick={onMenuClick}
        className="bg-white text-black px-6 py-3 font-medium text-lg border border-gray-300 hover:bg-gray-100 transition-colors flex items-center justify-between min-w-[140px]"
      >
        <span>Menu</span>
        {isMenuOpen ? <X size={20} /> : <Plus size={20} />}
      </button>
      
      <button
        onClick={onDeclareClick}
        className="bg-white text-black px-6 py-3 font-medium text-lg border border-gray-300 hover:bg-gray-100 transition-colors"
      >
        Declare Now
      </button>
    </div>
    </div>
   
  );
};

export default FloatingButtons;
