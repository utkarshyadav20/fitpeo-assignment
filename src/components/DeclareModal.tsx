
import React, { useState } from 'react';
import { X } from 'lucide-react';

interface DeclareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeclareModal: React.FC<DeclareModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    organization: '',
    email: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Declaration submitted:', formData);
    alert('Thank you for declaring emergency! Your signature has been recorded.');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 z-50 blur-overlay">
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="bg-black border border-gray-800 p-8 max-w-lg w-full animate-scale-in">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">Declare Emergency</h2>
            <button 
              onClick={onClose}
              className="text-white hover:text-orange-500 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Role/Title *
              </label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Organization
              </label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 transition-colors duration-300"
            >
              DECLARE EMERGENCY
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeclareModal;
