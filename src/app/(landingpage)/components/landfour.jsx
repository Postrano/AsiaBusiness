import React from "react";

const LandFour = () => {
  return (
    <div className="p-6">
      {/* Title */}
      <h2 className="font-bold italic text-xl text-black border-b-4 border-black my-2 text-center">
        NETWORK Base
      </h2>

      {/* Map Image */}
      <div className="mt-4 flex justify-center">
        <img
          src="/images/mapofasia.jpg"
          alt="Network Base Map"
          className="w-full max-w-4xl"
        />
      </div>

      {/* Legend */}
      <div className="mt-4 text-sm flex justify-center">
        <span className="mr-6 text-black">
          <span className="inline-block w-3 h-3 bg-red-500 mr-2 "></span> Our Group Support Area
        </span>
        <span className="mr-6 text-black">
          <span className="inline-block w-3 h-3 bg-black mr-2"></span> Our Group Partners
        </span>
      </div>
    </div>
  );
};

export default LandFour;
