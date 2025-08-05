// components/Newsletter.tsx
import React from 'react';

const Newsletter = () => {
  return (
    <section className="pt-16 sm:pt-24 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#2C6DC2] to-[#89BAFA] rounded-3xl p-8 sm:p-12 text-center text-white">
        <h2 className="text-2xl font-semibold leading-[30px] tracking-tight">
        Subscribe To Our Newsletter
       <br />
       and Stay Updated
       </h2>
              
<p className="mt-4 max-w-2xl mx-auto font-semibold text-[15px] leading-[20px] text-[#000000]">
  Stay updated with the latest news, course updates,
  <br />
  and exclusive offers delivered straight to your inbox.
</p>
{/* Form */}
<form className="mt-8 max-w-lg mx-auto relative">
  <label htmlFor="email-address" className="sr-only">
    Email address
  </label>
  <input
    id="email-address"
    name="email"
    type="email"
    autoComplete="email"
    required
    className="w-full h-[81px] px-8 text-lg text-gray-900 placeholder-gray-500 bg-white border-none rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
    placeholder="Enter your email"
  />
  <button
    type="submit"
    className="absolute top-1/2 right-4 -translate-y-1/2 h-[81px] px-10 flex items-center justify-center bg-[#89BAFA] hover:bg-opacity-90 text-white font-semibold rounded-full shadow-md transition-opacity"
  >
    Send
  </button>
</form>
      </div>
    </section>
  );
};

export default Newsletter;