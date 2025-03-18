import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white text-black">
      <div className="p-6 max-w-3xl w-full border border-gray-300 shadow-lg">
        <h2 className="text-xl font-bold italic border-b-8">Message from the CEO</h2>
        <hr className="my-2 border-black" />
        <div className="flex gap-4">
          <img
            src="/images/bs1.jpg"
            alt="CEO"
            className="w-40 h-40 object-cover border"
          />
          <p className="text-sm leading-relaxed">
            Thank you for visiting our website. Our company is made up of experts from various professions, and we carry out work that requires cross-disciplinary skills. Work related to national qualifications will be handled by qualified experts from Garbera Partners Certified Public Tax Accountants, Garbera Partners Certified Social Insurance and Labor Consultants, and Garbera Partners Certified Administrative Scriveners.
          </p>
        </div>
        <p className="text-sm leading-relaxed mt-4">
          For our various consulting work, we will work responsibly with the support system that best suits our customers' requests, mainly using in-house experts, but sometimes including external experts such as judicial scriveners and patent attorneys as project members.
        </p>
        <p className="text-sm leading-relaxed mt-4">
          With a track record of supporting over 3,000 cases, we have the knowledge and know-how you need to run your business, from start-ups to publicly listed companies, and we are prepared to provide immediate solutions to any problems you may have when you consult with us.
        </p>
        <p className="text-sm leading-relaxed mt-4">
          We will build a company that makes people think, "I don't know who to ask... Oh, that's right! I should ask Garbera!" We will adhere to the philosophy we set forth when we were founded and generously provide everything we have cultivated so far so that everyone who comes into contact with our experts can be happy.
        </p>
        <p className="text-sm leading-relaxed mt-4">
          If you are in the area, please stop by our company. We sincerely hope to have a long-lasting relationship with you.
        </p>
        <p className="font-bold mt-4">Yukinobu Yoshizumi, Representative Partner, Garbera Partners Group</p>
      </div>
    </div>
  );
};

export default Page;
