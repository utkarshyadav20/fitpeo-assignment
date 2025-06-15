import React, { useRef, useEffect, useState } from 'react';



const NewsletterToolkitSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [newsletterConsent, setNewsletterConsent] = useState(false);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newsletterConsent) {
      alert("Please consent to receive updates.");
      return;
    }
    const formData = {
      email,
      newsletterConsent,
    };
    console.log("Newsletter Subscription Data:", formData);
    alert("Subscribed! Check the console for data.");
  };

  const imageUrl = "https://cdn.sanity.io/images/zqatagq1/production/88fd99f7f3ecf6762e7dbe50ca090a59277eff87-3840x2160.png?max-w=1440";

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
          <div className="flex flex-col md:flex-row items-start md:gap-x-16"> 

            <div className="w-full md:w-1/3 lg:w-2/5 md:sticky md:top-24 self-start mb-12 md:mb-0"> {/* Width adjustments & sticky */}
              <div
                className={`transition-all duration-1000 ease-out transform ${ 
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <h2 className="font-h3 text-3xl sm:text-4xl font-semibold">
                  The Design Declares Newsletter and Toolkit
                </h2>
              </div>
            </div>

            <div className="w-full md:w-2/3 lg:w-3/5 space-y-12"> 
              <div
                className={`
                  *:my-6 first:*:mt-0 last:*:mb-0
                  [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-4
                  [&_p]:my-4 md:[&_p]:my-6
                  [&_ul]:list-disc [&_ul]:pl-4
                  transition-all duration-700 ease-out transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <figure className="flex h-auto w-full flex-col items-center justify-center mb-6 md:mb-8">
                  <div className="relative w-full max-w-3xl mx-auto">
                    <img
                      alt="Design Declares Toolkit Visual"
                      loading="lazy"
                      className="block object-cover object-center w-full h-auto rounded-md"
                      src={imageUrl}
                    />
                  </div>
                </figure>
                <p className="font-p-lg text-lg md:text-xl font-[var(--font-inter),Helvetica,sans-serif] leading-relaxed">
                  Subscribe to the Design Declares UK newsletter to receive the latest news and updates. By signing up you will also gain access to The Design Declares Toolkit, a live and evolving Notion site co-created with our community. It is filled with the latest resources and methods to help you on your journey to climate-positive design.
                </p>
                <p className="font-p-lg text-lg md:text-xl font-[var(--font-inter),Helvetica,sans-serif] leading-relaxed">
                  Every signatory to Design Declares will receive an access link to the Toolkit. If you are unable to declare emergency quite yet, you can still access the Toolkit - just register below.
                </p>
              </div>

              <form
                className={`flex flex-col gap-y-4 md:gap-y-6 text-brand-gray-400 transition-all duration-700 ease-out transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '400ms' }}
                onSubmit={handleSubmit}
              >
                <div className="focus-within:border-brand-white relative flex flex-col gap-x-2 border border-brand-gray-400 px-4 py-3 md:flex-row md:items-center text-brand-white">
                  <label htmlFor="newsletter-email" className="max-w-full whitespace-nowrap text-brand-gray-400 md:py-3.5 mb-1 md:mb-0">Email:*</label>
                  <input
                    id="newsletter-email"
                    name="email"
                    className="no-focus w-full bg-transparent placeholder:text-brand-gray-400 text-base md:text-lg"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                  />
                </div>

                <div aria-label="Newsletter consent" role="group" className="font-p-sm text-sm sm:text-base">
                  <label className="group flex items-start gap-x-3 cursor-pointer transition-colors text-brand-gray-400 hover:text-brand-white data-[selected=true]:text-brand-white" data-selected={newsletterConsent}>
                    <input
                      type="checkbox"
                      required
                      name="newsletterConsent"
                      checked={newsletterConsent}
                      onChange={(e) => setNewsletterConsent(e.target.checked)}
                      className="sr-only peer"
                    />
                    <span className="box focus-border flex size-8 sm:size-10 flex-shrink-0 items-center justify-center border border-brand-gray-400 peer-checked:border-brand-white peer-focus-visible:ring-2 peer-focus-visible:ring-brand-white peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-black transition-all mt-0.5">
                      <svg width="100%" height="100%" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="size-full p-1.5 sm:p-2 rotate-45 scale-0 peer-checked:scale-100 transition-transform duration-300 ease-in-out">
                        <path strokeLinecap="square" d="M12 4.5v15m7.5-7.5h-15"></path>
                      </svg>
                    </span>
                    <span>I would like to be added to the Design Declares! newsletter and receive further updates.</span>
                  </label>
                </div>

                <a className="focus-ring group relative w-fit underline transition-colors hover:text-orange-500 text-brand-gray-400 font-p-sm block text-sm sm:text-base" href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                  View our Privacy Policy
                </a>

                <div className="flex items-center gap-x-4 mt-2 md:mt-4">
                  <button type="submit" className="focus-ring bg-white text-black font-button group relative flex max-h-fit w-full items-center justify-center rounded-full px-6 py-3 text-center transition-colors md:max-w-fit md:py-4 border border-transparent bg-brand-white text-brand-black hover:bg-custom-orange hover:bg-opacity-85 hover:text-white">
Subscribe              </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterToolkitSection;