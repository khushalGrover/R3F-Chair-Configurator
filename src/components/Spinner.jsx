import React, { useState } from "react";
import Button from "./Button";

const Spinner = ({ type, items, loop, step = 1, max, min }) => {
	const [value, setValue] = useState(items[0]);
	const [index, setIndex] = useState(0);

	const handleIncrement = () => {
		if (type === "number") {
			let newValue = parseInt(value) + parseInt(step);
			if (!max || newValue <= max) {
				setValue(newValue);
			} else if (loop) {
				setValue(min);
			} else {
				setValue(max);
			}
		} else if (type === "text") {
			let newIndex = index + 1;
			if (newIndex < items.length) {
				setValue(items[newIndex]);
				setIndex(newIndex);
			} else if (loop) {
				setValue(items[0]);
				setIndex(0);
			}
		}
	};

	const handleDecrement = () => {
		if (type === "number") {
			let newValue = parseInt(value) - parseInt(step);
			if (!min || newValue >= min) {
				setValue(newValue);
			} else if (loop) {
				setValue(max);
			} else {
				setValue(min);
			}
		} else if (type === "text") {
			let newIndex = index - 1;
			if (newIndex >= 0) {
				setValue(items[newIndex]);
				setIndex(newIndex);
			} else if (loop) {
				setValue(items[items.length - 1]);
				setIndex(items.length - 1);
			}
		}
	};

	return (
		<div className="col-md-3 w-auto ">
			<div className="form-group form-spinner ">
				{/* <label htmlFor={`spinner-${ty</div>pe}`}>Spinner {type}</label> */}
				<div className="spinner-control">
					<Button size="lg" variant="arrow" onClick={handleDecrement}>
						&lt;
					</Button>
					<input
						type={type}
						step={step}
						max={max}
						min={min}
						value={value}
						readOnly
						id={`spinner-${type}`}
						className="spinner"
					/>
					<Button size="lg" variant="arrow" onClick={handleIncrement}>
                    &gt;
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Spinner;
