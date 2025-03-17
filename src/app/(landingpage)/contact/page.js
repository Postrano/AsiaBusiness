import React from "react";

const ContactPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSdAmusdUgtWl3owGXsURVyV3Ot7FXwRSS_X9Ix4ea5d2ff4dg/viewform?embedded=true" 
        width="640" 
        height="1404" 
        frameBorder="0" 
        marginHeight="0" 
        marginWidth="0"
        className="w-full max-w-2xl shadow-lg rounded-lg"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default ContactPage;
