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
			{/*}
			 <div className="configurator__section">
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
			</div> */}
			
			
			{/* Chair CODE */}
			<div className="configurator__section">
				<div className="configurator__section__title">
					Chair Code: #{objectCode}
				</div>

				<div className="configurator__section__values">
					<input
						type="text"
						value={rawValue}
						onChange={handleChange}
						placeholder="Enter Code(numbers only)"
						className="w-auto spinner"
					/>

					<div
						className="item__label  cursor-pointer"
						onClick={handleSetCode}
					>
						Set
					</div>
				</div>
			</div>
			
			{/* Cushion Color */}
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
			</div>

			{/* BACK */}
			<div className="configurator__section">
				<div className="configurator__section__title">Back</div>
				<Spinner
					targetIndex={1}
					type="text"
					items={["none", "classic", "modern"]}
					objectCode={objectCode}
					setObjectCode={setObjectCode}
				/>
			</div>

			{/* CUSHION */}
			<div className="configurator__section">
				<div className="configurator__section__title">Cushion</div>
				<Spinner
					targetIndex={2}
					type="text"
					items={["none", "classic", "modern"]}
					objectCode={objectCode}
					setObjectCode={setObjectCode}
				/>
			</div>

			{/* LEGS */}
			<div className="configurator__section">
				<div className="configurator__section__title">Legs</div>
				<Spinner
					targetIndex={3}
					type="text"
					items={["classic", "modern"]}
					objectCode={objectCode}
					setObjectCode={setObjectCode}
				/>
			</div>

			{/* SEAT */}
			<div className="configurator__section">
				<div className="configurator__section__title">Seat</div>
				<Spinner
					targetIndex={4}
					type="text"
					items={["classic", "modern"]}
					objectCode={objectCode}
					setObjectCode={setObjectCode}
				/>
			</div>
		</div>
	);
};

export default Configurator;
