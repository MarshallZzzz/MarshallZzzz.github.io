"use client";

import { cn } from "../../../../lib/utils.js";
import React, { useEffect, useState } from "react";

interface MeteorsProps {
  number?: number;
  minDelay?: number;
  maxDelay?: number;
  minDuration?: number;
  maxDuration?: number;
  angle?: number;
  className?: string;
}

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
}: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<
    Array<React.CSSProperties>
  >([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      "--angle": `${angle}deg`,
      top: `${Math.random() * 10}px`,           // spawn JUST inside top
      left: `${Math.random() * 100}%`,          // percent, safe for any container
      animationDelay: `${Math.random() * (maxDelay - minDelay) + minDelay}s`,
      animationDuration: `${Math.random() * (maxDuration - minDuration) + minDuration}s`,
    }));
    setMeteorStyles(styles);
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          style={{
            ...style,
            top: style.top ?? "0px",
            left: style.left ?? "0px",
            width: "6px",
            height: "6px",
            backgroundColor: "white",
            position: "absolute",
          }}
          className="animate-meteor rounded-full"
        >
          <div
            className="absolute top-1/2 -z-10 h-px w-[80px] -translate-y-1/2 bg-gradient-to-r from-white to-transparent"
          >
            <img src="/gradient.png"/>
            </div>
        </span>

        // <span
        //   key={idx}
        //   style={{ ...style }}
        //   // className={cn(
        //   //   "pointer-events-none absolute size-0.5 rotate-[var(--angle)] animate-meteor rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff10]",
        //   //   className
        //   // )}
        //   className="absolute w-4 h-4 bg-red-500"

        // >
        //   <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-zinc-500 to-transparent" />
        // </span>
      ))}
    </>
  );
};
