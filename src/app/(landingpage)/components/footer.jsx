import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6 md:p-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between">
        {/* Left Section - Company Info */}
        <div className="flex-1 mb-8 md:mb-0">
          <img
            src="/images/asianlogo4.png"
            alt="Asia Business hub inc."
            className="w-32 md:w-40 mb-4 mx-auto md:mx-0 rounded-full"
          />
          <ul className="text-sm text-center md:text-left">
            <li className="mb-4">
              <strong>■ Tokyo Office</strong>
              <br />
              RBM Toranomon Building 7F, 3-23-6 Toranomon, Minato-ku, Tokyo
              <br />
              <a href="#" className="text-blue-400 hover:underline hover:text-blue-500">View Map →</a>
            </li>
            <li className="mb-4">
              <strong>■ Osaka Office</strong>
              <br />
              Honmachi Heisei Building 3F, 1-2-12 Tachibori, Nishi-ku, Osaka
              <br />
              <a href="#" className="text-blue-400 hover:underline hover:text-blue-500">View Map →</a>
            </li>
            <li className="mb-4">
              <strong>■ Fukuoka Office</strong>
              <br />
              More Grand Hakata Building 4F, 1-5-8 Hakata Station East, Hakata Ward, Fukuoka City
              <br />
              <a href="#" className="text-blue-400 hover:underline hover:text-blue-500">View Map →</a>
            </li>
            <li className="mb-4">
              <strong>■ Nagoya Office</strong>
              <br />
              GS Sakae Building 3F, 5-26-39 Sakae, Naka-ku, Nagoya
              <br />
              <a href="#" className="text-blue-400 hover:underline hover:text-blue-500">View Map →</a>
            </li>
          </ul>
        </div>

        {/* Right Section - Sitemap & Contact */}
        <div className="flex-1 p-4">
        <h3 className="italic font-bold text-lg border-b pb-2 text-center md:text-left">
    SITEMAP
  </h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm mt-4 text-center md:text-left">
              {[
                { name: "Home", href: "/" },
                { name: "Business Overview", href: "/business-overview" },
                { name: "Awards List", href: "/rewards" },
                { name: "Seminar Information", href: "/seminars" },
                { name: "Operating Sites", href: "/sites" },
                { name: "Message from the CEO", link: "/Greeting" },
                { name: "Company Overview", href: "/company-overview" },
                { name: "Q&A Blog", href: "/blog" },
                { name: "Careers", href: "/careers" },
                { name: "Contact Us", href: "/contact" },
                { name: "Information Security Policy", href: "/security-policy" },
                { name: "Privacy Policy", href: "/privacy-policy" },
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-blue-400 hover:underline hover:text-blue-500">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

          <p className="mt-6 text-sm text-center md:text-left">
            If you have any questions, please contact us via our inquiry form.
            <br />
            We are happy to assist you.
          </p>

          <div className="flex justify-center md:justify-start">
            <a href="/contact" className="mt-4 inline-block bg-red-600 text-white py-2 px-6 text-sm font-bold rounded-lg">
              Contact Us
            </a>
          </div>

          {/* Security Certification */}
          <div className="mt-6 flex flex-col md:flex-row items-center">
            <img src="/images/ISO-logo-remove.png" alt="ISO Certification" className="w-24 md:w-32" />
            <p className="text-xs mt-4 md:mt-0 md:ml-4 text-center md:text-left">
              Gerbera Partners Group has obtained the international information security standard ISO27001.
              We are committed to managing customer information securely and undergo annual inspections.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-xs mt-8 border-t pt-4 bg-blue-600 p-2">
        © Asia Business Hub Inc.
      </div>
    </footer>
  );
};

export default Footer;
