// Hero.jsx
import React, { useState } from "react";
import Button from "./Button"; // Import your custom Button component
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import { ChairDetails } from "../Constants";

export function Hero() {
	const [arg, setArg] = useState(null); // State to store the argument
	const [isClosed, setIsClosed] = useState(false);
	const handleFirstButtonClick = () => {
		setArg("1");
		console.log("First button clicked:", arg);
		console.log("name of object is", ChairDetails[0].name);
	};
	const handleSecondButtonClick = () => {
		setArg("2");
		console.log("Second button clicked:", arg);
	};
	const handleThirdButtonClick = () => {
		setArg("3");
		console.log("Third button clicked:", arg);
	};
	const handleToggleClick = () => {
		setIsClosed(!isClosed);
	};
	return (
		<>
			<div className="flex flex-col md:flex-row h-dvh w-full items-center justify-center relative bg-[#191920]">
				<div
					className={`${
						isClosed
							? "w-full h-full"
							: "w-full h-1/2 md:w-1/2 md:h-full"
					} relative justify-center items-center flex`}
				>
					{/* <Canvas shadows camera={{ position: [40, 0, 60], fov: 35 }}>
						<color attach="background" args={["#191920"]} />
						<fog attach="fog" args={["#191920", 0, 15]} />
						<Experience arg={arg} />
					</Canvas> */}
					<div className="text-red-600">CANVAS ELEMENT DISABLED <br />Not Support in your browser <br />T-T</div>
					
					<div className="absolute md:right-0 md:bottom-9 right-9 bottom-0">
						<Button
							size="lg"
							variant="filled"
							onClick={handleToggleClick}
						>
							{isClosed ? "Show Details" : "Hide Details"}
						</Button>
					</div>
				</div>

				<div className="absolute inset-x-0 top-0 flex w-full justify-center gap-2 mt-2">
					<Button
						size="lg"
						variant="filled"
						className="text-blue-600 hover:text-red-600"
						onClick={handleFirstButtonClick}
					>
						First Button
					</Button>
					<Button
						size="sm"
						color="#fff"
						variant="filled"
						className="text-blue-600 hover:text-red-600"
						onClick={handleSecondButtonClick}
					>
						Second Button
					</Button>
					<Button
						size="lg"
						variant="filled"
						className="text-blue-600 hover:text-red-600"
						onClick={handleThirdButtonClick}
					>
						Third Button
					</Button>
				</div>

				{isClosed ? null : (
					<div className="grid gap-4 px-6 text-slate-400">
						<h1 className="font-bold text-2xl sm:text-3xl">
							{ChairDetails[0].name}
						</h1>
						<div className="flex items-center gap-4">
							<div className="flex items-center gap-0.5">
								<StarIcon className="w-5 h-5 fill-white" />
								<StarIcon className="w-5 h-5 fill-white" />
								<StarIcon className="w-5 h-5 fill-white" />
								<StarIcon className="w-5 h-5 stroke-muted-foreground" />
								<StarIcon className="w-5 h-5 stroke-muted-foreground" />
								#hashTag1 #hashTag0
							</div>
						</div>
						<div className="grid gap-4 text-sm leading-loose">
							<p>
								{ChairDetails[0].heading} -{" "}
							</p>
							<p>
								{ChairDetails[0].description} 
							</p>
						</div>
					</div>
				)}
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
