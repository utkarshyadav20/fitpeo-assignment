import React, { useRef, useEffect, useState } from 'react';

const DeclarationSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [entityType, setEntityType] = useState('');
  const [country, setCountry] = useState('United Kingdom');
  const [discipline, setDiscipline] = useState('');
  const [formData, setFormData] = useState({
    website: '',
    email: '',
    message: '',
    dataConsent: false,
    newsletterConsent: false,
  });

  const principles = [
    "We recognize that we are in a climate and ecological emergency",
    "We acknowledge the role of our industry in contributing to this crisis",
    "We commit to using our skills and platforms to drive positive change",
  ];

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleEntityTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => setEntityType(e.target.value);
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => setCountry(e.target.value);
  const handleDisciplineChange = (e: React.ChangeEvent<HTMLSelectElement>) => setDiscipline(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fullFormData = { entity: entityType, ...formData, country, discipline };
    console.log("Form Submitted:", fullFormData);
    alert('Form submitted! Check the console.');
  };

  const countryOptions = ["United Kingdom", "United States", "Canada", "Australia", "Other"];
  const disciplineOptions = ["Communication Design", "Digital Design", "Service Design", "Product Design", "Other"];

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
            Declare Emergency Now
          </h2>
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-3/5 md:pl-8 lg:pl-12 order-2">
        <div
          className={`transition-all duration-1000 ease-out transform delay-[200ms] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="font-p-lg text-left mb-8 md:mb-12 text-lg md:text-xl font-[var(--font-inter),Helvetica,sans-serif] leading-relaxed">
            Design Declares is open to individuals and institutions working in industrial, digital, graphic, communication and service design. To declare here, you must be a company with an office in the UK employing at least one full-time designer. We also welcome declarations from practising freelance designers who are registered as self-employed in the UK, and global supporters from other countries. All declarations will be named and published on this site.
          </p>

          <form
            className="flex flex-col gap-y-6 md:gap-y-8 border border-brand-gray-400 p-6 md:p-10 rounded-lg"
            onSubmit={handleSubmit}
          >
            <h2 className="font-h1 text-4xl md:text-4xl font-black hero-text mb-0 md:mb-4">
I am Declaring Emergency
            </h2>

            <div aria-label="What type of entity are you declaring as?" role="radiogroup" className="flex flex-col sm:flex-row sm:flex-wrap gap-4 md:gap-6">
              {["Business", "Individual", "Institution", "Team"].map(type => (
                <label key={type} className="group flex items-center gap-x-2 cursor-pointer transition-colors text-brand-gray-400 hover:text-brand-white data-[selected=true]:text-brand-white" data-selected={entityType === type}>
                  <input type="radio" required name="entity" value={type} checked={entityType === type} onChange={handleEntityTypeChange} className="sr-only peer"/>
                  <span className="box focus-border flex size-8 sm:size-10 items-center justify-center border border-brand-gray-400 peer-checked:border-brand-white peer-focus-visible:ring-2 peer-focus-visible:ring-brand-white peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-black transition-all">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="size-full p-1.5 sm:p-2 rotate-45 scale-0 peer-checked:scale-100 transition-transform duration-300 ease-in-out"><path strokeLinecap="square" d="M12 4.5v15m7.5-7.5h-15"></path></svg>
                  </span>
                  <span className="text-base sm:text-lg">{type === "Institution" ? "As a public institution" : type === "Team" ? "As a team or department" : `As a ${type.toLowerCase()}`}</span>
                </label>
              ))}
            </div>

            <div className="space-y-px">
              <div className="focus-within:border-brand-white relative flex flex-col gap-x-2 border border-brand-gray-400 px-4 py-3 md:flex-row md:items-center text-brand-white">
                <label htmlFor="website" className="max-w-full whitespace-nowrap text-brand-gray-400 md:py-3.5 mb-1 md:mb-0">Website:*</label>
                <input id="website" name="website" className="no-focus w-full bg-transparent placeholder:text-brand-gray-400 text-base md:text-lg" type="url" required value={formData.website} onChange={handleInputChange} placeholder="https://example.com"/>
              </div>

              <div className="focus-within:border-brand-white relative -mt-px flex flex-col gap-x-2 border border-brand-gray-400 px-4 py-3 md:flex-row md:items-center text-brand-white">
                <label htmlFor="country" className="max-w-full whitespace-nowrap text-brand-gray-400 md:py-3.5 mb-1 md:mb-0">Country:*</label>
                <select id="country" name="country" required value={country} onChange={handleCountryChange} className="no-focus w-full bg-black border-none text-brand-white md:py-3.5 text-base md:text-lg appearance-none custom-select-arrow">
                  {countryOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>

              <div className="focus-within:border-brand-white relative -mt-px flex flex-col gap-x-2 border border-brand-gray-400 px-4 py-3 md:flex-row md:items-center text-brand-white">
                <label htmlFor="discipline" className="max-w-full whitespace-nowrap text-brand-gray-400 md:py-3.5 mb-1 md:mb-0">Discipline:*</label>
                <select id="discipline" name="discipline" required value={discipline} onChange={handleDisciplineChange} className="no-focus w-full bg-black border-none text-brand-white md:py-3.5 text-base md:text-lg appearance-none custom-select-arrow">
                  <option value="">Select a discipline...</option>
                  {disciplineOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>

              <div className="focus-within:border-brand-white relative -mt-px flex flex-col gap-x-2 border border-brand-gray-400 px-4 py-3 md:flex-row md:items-center text-brand-white">
                <label htmlFor="email" className="max-w-full whitespace-nowrap text-brand-gray-400 md:py-3.5 mb-1 md:mb-0">Email:*</label>
                <input id="email" name="email" className="no-focus w-full bg-transparent placeholder:text-brand-gray-400 text-base md:text-lg" type="email" autoComplete="email" required value={formData.email} onChange={handleInputChange} placeholder="your@email.com"/>
              </div>

              <div className="focus-within:border-brand-white relative -mt-px flex flex-col border border-brand-gray-400 text-brand-white">
                <label htmlFor="message" className="sr-only">Why are you declaring?</label>
                <textarea id="message" name="message" className="no-focus w-full bg-transparent placeholder:text-brand-gray-400 px-4 py-3.5 text-base md:text-lg" rows={6} placeholder="Why are you declaring? In a sentence or two, tell us why you’re joining Design Declares." required value={formData.message} onChange={handleInputChange}/>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <label className="group flex items-start gap-x-3 cursor-pointer transition-colors text-brand-gray-400 hover:text-brand-white data-[selected=true]:text-brand-white text-sm sm:text-base" data-selected={formData.dataConsent}>
                <input type="checkbox" required name="dataConsent" checked={formData.dataConsent} onChange={handleInputChange} className="sr-only peer"/>
                <span className="box focus-border flex size-8 sm:size-10 flex-shrink-0 items-center justify-center border border-brand-gray-400 peer-checked:border-brand-white peer-focus-visible:ring-2 peer-focus-visible:ring-brand-white peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-black transition-all mt-0.5">
                  <svg width="100%" height="100%" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="size-full p-1.5 sm:p-2 rotate-45 scale-0 peer-checked:scale-100 transition-transform duration-300 ease-in-out"><path strokeLinecap="square" d="M12 4.5v15m7.5-7.5h-15"></path></svg>
                </span>
                <span>I consent for my data to be used for the purpose of the Declaration, and for my name and reason for joining to be used in the promotion of the Declaration on this site and across our social channels.</span>
              </label>
              <label className="group flex items-start gap-x-3 cursor-pointer transition-colors text-brand-gray-400 hover:text-brand-white data-[selected=true]:text-brand-white text-sm sm:text-base" data-selected={formData.newsletterConsent}>
                <input type="checkbox" name="newsletterConsent" checked={formData.newsletterConsent} onChange={handleInputChange} className="sr-only peer"/>
                <span className="box focus-border flex size-8 sm:size-10 flex-shrink-0 items-center justify-center border border-brand-gray-400 peer-checked:border-brand-white peer-focus-visible:ring-2 peer-focus-visible:ring-brand-white peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-black transition-all mt-0.5">
                  <svg width="100%" height="100%" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="size-full p-1.5 sm:p-2 rotate-45 scale-0 peer-checked:scale-100 transition-transform duration-300 ease-in-out"><path strokeLinecap="square" d="M12 4.5v15m7.5-7.5h-15"></path></svg>
                </span>
                <span>I would like to be added to the Design Declares! newsletter and receive further updates.</span>
              </label>
            </div>

            <a className="focus-ring group relative w-fit underline transition-colors hover:custom-orange hover:bg-opacity-85 text-brand-gray-400 font-p-sm block text-sm sm:text-base" href="/privacy-policy" target="_blank" rel="noopener noreferrer">
              View our Privacy Policy
            </a>

            <div className="flex items-center gap-x-4 mt-4 md:mt-6">
              <button type="submit" className="focus-ring bg-white text-black font-button group relative flex max-h-fit w-full items-center justify-center rounded-full px-6 py-3 text-center transition-colors md:max-w-fit md:py-4 border border-transparent bg-brand-white text-brand-black hover:bg-custom-orange hover:bg-opacity-85 hover:text-white">
                Declare Emergency Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DeclarationSection;
