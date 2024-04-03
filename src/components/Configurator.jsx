import { useCustomization } from "../Constants/Customization";
import Spinner from "./Spinner";
const Configurator = () => {
	const {
		material,
		setMaterial,
		arms,
		setArms,
		back,
		setBack,
		chairColors,
		chairColor,
		setChairColor,
		cushion,
		setCushion,
		cushionColors,
		cushionColor,
		setCushionColor,
		legs,
		setLegs,
		seat,
		setSeat,
		rawValue,
		setRawValue,
		objectCode,
		setObjectCode,
	} = useCustomization();

	let isValid = false;
	const minValidCode = "00011";
	const maxValidCode = "22222";

	const handleSetCode = () => {
		if (rawValue.length === 5) {
			setObjectCode("" + rawValue);
			console.log(rawValue, "!!! Final value of objectCode", objectCode);
		} else {
			console.log("Invalid code");
		}
	};
	const handleChange = (e) => {
		const value = e.target.value;
		// Validate input to allow numbers only and only 5 digits
		if (/^\d*$/.test(value) && value.length <= 5) {
			setRawValue(value);
		}
	};

	return (
		<div className="configurator">
			{/* <div className="configurator__section">
				<div className="configurator__section__title">
					Chair material
				</div>
				<div className="configurator__section__values">
					<div
						className={`item ${
							material === "leather" ? "item--active" : ""
						}`}
						onClick={() => setMaterial("leather")}
					>
						<div className="item__label">Leather</div>
					</div>
					<div
						className={`item ${
							material === "fabric" ? "item--active" : ""
						}`}
						onClick={() => setMaterial("fabric")}
					>
						<div className="item__label">Fabric</div>
					</div>
				</div>
			</div>
			<div className="configurator__section">
				<div className="configurator__section__title">Chair color</div>
				<div className="configurator__section__values">
					{chairColors.map((item, index) => (
						<div
							key={index}
							className={`item ${
								item.color === chairColor.color
									? "item--active"
									: ""
							}`}
							onClick={() => setChairColor(item)}
						>
							<div
								className="item__dot"
								style={{ backgroundColor: item.color }}
							/>
							<div className="item__label">{item.name}</div>
						</div>
					))}
				</div>
			</div>
			<div className="configurator__section">
				<div className="configurator__section__title">
					Cushion color
				</div>
				<div className="configurator__section__values">
					{cushionColors.map((item, index) => (
						<div
							key={index}
							className={`item ${
								item.color === cushionColor.color
									? "item--active"
									: ""
							}`}
							onClick={() => setCushionColor(item)}
						>
							<div
								className="item__dot"
								style={{ backgroundColor: item.color }}
							/>
							<div className="item__label">{item.name}</div>
						</div>
					))}
				</div>
			</div> */}

			{/* Chair CODE */}
			<div className="configurator__section">
				<div className="configurator__section__title">
					Chair Code: #{objectCode}
				</div>

				<div className="configurator__section__values">
					<div
						className={`item`}
						onClick={() => {
							// setArms(1);
							// console.log("code is", arms);
						}}
					>
						<input
							type="text"
							value={rawValue}
							onChange={handleChange}
							placeholder="Enter Code(numbers only)"
						/>

						<div className="item__label" onClick={handleSetCode}>
							Set
						</div>
					</div>
				</div>
			</div>
			{/* <Spinner type="text" items={["none","classic", "modern" ]} /> */}

			<div className="configurator__section">
				<div className="configurator__section__title">Arm</div>
				<Spinner
					targetIndex={0}
					type="text"
					items={["none", "classic", "modern"]}
					objectCode={objectCode}
					setObjectCode={setObjectCode}
				/>
				{/* <div className="configurator__section__values">
					<div
						className={`item ${
							objectCode.charAt(0) === 1 ? "item--active" : ""
						}`}
						onClick={() => {
							// assine 1 to objectCode at 0th index
							setObjectCode(
								"1" + objectCode.charAt(1) + objectCode.slice(2)
							);
							console.log(
								rawValue,
								"< raw value__ ARM-VALUE ___objectCode at 1>",
								objectCode
							);
							// console.log("Arms are", arms);
						}}
					>
						<div className="item__label">Classic</div>
					</div>
					<div
						className={`item ${arms === 2 ? "item--active" : ""}`}
						onClick={() => {
							setArms(2);
							console.log("Arms are", arms);
						}}
					>
						<div className="item__label">Design</div>
					</div>
					<div
						className={`item ${arms === 0 ? "item--active" : ""}`}
						onClick={() => {
							setArms(0);
							console.log("Arms are", arms);
						}}
					>
						<div className="item__label">None</div>
					</div>
				</div> */}
			</div>

			{/* BACK */}
			<div className="configurator__section">
				<div className="configurator__section__title">Back</div>
				<div className="configurator__section__values">
					<div
						className={`item ${back === 1 ? "item--active" : ""}`}
						onClick={() => {
							setBack(1);
							console.log("back are", back);
						}}
					>
						<div className="item__label">Classic</div>
					</div>
					<div
						className={`item ${back === 2 ? "item--active" : ""}`}
						onClick={() => {
							setBack(2);
							console.log("back are", back);
						}}
					>
						<div className="item__label">Design</div>
					</div>
					<div
						className={`item ${back === 0 ? "item--active" : ""}`}
						onClick={() => {
							setBack(0);
							console.log("back are", back);
						}}
					>
						<div className="item__label">None</div>
					</div>
				</div>
			</div>

			{/* CUSHION */}
			<div className="configurator__section">
				<div className="configurator__section__title">Cushion</div>
				<div className="configurator__section__values">
					<div
						className={`item ${
							cushion === 1 ? "item--active" : ""
						}`}
						onClick={() => {
							setCushion(1);
							console.log("cushion is", cushion);
						}}
					>
						<div className="item__label">Classic</div>
					</div>
					<div
						className={`item ${
							cushion === 2 ? "item--active" : ""
						}`}
						onClick={() => {
							setCushion(2);
							console.log("cushion is", cushion);
						}}
					>
						<div className="item__label">Design</div>
					</div>
					<div
						className={`item ${
							cushion === 0 ? "item--active" : ""
						}`}
						onClick={() => {
							setCushion(0);
							console.log("cushion is", cushion);
						}}
					>
						<div className="item__label">None</div>
					</div>
				</div>
			</div>

			{/* LEGS */}
			<div className="configurator__section">
				<div className="configurator__section__title">Legs</div>
				<div className="configurator__section__values">
					<div
						className={`item ${legs === 1 ? "item--active" : ""}`}
						onClick={() => {
							setLegs(1);
							console.log("Legs are", legs);
						}}
					>
						<div className="item__label">Classic</div>
					</div>
					<div
						className={`item ${legs === 2 ? "item--active" : ""}`}
						onClick={() => {
							setLegs(2);
							console.log("Legs are", legs);
						}}
					>
						<div className="item__label">Design</div>
					</div>
				</div>
			</div>

			{/* SEAT */}
			<div className="configurator__section">
				<div className="configurator__section__title">Seat</div>
				<div className="configurator__section__values">
					<div
						className={`item ${seat === 1 ? "item--active" : ""}`}
						onClick={() => {
							setSeat(1);
							console.log("Seat are", seat);
						}}
					>
						<div className="item__label">Classic</div>
					</div>
					<div
						className={`item ${seat === 2 ? "item--active" : ""}`}
						onClick={() => {
							setSeat(2);
							console.log("Seat are", seat);
						}}
					>
						<div className="item__label">Design</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Configurator;
