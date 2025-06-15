import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-custom-orange-500 text-black px-8 py-8 sticky bottom-0 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-1">
          <div className="flex-1">
           <h1 className="text-[5rem] font-bold leading-[0.85] tracking-[-0.01em] font-bebas uppercase">
  DESIGN<br />DECLARES
</h1>
          </div>

          <div className="flex-1 flex flex-col md:flex-row justify-center gap-x-24 gap-y-12">
            <div className="md:w-48">
              <h4 className="uppercase font-semibold text-lg mb-6">Contact</h4>
              <ul className="space-y-4 text-lg">
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">LinkedIn</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              </ul>
            </div>

            <div className="flex-1 max-w-md">
              <h4 className="uppercase font-semibold text-lg mb-6">Sign up to the D! Newsletter</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-base mb-2">Email:*</label>
                  <input
                    type="email"
                    className="w-full p-3 border border-black bg-transparent focus:outline-none focus:ring-0"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="newsletter-consent"
                    className="mt-1 w-5 h-5 border border-black"
                  />
                  <label htmlFor="newsletter-consent" className="text-sm">
                    I would like to be added to the Design Declares! newsletter and receive further updates.
                  </label>
                </div>

                <button className="bg-white text-black px-6 py-3 rounded-full text-lg font-medium hover:text-white hover:bg-black transition-colors">
                  Subscribe
                </button>

                <p className="text-sm underline cursor-pointer">
                  View our Privacy Policy
                </p>
              </div>
            </div>
          </div>


        </div>

        <div className="mt-16 border-t border-black pt-6 text-sm space-y-3">
          <p>
            This website has been built following low-carbon principles of web development and hosted using serverless computing, by only allocating energy when needed and on demand. <span className="underline cursor-pointer">Learn more about our carbon footprint.</span>
          </p>
          <p>
            Empowered by <span className="underline cursor-pointer">Driftime®</span>
          </p>
        </div>
      </div>
    </footer>


  );
};

export default Footer;
