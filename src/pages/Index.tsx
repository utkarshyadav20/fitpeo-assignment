
import React, { useState } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import ProgressBar from '../components/ProgressBar';
import HeroSection from '../components/HeroSection';
import BreakdownSection from '../components/BreakdownSection';
import ActsOfEmergencySection from '../components/ActsOfEmergencySection';
import DonationSection from '../components/DonationSection';
import NewsletterSection from '../components/NewsletterSection';
import SignatureSection from '../components/SignatureSection';
import FloatingButtons from '../components/FloatingButtons';
import MenuModal from '../components/MenuModal';
import DeclareModal from '../components/DeclareModal';
import Footer from '../components/Footer';
import DeclarationSection from '@/components/DeclarationSection';
import LatestSection from '@/components/Latest';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDeclareOpen, setIsDeclareOpen] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-custom-orange-500 text-white">
      <ProgressBar />

      <main className="relative z-[1] bg-black text-white
                   rounded-b-[var(--rounded-main-value)]
                   -mb-[var(--radius-main-negative-margin)]
                   pb-12 md:pb-16 lg:pb-20">
        <HeroSection />
        <BreakdownSection />
        <DonationSection />
        <ActsOfEmergencySection />
        <DeclarationSection/>
        <LatestSection />
        <NewsletterSection />
        <SignatureSection />
           <FloatingButtons
        onMenuClick={() => setIsMenuOpen(!isMenuOpen)}
        onDeclareClick={() => setIsDeclareOpen(true)}
        isMenuOpen={isMenuOpen}
        
      />
      
      </main>
 
      <Footer />

     

      <MenuModal 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
      
      <DeclareModal 
        isOpen={isDeclareOpen} 
        onClose={() => setIsDeclareOpen(false)} 
      />
    </div>
  );
};

export default Index;
