import React, { useRef, useEffect, useState } from 'react';
import CountUp from 'react-countup';

interface Supporter {
  name: string;
  link: string;
}

interface CountryGroup {
  countryName: string;
  supporters: Supporter[];
}

const SignatoriesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [startCount, setStartCount] = useState(false);
  const [startCount2, setStartCount2] = useState(false);

  const ukSignatoriesCount = 512;
  const globalSupportersCount = 661; 

  const ukSignatories: Supporter[] = [
    { name: "21–87", link: "https://21-87.co.uk/" },
    { name: "216 Signs", link: "https://216signs.net/" },
    { name: "31% Wool", link: "https://31percentwool.com/" },
    { name: "400", link: "https://400.co.uk/" },
    { name: "A–Side.", link: "https://a-side.studio/" },
    { name: "Aalia Ahamed", link: "https://www.linkedin.com/in/aaliaahamed/" },
    { name: "Abbie Williams", link: "https://www.abbiewilliamsdesigns.com/" },
    { name: "ACRE – A Creative Endeavour Ltd", link: "https://acre.studio/" },
    { name: "Active Matter", link: "https://activematter.co/" },
    { name: "ACX", link: "https://arcadia.cx/" },
     { name: "21–87", link: "https://21-87.co.uk/" },
    { name: "216 Signs", link: "https://216signs.net/" },
    { name: "31% Wool", link: "https://31percentwool.com/" },
    { name: "400", link: "https://400.co.uk/" },
    { name: "A–Side.", link: "https://a-side.studio/" },
    { name: "Aalia Ahamed", link: "https://www.linkedin.com/in/aaliaahamed/" },
    { name: "Abbie Williams", link: "https://www.abbiewilliamsdesigns.com/" },
    { name: "ACRE – A Creative Endeavour Ltd", link: "https://acre.studio/" },
    { name: "Active Matter", link: "https://activematter.co/" },
    { name: "ACX", link: "https://arcadia.cx/" },
     { name: "21–87", link: "https://21-87.co.uk/" },
    { name: "216 Signs", link: "https://216signs.net/" },
    { name: "31% Wool", link: "https://31percentwool.com/" },
    { name: "400", link: "https://400.co.uk/" },
    { name: "A–Side.", link: "https://a-side.studio/" },
    { name: "Aalia Ahamed", link: "https://www.linkedin.com/in/aaliaahamed/" },
    { name: "Abbie Williams", link: "https://www.abbiewilliamsdesigns.com/" },
    { name: "ACRE – A Creative Endeavour Ltd", link: "https://acre.studio/" },
    { name: "Active Matter", link: "https://activematter.co/" },
    { name: "ACX", link: "https://arcadia.cx/" },
     { name: "21–87", link: "https://21-87.co.uk/" },
    { name: "216 Signs", link: "https://216signs.net/" },
    { name: "31% Wool", link: "https://31percentwool.com/" },
    { name: "400", link: "https://400.co.uk/" },
    { name: "A–Side.", link: "https://a-side.studio/" },
    { name: "Aalia Ahamed", link: "https://www.linkedin.com/in/aaliaahamed/" },
    { name: "Abbie Williams", link: "https://www.abbiewilliamsdesigns.com/" },
    { name: "ACRE – A Creative Endeavour Ltd", link: "https://acre.studio/" },
    { name: "Active Matter", link: "https://activematter.co/" },
    { name: "ACX", link: "https://arcadia.cx/" },
     { name: "21–87", link: "https://21-87.co.uk/" },
    { name: "216 Signs", link: "https://216signs.net/" },
    { name: "31% Wool", link: "https://31percentwool.com/" },
    { name: "400", link: "https://400.co.uk/" },
    { name: "A–Side.", link: "https://a-side.studio/" },
    { name: "Aalia Ahamed", link: "https://www.linkedin.com/in/aaliaahamed/" },
    { name: "Abbie Williams", link: "https://www.abbiewilliamsdesigns.com/" },
    { name: "ACRE – A Creative Endeavour Ltd", link: "https://acre.studio/" },
    { name: "Active Matter", link: "https://activematter.co/" },
    { name: "ACX", link: "https://arcadia.cx/" },
     { name: "21–87", link: "https://21-87.co.uk/" },
    { name: "216 Signs", link: "https://216signs.net/" },
    { name: "31% Wool", link: "https://31percentwool.com/" },
    { name: "400", link: "https://400.co.uk/" },
    { name: "A–Side.", link: "https://a-side.studio/" },
    { name: "Aalia Ahamed", link: "https://www.linkedin.com/in/aaliaahamed/" },
    { name: "Abbie Williams", link: "https://www.abbiewilliamsdesigns.com/" },
    { name: "ACRE – A Creative Endeavour Ltd", link: "https://acre.studio/" },
    { name: "Active Matter", link: "https://activematter.co/" },
    { name: "ACX", link: "https://arcadia.cx/" },
     { name: "21–87", link: "https://21-87.co.uk/" },
    { name: "216 Signs", link: "https://216signs.net/" },
    { name: "31% Wool", link: "https://31percentwool.com/" },
    { name: "400", link: "https://400.co.uk/" },
    { name: "A–Side.", link: "https://a-side.studio/" },
    { name: "Aalia Ahamed", link: "https://www.linkedin.com/in/aaliaahamed/" },
    { name: "Abbie Williams", link: "https://www.abbiewilliamsdesigns.com/" },
    { name: "ACRE – A Creative Endeavour Ltd", link: "https://acre.studio/" },
    { name: "Active Matter", link: "https://activematter.co/" },
    { name: "ACX", link: "https://arcadia.cx/" },
     { name: "21–87", link: "https://21-87.co.uk/" },
    { name: "216 Signs", link: "https://216signs.net/" },
    { name: "31% Wool", link: "https://31percentwool.com/" },
    { name: "400", link: "https://400.co.uk/" },
    { name: "A–Side.", link: "https://a-side.studio/" },
    { name: "Aalia Ahamed", link: "https://www.linkedin.com/in/aaliaahamed/" },
    { name: "Abbie Williams", link: "https://www.abbiewilliamsdesigns.com/" },
    { name: "ACRE – A Creative Endeavour Ltd", link: "https://acre.studio/" },
    { name: "Active Matter", link: "https://activematter.co/" },
    { name: "ACX", link: "https://arcadia.cx/" },
     { name: "21–87", link: "https://21-87.co.uk/" },
    { name: "216 Signs", link: "https://216signs.net/" },
    { name: "31% Wool", link: "https://31percentwool.com/" },
    { name: "400", link: "https://400.co.uk/" },
    { name: "A–Side.", link: "https://a-side.studio/" },
    { name: "Aalia Ahamed", link: "https://www.linkedin.com/in/aaliaahamed/" },
    { name: "Abbie Williams", link: "https://www.abbiewilliamsdesigns.com/" },
    { name: "ACRE – A Creative Endeavour Ltd", link: "https://acre.studio/" },
    { name: "Active Matter", link: "https://activematter.co/" },
    { name: "ACX", link: "https://arcadia.cx/" },
     { name: "21–87", link: "https://21-87.co.uk/" },
    { name: "216 Signs", link: "https://216signs.net/" },
    { name: "31% Wool", link: "https://31percentwool.com/" },
    { name: "400", link: "https://400.co.uk/" },
    { name: "A–Side.", link: "https://a-side.studio/" },
    { name: "Aalia Ahamed", link: "https://www.linkedin.com/in/aaliaahamed/" },
    { name: "Abbie Williams", link: "https://www.abbiewilliamsdesigns.com/" },
    { name: "ACRE – A Creative Endeavour Ltd", link: "https://acre.studio/" },
    { name: "Active Matter", link: "https://activematter.co/" },
    { name: "ACX", link: "https://arcadia.cx/" },
     { name: "21–87", link: "https://21-87.co.uk/" },
    { name: "216 Signs", link: "https://216signs.net/" },
    { name: "31% Wool", link: "https://31percentwool.com/" },
    { name: "400", link: "https://400.co.uk/" },
    { name: "A–Side.", link: "https://a-side.studio/" },
    { name: "Aalia Ahamed", link: "https://www.linkedin.com/in/aaliaahamed/" },
    { name: "Abbie Williams", link: "https://www.abbiewilliamsdesigns.com/" },
    { name: "ACRE – A Creative Endeavour Ltd", link: "https://acre.studio/" },
    { name: "Active Matter", link: "https://activematter.co/" },
    { name: "ACX", link: "https://arcadia.cx/" },
     { name: "21–87", link: "https://21-87.co.uk/" },
    { name: "216 Signs", link: "https://216signs.net/" },
    { name: "31% Wool", link: "https://31percentwool.com/" },
    { name: "400", link: "https://400.co.uk/" },
    { name: "A–Side.", link: "https://a-side.studio/" },
    { name: "Aalia Ahamed", link: "https://www.linkedin.com/in/aaliaahamed/" },
    { name: "Abbie Williams", link: "https://www.abbiewilliamsdesigns.com/" },
    { name: "ACRE – A Creative Endeavour Ltd", link: "https://acre.studio/" },
    { name: "Active Matter", link: "https://activematter.co/" },
    { name: "ACX", link: "https://arcadia.cx/" },
     { name: "21–87", link: "https://21-87.co.uk/" },
    { name: "216 Signs", link: "https://216signs.net/" },
    { name: "31% Wool", link: "https://31percentwool.com/" },
    { name: "400", link: "https://400.co.uk/" },
    { name: "A–Side.", link: "https://a-side.studio/" },
    { name: "Aalia Ahamed", link: "https://www.linkedin.com/in/aaliaahamed/" },
    { name: "Abbie Williams", link: "https://www.abbiewilliamsdesigns.com/" },
    { name: "ACRE – A Creative Endeavour Ltd", link: "https://acre.studio/" },
    { name: "Active Matter", link: "https://activematter.co/" },
    { name: "ACX", link: "https://arcadia.cx/" },
     { name: "21–87", link: "https://21-87.co.uk/" },
    { name: "216 Signs", link: "https://216signs.net/" },
    { name: "31% Wool", link: "https://31percentwool.com/" },
    { name: "400", link: "https://400.co.uk/" },
    { name: "A–Side.", link: "https://a-side.studio/" },
    { name: "Aalia Ahamed", link: "https://www.linkedin.com/in/aaliaahamed/" },
    { name: "Abbie Williams", link: "https://www.abbiewilliamsdesigns.com/" },
    { name: "ACRE – A Creative Endeavour Ltd", link: "https://acre.studio/" },
    { name: "Active Matter", link: "https://activematter.co/" },
    { name: "ACX", link: "https://arcadia.cx/" },
     { name: "21–87", link: "https://21-87.co.uk/" },
    { name: "216 Signs", link: "https://216signs.net/" },
    { name: "31% Wool", link: "https://31percentwool.com/" },
    { name: "400", link: "https://400.co.uk/" },
    { name: "A–Side.", link: "https://a-side.studio/" },
    { name: "Aalia Ahamed", link: "https://www.linkedin.com/in/aaliaahamed/" },
    { name: "Abbie Williams", link: "https://www.abbiewilliamsdesigns.com/" },
    { name: "ACRE – A Creative Endeavour Ltd", link: "https://acre.studio/" },
    { name: "Active Matter", link: "https://activematter.co/" },
    { name: "ACX", link: "https://arcadia.cx/" },
     { name: "21–87", link: "https://21-87.co.uk/" },
    { name: "216 Signs", link: "https://216signs.net/" },
    { name: "31% Wool", link: "https://31percentwool.com/" },
    { name: "400", link: "https://400.co.uk/" },
    { name: "A–Side.", link: "https://a-side.studio/" },
    { name: "Aalia Ahamed", link: "https://www.linkedin.com/in/aaliaahamed/" },
    { name: "Abbie Williams", link: "https://www.abbiewilliamsdesigns.com/" },
    { name: "ACRE – A Creative Endeavour Ltd", link: "https://acre.studio/" },
    { name: "Active Matter", link: "https://activematter.co/" },
    { name: "ACX", link: "https://arcadia.cx/" },
     { name: "21–87", link: "https://21-87.co.uk/" },
    { name: "216 Signs", link: "https://216signs.net/" },
    { name: "31% Wool", link: "https://31percentwool.com/" },
    { name: "400", link: "https://400.co.uk/" },
    { name: "A–Side.", link: "https://a-side.studio/" },
    { name: "Aalia Ahamed", link: "https://www.linkedin.com/in/aaliaahamed/" },
    { name: "Abbie Williams", link: "https://www.abbiewilliamsdesigns.com/" },
    { name: "ACRE – A Creative Endeavour Ltd", link: "https://acre.studio/" },
    { name: "Active Matter", link: "https://activematter.co/" },
    { name: "ACX", link: "https://arcadia.cx/" },
     { name: "21–87", link: "https://21-87.co.uk/" },
    { name: "216 Signs", link: "https://216signs.net/" },
    { name: "31% Wool", link: "https://31percentwool.com/" },
    { name: "400", link: "https://400.co.uk/" },
    { name: "A–Side.", link: "https://a-side.studio/" },
    { name: "Aalia Ahamed", link: "https://www.linkedin.com/in/aaliaahamed/" },
    { name: "Abbie Williams", link: "https://www.abbiewilliamsdesigns.com/" },
    { name: "ACRE – A Creative Endeavour Ltd", link: "https://acre.studio/" },
    { name: "Active Matter", link: "https://activematter.co/" },
    { name: "ACX", link: "https://arcadia.cx/" },
     { name: "21–87", link: "https://21-87.co.uk/" },
    { name: "216 Signs", link: "https://216signs.net/" },
    { name: "31% Wool", link: "https://31percentwool.com/" },
    { name: "400", link: "https://400.co.uk/" },
    { name: "A–Side.", link: "https://a-side.studio/" },
    { name: "Aalia Ahamed", link: "https://www.linkedin.com/in/aaliaahamed/" },
    { name: "Abbie Williams", link: "https://www.abbiewilliamsdesigns.com/" },
    { name: "ACRE – A Creative Endeavour Ltd", link: "https://acre.studio/" },
    { name: "Active Matter", link: "https://activematter.co/" },
    { name: "ACX", link: "https://arcadia.cx/" },
     { name: "21–87", link: "https://21-87.co.uk/" },
    { name: "216 Signs", link: "https://216signs.net/" },
    { name: "31% Wool", link: "https://31percentwool.com/" },
    { name: "400", link: "https://400.co.uk/" },
    { name: "A–Side.", link: "https://a-side.studio/" },
    { name: "Aalia Ahamed", link: "https://www.linkedin.com/in/aaliaahamed/" },
    { name: "Abbie Williams", link: "https://www.abbiewilliamsdesigns.com/" },
    { name: "ACRE – A Creative Endeavour Ltd", link: "https://acre.studio/" },
    { name: "Active Matter", link: "https://activematter.co/" },
    { name: "ACX", link: "https://arcadia.cx/" },
     { name: "21–87", link: "https://21-87.co.uk/" },
    { name: "216 Signs", link: "https://216signs.net/" },
    { name: "31% Wool", link: "https://31percentwool.com/" },
    { name: "400", link: "https://400.co.uk/" },
    { name: "A–Side.", link: "https://a-side.studio/" },
    { name: "Aalia Ahamed", link: "https://www.linkedin.com/in/aaliaahamed/" },
    { name: "Abbie Williams", link: "https://www.abbiewilliamsdesigns.com/" },
    { name: "ACRE – A Creative Endeavour Ltd", link: "https://acre.studio/" },
    { name: "Active Matter", link: "https://activematter.co/" },
    { name: "ACX", link: "https://arcadia.cx/" },
     { name: "21–87", link: "https://21-87.co.uk/" },
    { name: "216 Signs", link: "https://216signs.net/" },
    { name: "31% Wool", link: "https://31percentwool.com/" },
    { name: "400", link: "https://400.co.uk/" },
    { name: "A–Side.", link: "https://a-side.studio/" },
    { name: "Aalia Ahamed", link: "https://www.linkedin.com/in/aaliaahamed/" },
    { name: "Abbie Williams", link: "https://www.abbiewilliamsdesigns.com/" },
    { name: "ACRE – A Creative Endeavour Ltd", link: "https://acre.studio/" },
    { name: "Active Matter", link: "https://activematter.co/" },
    { name: "ACX", link: "https://arcadia.cx/" },
     { name: "21–87", link: "https://21-87.co.uk/" },
    { name: "216 Signs", link: "https://216signs.net/" },
    { name: "31% Wool", link: "https://31percentwool.com/" },
    { name: "400", link: "https://400.co.uk/" },
    { name: "A–Side.", link: "https://a-side.studio/" },
    { name: "Aalia Ahamed", link: "https://www.linkedin.com/in/aaliaahamed/" },
    { name: "Abbie Williams", link: "https://www.abbiewilliamsdesigns.com/" },
    { name: "ACRE – A Creative Endeavour Ltd", link: "https://acre.studio/" },
    { name: "Active Matter", link: "https://activematter.co/" },
    { name: "ACX", link: "https://arcadia.cx/" },
     { name: "21–87", link: "https://21-87.co.uk/" },
    { name: "216 Signs", link: "https://216signs.net/" },
    { name: "31% Wool", link: "https://31percentwool.com/" },
    { name: "400", link: "https://400.co.uk/" },
    { name: "A–Side.", link: "https://a-side.studio/" },
    { name: "Aalia Ahamed", link: "https://www.linkedin.com/in/aaliaahamed/" },
    { name: "Abbie Williams", link: "https://www.abbiewilliamsdesigns.com/" },
    { name: "ACRE – A Creative Endeavour Ltd", link: "https://acre.studio/" },
    { name: "Active Matter", link: "https://activematter.co/" },
    { name: "ACX", link: "https://arcadia.cx/" },
  ];





  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setStartCount(true);
          setStartCount2(true);
        }
      },
      { threshold: 0.1 } 
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

  return (
    <section
      ref={sectionRef}
      className=" px-6  md:px-10  lg:px-16  py-16 sm:py-20 lg:py-24 bg-black border-round border-white text-white relative"
  
    >
      <div className="container mx-auto"> 
        <div
          className={`transition-opacity duration-1000 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
         

          <div className="space-y-16 md:space-y-20"> 
            <div
              className={`transition-all duration-700 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="mb-8">
                <span className="block font-normal max-w-fit text-l sm:text-3xl md:text-6xl  hero-text"> {/* Assuming hero-text for large # style */}
                  #
                  {startCount ? (
                    <CountUp start={0} end={ukSignatoriesCount} duration={2.5} separator="" />
                  ) : (
                    '0'
                  )}
                </span>
                <span className="flex flex-wrap items-center gap-2 mt-1">
                  <span className="font-h3 text-xl sm:text-2xl font-semibold">Signatories and counting in </span>
                  <button className=" border-radius-2 bg-custom-orange-500 inline-block max-w-fit rounded-full px-3 py-1 text-xs font-semibold transition-colors bg-brand-red text-brand-black">
                    D! UK
                  </button>
                </span>
              </div>
              <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-x-4 sm:gap-x-6 gap-y-1 text-xs">
                {ukSignatories.map((signatory, index) => (
                  <a
                    key={`uk-${index}-${signatory.name}`}
                    href={signatory.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring group hover:text-custom-orange-500 relative w-fit transition-colors block max-w-fit font-helvetica font-medium text-brand-gray-400 [&:is(a)]:hocus:text-brand-white [&:is(a)]:hocus:underline mb-1 break-words"
                    aria-label={`Go to ${signatory.name}'s website.`}
                  >
                    {signatory.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 space-y-16 md:space-y-20"> 
            <div
              className={`transition-all duration-700 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="mb-8">
                <span className="block font-normal max-w-fit text-l sm:text-3xl md:text-6xl  hero-text"> {/* Assuming hero-text for large # style */}
                  #
                  {startCount2? (
                    <CountUp start={0} end={globalSupportersCount} duration={2.5} separator="" />
                  ) : (
                    '0'
                  )}
                  
                </span>
                <span className="flex flex-wrap items-center gap-2 mt-1">
                  <span className="font-h3 text-xl sm:text-2xl font-semibold">Global Supporters
 </span>
                  
                </span>
                
              </div>
              <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-x-4 sm:gap-x-6 gap-y-1 text-xs">
                {ukSignatories.map((signatory, index) => (
                  <a
                    key={`uk-${index}-${signatory.name}`}
                    href={signatory.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring group hover:text-custom-orange-500 relative w-fit transition-colors block max-w-fit font-helvetica font-medium text-brand-gray-400 [&:is(a)]:hocus:text-brand-white [&:is(a)]:hocus:underline mb-1 break-words"
                    aria-label={`Go to ${signatory.name}'s website.`}
                  >
                    {signatory.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatoriesSection;