import React, { useRef, useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const BreakdownSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    "The Role of Design": true,
    "Time for Change": false,
    "Act with Urgency": false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 } 
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, []);

  const toggleSection = (title: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const initialSections = [
    { title: "The Role of Design", content: "Detailed content about the role of design in addressing climate and ecological emergencies..." },
    { title: "Time for Change", content: "Information about why now is the critical time for change and action..." },
    { title: "Act with Urgency", content: "Calls to action and the importance of urgent responses from the design community..." }
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col md:flex-row items-start md:justify-between
                 px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24 bg-black text-white relative"
    >
      <div className="w-full md:w-1/2 lg:w-2/5 md:sticky md:top-24 self-start md:pr-8 lg:pr-12 order-1 mb-12 md:mb-0 text-center md:text-left">
        <div
          className={`transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl font-bold text-white">
            This is Breakdown
          </h2>
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-3/5 md:pl-8 lg:pl-12 order-2">
        <div
          className={`transition-all duration-1000 ease-out transform delay-[200ms] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl sm:text-3xl md:text-5xl font-normal text-white mb-10 sm:mb-12 leading-relaxed md:leading-relaxed">
            The science is settled. We are in an emergency of climate and nature. The world is past breaking point; the breakdown has begun...
          </h1>
        </div>

        <div className="space-y-6 md:space-y-8">
          {initialSections.map((section, index) => (
            <div
              key={section.title}
              className={`border-b border-gray-600 pb-4 md:pb-6 transition-all duration-700 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div
                className="flex items-center justify-between cursor-pointer py-2 md:py-3"
                onClick={() => toggleSection(section.title)}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium">{section.title}</h3>
                <ChevronDown
                  className={`transition-transform duration-300 ease-in-out ${
                    expandedSections[section.title] ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </div>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  expandedSections[section.title] ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="pt-3 md:pt-4 text-gray-300 text-base md:text-lg leading-relaxed">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 sm:mt-16 md:mt-20 lg:mt-24 transition-all duration-1000 ease-out transform delay-[${300 + initialSections.length * 150 + 200}ms] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button
            className="bg-white text-black px-8 py-3 rounded-full font-medium
                       hover:bg-custom-orange hover:bg-opacity-85 hover:text-white transition-colors duration-300 ease-in-out"
          >
            View our D! Intro Video
          </button>
        </div>
      </div>
    </section>
  );
};

export default BreakdownSection;