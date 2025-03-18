import React from "react";

const Page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white text-black">
      <div className="w-full max-w-4xl p-6  rounded-lg  ">
        <h2 className="text-2xl font-bold mb-4 text-center">Access Information</h2>

        <div className="bg-black text-white p-3 text-lg font-semibold text-center">
          PSE Tower, BGC, Taguig
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-4">
          {/* Office Details */}
          <div>
            <p className="mb-2">
              <strong>Location:</strong> PSE Tower, 5th Avenue corner 28th Street, Bonifacio Global City, Taguig, Philippines
            </p>
            <p>
              <strong>Access:</strong> 5-minute walk from Market! Market! and High Street, BGC.
            </p>
          </div>

          {/* Map & Images Section */}
          <div className="flex flex-col gap-4">
            {/* Embedded Google Map */}
            <iframe
              className="w-full h-100 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1930.2401262325182!2d121.05542631834789!3d14.551865983758507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8fa88fc8dbb%3A0x1e1f83c6d4f6b37b!2sPSE%20Tower!5e0!3m2!1sen!2sph!4v1631685014285!5m2!1sen!2sph"
              allowFullScreen
              loading="lazy"
            ></iframe>

            {/* Office Images */}
            <div className="grid grid-cols-2 gap-2">
              <img src="/images/bs1.jpg" alt="PSE Tower Lobby" className="w-full h-32 object-cover rounded-lg" />
              <img src="/images/bs2.jpg" alt="PSE Tower Interior" className="w-full h-32 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
