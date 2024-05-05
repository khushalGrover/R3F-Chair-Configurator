// Hero.jsx
import React, { useState } from "react";
import Button from "./Button"; // Import your custom Button component
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Experience } from "./Experience";
import "../App.css";

export function Hero() {
	const [arg, setArg] = useState(null); // State to store the argument
	const [isClosed, setIsClosed] = useState(false);
	const [CValue, setCValue] = useState("");

	const handleSetCode = () => {
		if (CValue.length === 5) {
			console.log("# # # # # final value is", CValue);
		} else {
			console.log("Invalid code");
		}
	};
	const handleChange = (e) => {
		const value = e.target.value;
		// Validate input to allow numbers only
		if (/^\d*$/.test(value) && value.length <= 5) {
			setCValue(value);
		}
	};
	const handleToggleClick = () => {
		setIsClosed(!isClosed);
	};

	return (
		<>
			<div className="flex flex-col md:flex-row h-dvh w-full items-center justify-center relative bg-[#191920]">
				<div
					className={"w-full h-full"}
				>
						<Canvas
							shadows
							camera={{ position: [0, 0, 150], fov: 35 }}
							className="canvas"
						>
							<color attach="background" args={["#191920"]} />
							<fog attach="fog" args={["#191920", 0, 15]} />
							<Experience arg={arg} />
						</Canvas>
						<Loader />
						{/* {isClosed && <Configurator/>} */}

					
				</div>
				
			</div>
		</>
	);

	
}
