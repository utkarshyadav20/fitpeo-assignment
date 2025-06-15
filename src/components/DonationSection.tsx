import React, { useRef, useEffect, useState } from 'react';

const DonationSectionFinal: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  const donationLinks = [
    { amount: 10, link: "https://wise.com/pay/r/uZ5h3pxRMmTE_pk" },
    { amount: 20, link: "https://wise.com/pay/r/u2IiQNt2ebixruk" },
    { amount: 50, link: "https://wise.com/pay/r/2vqUbqPfU9hvVLE" },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col md:flex-row items-start md:justify-between
                 px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24 bg-black text-white relative"
    >
      <div className="w-full md:w-1/2 lg:w-2/5 md:sticky md:top-24 self-start md:pr-8 lg:pr-12 order-1 mb-12 md:mb-0 text-center md:text-left">
        <div
          className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-2xl font-bold text-white">
            Donate to D!
          </h2>
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-3/5 md:pl-8 lg:pl-12 order-2">
        <div
          className={`transition-all duration-1000 ease-out transform delay-[200ms] ${ // Added delay
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h1 className="text-l sm:text-xl md:text-2xl font-normal text-white mb-10 sm:mb-12 leading-relaxed md:leading-relaxed">
            Design Declares is a CIC and would not exist without our dedicated team of co-steers, volunteers, and our passionate community working towards change in the creative industry. Your support can go a long way, and helps us too continue the valuable work needed in tackling the climate crises. If you believe in the work we do, please consider a small donation to help us on our journey for a more equitable and just planet.
          </h1>
        </div>

        <div
          className={`flex  flex-row sm:flex-row flex-wrap items-center gap-3 sm:gap-4
                     transition-all duration-700 ease-out transform delay-[400ms] ${ // Added delay
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {donationLinks.map((donation, index) => (
            <a
              key={donation.amount}
              href={donation.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-white text-black px-8 py-3 rounded-full font-medium duration-150
             hover:bg-custom-orange hover:bg-opacity-85 hover:text-white ease-in-out`}
              
            >
              Donate £{donation.amount}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationSectionFinal;