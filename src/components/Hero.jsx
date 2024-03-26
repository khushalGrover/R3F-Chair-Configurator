// Hero.jsx
import React, { useState } from 'react';
import Button from './Button'; // Import your custom Button component
import { Canvas } from "@react-three/fiber";
import {Hotbar} from "./Hotbar";
import { Experience } from "./Experience";
export function Hero() {

    const [arg, setArg] = useState(null); // State to store the argument

    const handleFirstButtonClick = () => {
        setArg('1');
        console.log('First button clicked:',arg);

    };
    const handleSecondButtonClick = () => {
        setArg('2');
        console.log('Second button clicked:',arg);

    };
    const handleThirdButtonClick = () => {
        setArg('3');
        console.log('Third button clicked:',arg);

    };


return (
    <>
    <Hotbar/>

<div className="flex py-4 min-h-96 w-full items-center justify-center">
    <div className="flex w-1/2 h-full items-center justify-center">
        <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
            {/* <color attach="background" args={["#ececec"]} /> */}
            <Experience arg={arg} />
        </Canvas>
    </div>

    <div className="flex w-1/2 items-center justify-center border-l border-gray-200 px-6" >
        <div className="grid gap-4">
          <h1 className="font-bold text-2xl sm:text-3xl">WhimsiMug: Sip in Style and Magic</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-0.5">
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              #hashTag1
              #hashTag2
            </div>
          </div>
          <div className="grid gap-4 text-sm leading-loose">
            <p>Introducing the WhimsiMug, a delightful companion for your daily sips of joy.</p>
            <p>
              The magic truly lies in the design - a burst of vibrant colors and whimsical patterns that dance across
              the mug's surface, telling a story of wonder and creativity. Every sip from the WhimsiMug is like stepping
              into a world of imagination, where the ordinary transforms into the extraordinary.
            </p>
          </div>
        </div>
    </div>
    
        </div>
        <div className="flex items-center justify-center space-x-4 gap-0.5 ">
            <Button size="lg" variant="outline" onClick={handleFirstButtonClick}>
                First Button
            </Button>
            <Button size="lg" variant="outline" onClick={handleSecondButtonClick}>
                Second Button
            </Button>
            <Button size="lg" variant="outline" onClick={handleThirdButtonClick}>
                Third Button
            </Button>
        </div> 
    </>
    
);



function StarIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  }
};
