// Hero.jsx
import React, { useState } from "react";
import Button from "./Button"; // Import your custom Button component
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
export function Hero() {
	const [arg, setArg] = useState(null); // State to store the argument

	const handleFirstButtonClick = () => {
		setArg("1");
		console.log("First button clicked:", arg);
	};
	const handleSecondButtonClick = () => {
		setArg("2");
		console.log("Second button clicked:", arg);
	};
	const handleThirdButtonClick = () => {
		setArg("3");
		console.log("Third button clicked:", arg);
	};

	return (
		<>
			<div className="flex py-4 min-h-80 w-full items-center justify-center h-full  relative">
				<div className="flex w-full h-full items-center justify-center">
					<Canvas shadows camera={{ position: [40, 0, 60], fov: 35 }}>
						<color attach="background" args={["#191920"]} />
						<fog attach="fog" args={['#191920', 0, 15]} />
						<Experience arg={arg} />
					</Canvas>
				</div>

				<div className="absolute inset-x-0 bottom-0 flex w-full justify-center gap-2 mb-2">
					<Button
						size="lg"
						// variant="outline"
						className="text-blue-600 hover:text-red-600"
						onClick={handleFirstButtonClick}
					>
						First Button
					</Button>
					<Button
						size="sm"
						// variant="outline"
                        // className="rounded-l-lg bg-green-300 "
						color="#fff"
						className="text-blue-600 hover:text-red-600"
						onClick={handleSecondButtonClick}
					>
						Second Button
					</Button>
					<Button
						size="lg"
						// variant="outline"
						className="text-blue-600 hover:text-red-600"
						onClick={handleThirdButtonClick}
					>
						Third Button
					</Button>
				</div>


				<div className="flex w-1/2 items-center justify-center border-l border-gray-200 px-6 text-slate-400">
					<div className="grid gap-4">
						<h1 className="font-bold text-2xl sm:text-3xl">
							WhimsiChair: wood in Style and Magic
						</h1>
						<div className="flex items-center gap-4">
							<div className="flex items-center gap-0.5">
								<StarIcon className="w-5 h-5 fill-primary" />
								<StarIcon className="w-5 h-5 fill-primary" />
								<StarIcon className="w-5 h-5 fill-primary" />
								<StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
								<StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
								#hashTag1 #hashTag2
							</div>
						</div>
						<div className="grid gap-4 text-sm leading-loose">
							<p>
								Introducing the WhimsiChair, a delightful
								companion for your daily woods of joy.
							</p>
							<p>
								The magic truly lies in the design - a burst of
								vibrant colors and whimsical patterns that dance
								across the Chair's surface, telling a story of
								wonder and creativity. Every wood from the
								WhimsiChair is like stepping into a world of
								imagination, where the ordinary transforms into
								the extraordinary.
							</p>
						</div>
					</div>
				</div>
				
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
		);
	}
}
