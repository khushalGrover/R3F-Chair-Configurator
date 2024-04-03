import { useCustomization } from "../Constants/Customization";

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
	} = useCustomization();

	return (
		<div className="configurator">
			{/* <div className="configurator__section">
        <div className="configurator__section__title">Chair material</div>
        <div className="configurator__section__values">
          <div
            className={`item ${material === "leather" ? "item--active" : ""}`}
            onClick={() => setMaterial("leather")}
          >
            <div className="item__label">Leather</div>
          </div>
          <div
            className={`item ${material === "fabric" ? "item--active" : ""}`}
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
                item.color === chairColor.color ? "item--active" : ""
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
        <div className="configurator__section__title">Cushion color</div>
        <div className="configurator__section__values">
          {cushionColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === cushionColor.color ? "item--active" : ""
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
				<div className="configurator__section__title">Chair Code:</div>
				<div className="configurator__section__values">
					<div
						className={`item`}
						onClick={() => {
							// setArms(1);
							console.log("code is", arms);
						}}
					>
						<div className="item__label">#-----</div>
					</div>
					
				</div>
			</div>

			{/* ARMS */}
			<div className="configurator__section">
				<div className="configurator__section__title">Arm</div>
				<div className="configurator__section__values">
					<div
						className={`item ${arms === 1 ? "item--active" : ""}`}
						onClick={() => {
							setArms(1);
							console.log("Arms are", arms);
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
				</div>
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
