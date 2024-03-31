import React from "react";
import "./menu.css"; // Import menu.css file

export function Menu() {
	const li = 5;
	const iconSize = "150px";
	const menuSize = "60px";
	const unitSize = "45px";
	const menuPosition = `calc((${menuSize} * 2 - ${iconSize}) / -2)`;
	const offset = "60px";
	const deg = 180 / li;

	return (
		<nav id="colorNav">
			<ul>
				<li className="green">
					<a href="#" className="">
						<img
							src="./Icon/chair-back.png"
							alt="chairBack-image"
						/>
					</a>
					<ul>
						<li>
							<a href="#">None</a>
						</li>
						<li>
							<a href="#">Classic</a>
						</li>
						<li>
							<a href="#">Moderen</a>
						</li>
						<li>
							<a href="#">Royal</a>
						</li>
					</ul>
				</li>
				<li className="red">
					<a href="#" className="">
						<img src="./Icon/chair-arm.png" alt="chairBack-image" />{" "}
					</a>
					<ul>
						<li>
							<a href="#">None</a>
						</li>
						<li>
							<a href="#">Classic</a>
						</li>
						<li>
							<a href="#">Moderen</a>
						</li>
						<li>
							<a href="#">Royal</a>
						</li>
					</ul>
				</li>
				<li className="blue">
					<a href="#" className="">
						<img
							src="./Icon/chair-legs.png"
							alt="chairLegs-image"
						/>
					</a>
					<ul>
						<li>
							<a href="#">Classic</a>
						</li>
						<li>
							<a href="#">Moderen</a>
						</li>
						<li>
							<a href="#">Royal</a>
						</li>
					</ul>
				</li>
				<li className="purple">
					<a href="#" className="">
						<img
							src="./Icon/chair-cushion.png"
							alt="chairSeat-image"
						/>
					</a>
					<ul>
						<li>
							<a href="#">None</a>
						</li>
						<li>
							<a href="#">Classic</a>
						</li>
						<li>
							<a href="#">Moderen</a>
						</li>
						<li>
							<a href="#">Royal</a>
						</li>
					</ul>
				</li>
				<li className="yellow">
					<a href="#" className="">
						<img
							src="./Icon/chair.png"
							alt="chair"
						/>
					</a>
					<ul>
						<li>
							<a href="#">Classic Set</a>
						</li>
						<li>
							<a href="#">Modere Set</a>
						</li>
						<li>
							<a href="#">Royal Set</a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	);
}
