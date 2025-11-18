import { desc } from 'framer-motion/client';
import React, { useState } from 'react'

//create a flippable bubble page that show cases my pictures

const Bubble = ({ imgURL, description }) => {
    const [flipped, setFlipped] = useState(false)

    return (
        <div className="flex justify-center items-center">
            <div
                className="relative w-40 h-40 cursor-pointer"
                onClick={() => setFlipped(!flipped)}
            >
                {/* container */}
                <div
                    className={`
            absolute inset-0 transition-transform duration-500 [transform-style:preserve-3d]
            ${flipped ? "[transform:rotateY(180deg)]" : ""}
          `}
                >
                    {/* FRONT */}
                    <img
                        src={imgURL}
                        className="
    absolute inset-0 w-full h-full object-cover rounded-full
    [backface-visibility:hidden]
  "
                    />

                    {/* BACK */}
                    <div
                        className="
    absolute inset-0 w-full h-full rounded-full
    bg-gray-800 text-white text-sm p-4 text-center flex items-center justify-center
    [transform:rotateY(180deg)] [backface-visibility:hidden]
  "
                    >
                        {description}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Bubble
