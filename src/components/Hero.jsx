// Hero.jsx
import React, { useState } from 'react';
import Button from './Button'; // Import your custom Button component
import { Canvas } from "@react-three/fiber";
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
    <div className="flex w-full min-h-[800px] items-center justify-center border border-gray-200 border-gray-200">
        <div className="flex w-1/2 h-full items-center justify-center border-r border-gray-200 border-gray-200">
            <div className="flex flex-col gap-0.5 items-center justify-center">
                <Button size="lg" variant="outline" onClick={handleFirstButtonClick}>
                    First Button
                </Button>
                <Button size="lg" variant="outline" onClick={handleSecondButtonClick}>
                    Second Button
                </Button>
                <Button size="lg" variant="outline" onClick={handleThirdButtonClick}>
                    Third Button
                </Button>
                <div className="text-3xl font-bold underline">124</div>
            </div>
        </div>
        <div className="flex w-1/2 h-full items-center justify-center p-6">
            <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
                {/* <color attach="background" args={["#ececec"]} /> */}
                <Experience arg={arg} />
            </Canvas>
        </div>
    </div>
    );
};
