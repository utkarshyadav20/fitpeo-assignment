
import React, { useRef, useEffect, useState } from 'react';

const ActsOfEmergencySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const acts = [
    {
      number: "1",
      title: "Sound the Alarm",
      description: "Acknowledge and raise awareness of the climate and ecological crisis - including its roots in systems of oppression - in our organisations and our practice."
    },
    {
      number: "2", 
      title: "Start the Journey",
      description: "Invest in educating ourselves and our teams on methods of sustainable and regenerative design, and show leadership by making measurable change to our practice. The Design Declares Toolkit is a great place to start."
    },
    {
      number: "3",
      title: "Bring Clients with Us", 
      description: "Meaningfully consider environmental and social impacts as part of every pitch, proposal and production process. Not every design output will be carbon neutral or fully climate friendly, but every project is an opportunity to make real progress."
    },
    {
      number: "4",
      title: "Measure What We Make",
      description: "Measure the environmental and social impact of our businesses and design projects, and hold ourselves to account for what we find out."
    },
    {
      number: "5",
      title: "Redefine 'Good'",
      description: "Encourage, recognise and reward sustainable and regenerative design excellence in our industry through media and awards."
    },
    {
      number: "6",
      title: "Educate, Accelerate",
      description: "Build and foster intra- and cross-discipline knowledge networks to share tools, resources and best practice to accelerate progress in our industry."
    },
    {
      number: "7",
      title: "Design for Justice",
      description: "Create with and for the people who are disproportionately affected both by climate change and by the transition to a lower-carbon world."
    },
    {
      number: "8",
      title: "Amplify Voices for Change",
      description: "Enable systemic change by working alongside policymakers, campaigners, scientists, activists and others to strengthen local and national movements for change."
    }
  ];

  return (
    <section ref={sectionRef} className="min-h-screen flex items-start justify-between px-6 py-20 bg-black">
      <div className="w-full md:w-1/2 lg:w-2/5 md:sticky md:top-24 self-start md:pr-8 lg:pr-12 order-1 mb-12 md:mb-0 text-center md:text-left">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl font-bold text-white">
            8 Acts of Emergency
          </h2>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 lg:w-3/5 md:pl-8 lg:pl-12 order-2">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
            What does it take to Declare? It's accepting we are in an emergency of climate and nature, and a commitment to do something about it. Here are eight places to start:
          </h1>
        </div>

        <div className="bg-gray-200 rounded-lg overflow-hidden">
          {acts.map((act, index) => (
            <div 
              key={act.number}
              className={`border-b border-gray-300 last:border-b-0 transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="p-6 flex items-start space-x-6">
                <div className="bg-black text-white text-2xl font-bold w-12 h-12 flex items-center justify-center flex-shrink-0">
                  {act.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-3">{act.title}</h3>
                  <p className="text-black leading-relaxed">{act.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActsOfEmergencySection;
