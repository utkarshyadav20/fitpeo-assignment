import React, { useEffect, useState } from 'react';

interface AnimatedTextLineProps {
  text: string;
  baseDelay: number;
  isVisible: boolean;
  colorClass: string;
  additionalClasses?: string;
}

const AnimatedTextLine: React.FC<AnimatedTextLineProps> = ({
  text,
  baseDelay,
  isVisible,
  colorClass,
  additionalClasses = '',
}) => {
  return (
    <div className="overflow-hidden">
     <h1
  className={`
    font-bebas
  text-[clamp(5rem,16vw,14rem)]
    leading-[0.85]
    tracking-[-0.02em]
    uppercase
    ${colorClass}
    mb-2
    transform transition-all ease-out duration-700
    ${additionalClasses}
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}
  `}
  style={{ transitionDelay: `${baseDelay}ms` }}
>
  {text}
</h1>

    </div>
  );
};

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const displayTextColor = "text-[#E7E7E7]"; 

  const headingLines = [
    { text: "DESIGN",   color: displayTextColor,      delay: 0 },
    { text: "DECLARES", color: displayTextColor,      delay: 200 },
    { text: "UK",       color: "text-custom-orange text-opacity-85",     delay: 400 },
  ];

  return (
  <section className="min-h-screen bg-black flex flex-col md:flex-row items-start justify-between px-5 md:px-5 pt-5 md:pt-5 relative">
  <div className="md:w-2/3 lg:w-1/2">
    {headingLines.map((line, index) => (
      <AnimatedTextLine
        key={index}
        text={line.text}
        baseDelay={line.delay}
        isVisible={isVisible}
        colorClass={line.color}
      />
    ))}
  </div>

  <div
    className={`md:w-1/3 max-w-md text-left transform transition-all ease-out duration-1000 delay-[700ms] ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    } mt-6 md:mt-0`}
  >
    <p className="text-white text-lg md:text-xl leading-relaxed">
      Design Declares is a growing group of designers, design studios, agencies and institutions here to declare a climate and ecological emergency. As part of the global declaration movement, we commit to harnessing the tools of our industry to reimagine, rebuild and heal our world.
    </p>
  </div>
</section>

  );
};

export default HeroSection;