
import React from 'react';
import { X, Home, Info, FileText, Mail, Globe } from 'lucide-react';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const menuItems = [
    { name: 'Home', icon: Home },
    { name: 'About', icon: Info },
    { name: 'Latest', icon: FileText },
    { name: 'Contact', icon: Mail },
    { name: 'Choose Global Chapter', icon: Globe }
  ];

  return (
    <div className="fixed inset-0 z-50 blur-overlay">
      <div className="min-h-screen flex items-center justify-end p-8">
        <div className="bg-white text-black p-0 w-80 animate-scale-in">
          <div className="flex justify-between items-center p-4 border-b border-gray-300">
            <h2 className="text-xl font-medium">Menu</h2>
            <button 
              onClick={onClose}
              className="text-black hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="p-0">
            {menuItems.map((item, index) => (
              <a 
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                className="flex items-center space-x-3 px-4 py-4 text-black hover:bg-gray-100 text-lg font-medium transition-colors border-b border-gray-200 last:border-b-0"
                onClick={onClose}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon size={20} />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          <div className="p-4 border-t border-gray-300">
            <button className="w-full bg-black text-white py-3 px-4 font-medium hover:bg-gray-800 transition-colors">
              Declare Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
