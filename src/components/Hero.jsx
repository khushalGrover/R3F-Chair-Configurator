// Hero.jsx
import React, { useState } from "react";
import Button from "./Button"; // Import your custom Button component
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Experience } from "./Experience";
import "../App.css";

export function Hero() {
	return (
		<>
			<div className="flex flex-col md:flex-row h-dvh w-full items-center justify-center relative bg-[#191920]">
				<div className={"w-full h-full"}>
					<Canvas
						shadows
						camera={{ position: [0, 0, 60], fov: 35 }}
						className="canvas"
					>
						<color attach="background" args={["#191920"]} />
						<fog attach="fog" args={["#191920", 0, 15]} />
						<Experience />
					</Canvas>
					<Loader />
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
