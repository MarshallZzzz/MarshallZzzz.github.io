import React, { useState } from "react";

const Bubble = ({ imgURL, description }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex justify-center items-center overflow-visible">
      {/* PERSPECTIVE WRAPPER — required for 3D */}
      <div
        className="w-60 h-60 cursor-pointer [perspective:80000px]"
        onClick={() => setFlipped(!flipped)}
      >
        {/* FLIP CARD */}
        <div
          className={`
            relative w-full h-full transition-transform duration-500
            [transform-style:preserve-3d]
            ${flipped ? "[transform:rotateY(180deg)]" : ""}
          `}
        >
          {/* FRONT */}
          <img
            src={imgURL}
            className="absolute inset-0 w-full h-full object-cover rounded-full shadow-xl [backface-visibility:hidden] transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(77,247,199,0.5)]"
          />

          {/* BACK */}
          <div
            className="
              absolute inset-0 w-full h-full rounded-full bg-gray-900 text-white text-sm text-center p-4 flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden] transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(77,247,199,0.5)]"
          >
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bubble;
