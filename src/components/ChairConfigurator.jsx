import React from "react";

const ChairConfigurator = ({ chairCode }) => {
	
	
	// Define the 2D array representing the configurations
	const configurations = [
		["None", "Classic", "Modern"], // Arms
		["None", "Classic", "Modern"], // Back
		["None", "Classic", "Modern"], // Cushion
		["None", "Classic", "Modern"], // Legs
		["None", "Classic", "Modern"], // Seat
	];

	// Parse the chair code
	const parseChairCode = () => {
		const codeString = chairCode.toString();
		const parsedConfigurations = codeString.split("").map(Number);
		return parsedConfigurations;
	};

	// Get the configuration for each option
	const parsedConfigurations = parseChairCode();

	return (
		<div className="chair-configurator">
			{configurations.map((option, index) => (
				<div key={index} className="configurator__section">
					<div className="configurator__section__title">
						{option[0]}
					</div>
					<div className="configurator__section__values">
						<div className="item item--active">
							{option[parsedConfigurations[index]]}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ChairConfigurator;
