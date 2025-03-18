import React from "react";

const GarberaPartners = () => {
  return (
    <div className=" justify-center items-center min-h-screen max-w-4x1 bg-white">
       <div className="container mx-auto p-6 text-gray-800 bg-white w-full max-w-4xl rounded-lg">
       <h2 className="text-2xl font-bold text-justify border-b-8 mb-3.5 p-2 rounded-1xl">Rewards List</h2>
       <ul className="list-disc list-inside">
          <li>
            <a href="#garbera-section" className="text-blue-500 hover:underline  text-justify text-lg font-bold text-sm sm:text-base md:text-lg">
              Garbera Partners Tax Accountants Corporation
            </a>
          </li>
          <li>
            <a href="#Garbera-Administrative" className="text-blue-500 hover:underline   text-justify text-lg font-bold text-sm sm:text-base md:text-lg">
              Garbera Partners, Administrative Scrivener Corporation
            </a>
          </li>

          <li>
            <a href="#Social-Insurance" className="text-blue-500 hover:underline  text-justify text-lg font-bold text-sm sm:text-base md:text-lg">
            Social Insurance and Labor Consultant Corporation Garbera Partners
            </a>
          </li>
        </ul>
      </div>



      <div className="container mx-auto p-6 text-gray-800 bg-white w-full max-w-4xl ">
       
        
        <div id="garbera-section" className="mt-6 mb-10  text-justify text-lg font-bold text-sm sm:text-base md:text-lg">
          <h2 className="text-2xl font-bold text-justify bg-blue-400 p-2 rounded-1xl  text-justify text-lg  text-sm sm:text-base md:text-lg">Garbera Partners Tax Accountants Corporation</h2>
          <p className="mt-2  text-justify">
          We will provide you with an estimate for the services depending on the content of your inquiry.
          Please feel free to contact us
          </p>
          
          <h3 className="text-xl font-semibold mt-4 float-right mb-10">As of April 1, 2024</h3>
          
          
          {/* <a href="#" className="block mt-4 font-bold text-blue-500 hover:underline text-center">Back to top of page</a> */}
        </div>

        <div id="Garbera-Administrative" className="mt-6 border-b-8">
        <h2 className="text-2xl font-bold text-justify bg-blue-400 p-2 rounded-1xl  text-justify text-lg font-bold text-sm sm:text-base md:text-lg">Garbera Partners, Administrative Scrivener Corporation</h2>
        <h3 className="text-xl font-semibold mt-4">Status of Residence, Visa Application</h3>
          <p>
            We also support foreigners looking for employment, starting a business, studying abroad, getting married, and other applications required to live in Japan. We offer support in multiple languages, including English and Chinese.
          </p>
          
          <h3 className="text-xl font-semibold mt-4">Permanent Residence/Naturalization Application</h3>
          <p>
            For those who meet certain requirements, we will assist you in applying for permanent residence and naturalization. If you wish, we will also provide suggestions for your life plan after that.
          </p>
          
          <h3 className="text-xl font-semibold mt-4">Obtaining Ministry of Foreign Affairs and Consular Certification</h3>
          <p>
            We support the Ministry of Foreign Affairs in verifying official seals and apostilles, and also handle authentication by the consulates of various countries in Japan. We also handle passport authentication and signature authentication in English.
          </p>
          
          {/* <a href="#" className="block mt-4 font-bold text-blue-500 hover:underline text-center">Back to top of page</a> */}
        </div>

        <div id="Social-Insurance" className="mt-6 border-b-8">
        <h2 className="text-2xl font-bold text-justify bg-blue-400 p-2 rounded-1xl  text-justify text-lg text-sm sm:text-base md:text-lg">Social Insurance and Labor Consultant Corporation Garbera Partners</h2>
          <p className="mt-2 text-justify">
            Our firm's primary goal is to help our client companies build open labor-management relationships. Please feel free to use our firm as a lubricant for your company's labor-management relations.
          </p>
          <h3 className="text-xl font-semibold mt-4">Labor Advisor/Labor Consultation</h3>
          <p>
            No matter how careful managers are, labor issues can occur like natural disasters when they forget. The defining feature of good labor management is that it is possible to reduce risks and costs by taking precautions in advance.
          </p>
          <h3 className="text-xl font-semibold mt-4">Labor Investigation Response</h3>
          <p>
            Our experts have handled many labor investigations so far, so you can rest assured that we will handle everything from the advance preparations to the day of the investigation and correcting any issues that are pointed out.
          </p>
          <h3 className="text-xl font-semibold mt-4">Payroll and General Affairs Outsourcing</h3>
          <p>
            We perform payroll calculations for even one employee. We also outsource general affairs tasks such as labor insurance, social insurance, and the creation of various forms, as well as applying for subsidies.
          </p>
          <h3 className="text-xl font-semibold mt-4">Creation of Work Regulations</h3>
          <p>
            We create work regulations and wage regulations that thoroughly address issues likely to cause labor problems, such as unpaid overtime, service discipline, and dismissal.
          </p>
          <h3 className="text-xl font-semibold mt-4">Preparation of Overseas Assignment Regulations</h3>
          <p>
            When posting an employee to an overseas branch or local corporation, various issues arise, such as tax handling, social insurance, and allowances. We create comprehensive overseas posting regulations.
          </p>
          <a href="#" className="block mt-4 font-bold text-blue-500 hover:underline text-center">Back to top of page</a>
        </div>




      </div>
    </div>
  );
};

export default GarberaPartners;
