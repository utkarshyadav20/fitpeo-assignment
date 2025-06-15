import React, { useRef, useEffect, useState } from 'react';

const latestArticles = [
  {
    id: '1',
    categories: ['Events', 'D! UK'],
    date: '24.04.2025, 15:30',
    title: 'SD4P Collective: How can Service Design drive meaningful sustainability impact',
    excerpt: 'Recap: SD4P Collective working session – 28th March 2025',
    link: 'https://designdeclares.com/latest/sd4p-collective-how-can-service-design-drive-meaningful-sustainability-impact',
  },
  {
    id: '2',
    categories: ['Events', 'D! UK'],
    date: '06.12.2024, 14:30',
    title: 'Designing Tomorrow: Speculative Thinking Shapes Our Present',
    excerpt: "Design Declares' November Event Challenges Perspectives on Sustainability and Innovation",
    link: 'https://designdeclares.com/latest/designing-tomorrow-speculative-thinking-shapes-our-present',
  },
];

interface Article {
  id: string;
  categories: string[];
  date: string;
  title: string;
  excerpt: string;
  link: string;
}

const LatestSection: React.FC = () => {
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

  return (
    <section
      ref={sectionRef}
     
      className="px-6 md:px-10 lg:px-16 py-16 sm:py-20 lg:py-24 bg-black text-white relative" 
    >
      <div className="container mx-auto"> 
        <div
          className={`transition-opacity duration-1000 ease-out ${ 
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
            <div className="col-span-12 lg:col-span-4">
              <div className="md:sticky md:top-24 self-start"> 
                <h2 className="font-h3 text-3xl sm:text-4xl font-semibold"> 
                  Latest
                </h2>
              </div>
            </div>

            <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
              <div className="space-y-16">
                {latestArticles.map((article, index) => (
                  <div
                    key={article.id}
                    className={`transition-all duration-700 ease-out transform ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${200 + index * 150}ms` }} 
                  >
                    <article className="grid grid-cols-12 gap-x-4 sm:gap-x-8 space-y-3 sm:space-y-4 @container"> 
                      <div className="col-span-12 flex flex-wrap items-center gap-2 text-sm text-brand-gray-400">
                        {article.categories.map((category, catIndex) => (
                          <span
                            key={catIndex}
                            className="inline-block max-w-fit rounded-full px-3 py-1 text-xs font-semibold transition-colors bg-brand-gray-800 text-brand-gray-400"
                          >
                            {category}
                          </span>
                        ))}
                        <span className="text-xs font-semibold">{article.date}</span>
                      </div>
                      <div className="col-span-12 @2xl:col-span-6"> 
                        <h2 className="text-xl sm:text-2xl font-semibold transition-colors group-hocus:text-brand-red hover:text-brand-red"> 
                          {article.title}
                        </h2>
                      </div>
                      <div className="col-span-12 space-y-2 sm:space-y-4 @2xl:col-span-6">
                        <p className="text-brand-gray-400 text-sm sm:text-base">{article.excerpt}</p>
                        <a
                          className="focus-ring group relative w-fit underline transition-colors hocus:text-[--focus-color] hover:text-orange-500 inline-block text-sm sm:text-base"
                          href={article.link}
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Read story
                        </a>
                      </div>
                    </article>
                  </div>
                ))}
              </div>

              <div
                className={`transition-all duration-1000 ease-out transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + latestArticles.length * 150}ms` }} 
              >
                    <button type="submit" className="focus-ring bg-white text-black font-button group relative flex max-h-fit w-full items-center justify-center rounded-full px-6 py-3 text-center transition-colors md:max-w-fit md:py-4 border border-transparent bg-brand-white text-brand-black hover:bg-custom-orange hover:bg-opacity-85 hover:text-white">
                See all the latest
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestSection;