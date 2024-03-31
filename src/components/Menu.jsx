import React from "react";
import "./menu.css"; // Import menu.css file
import Button from "./Button"; // Import your custom Button component

export function Menu() {
	
	return (
		<nav id="colorNav">
			<ul>
				<li className="red">
					
					<img src="./Icon/chair-arm.png" alt="chairBack-image" />{" "}
					
					<DropDownList />
				</li>
				<li className="purple">
				
						<img
							src="./Icon/chair-back.png"
							alt="chairBack-image"
						/>
					
					<ul>
						<li>
							<a href="#">None</a>
						</li>
						<li>
							<a href="#">Classic Back</a>
						</li>
						<li>
							<a href="#">Moderen Back</a>
						</li>
						<li>
							<a href="#">Royal Back</a>
						</li>
					</ul>
				</li>
				<li className="green">
					
						<img
							src="./Icon/chair-cushion.png"
							alt="chairSeat-image"
						/>
					
					<ul>
						<li>
							<a href="#">None</a>
						</li>
						<li>
							<a href="#">Classic Cushion</a>
						</li>
						<li>
							<a href="#">Moderen Cushion</a>
						</li>
						<li>
							<a href="#">Royal Cushion</a>
						</li>
					</ul>
				</li>
				<li className="blue">
					
						<img
							src="./Icon/chair-legs.png"
							alt="chairLegs-image"
						/>
					
					<ul>
						<li>
							<a href="#">Classic Legs</a>
						</li>
						<li>
							<a href="#">Moderen Legs</a>
						</li>
						<li>
							<a href="#">Royal Legs</a>
						</li>
					</ul>
				</li>
				<li className="orange">
					
						<img
							src="./Icon/chair-cushion.png"
							alt="chair sets image"
						/>
					
					<ul>
						<li>
							<a href="#">Classic Seat</a>
						</li>
						<li>
							<a href="#">Modere Seat</a>
						</li>
						<li>
							<a href="#">Royal Seat</a>
						</li>
					</ul>
				</li>
				<li className="yellow">
					
						<img src="./Icon/chair.png" alt="chair sets image" />
					
					<ul>
						<li>
							{/* <a href="#">Classic Set</a>  */}
							<Button size="lg" variant="dropdown" onClick={console.log("yeah pressed")}>
								Classic Set
							</Button>
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


	function DropDownList() {
		return (
			<ul>
				<li>
					<a href="#">None</a>
				</li>
				<li>
					<a href="#">Classic Arm</a>
				</li>
				<li>
					<a href="#">Moderen Arm</a>
				</li>
				<li>
					<a href="#">Royal Arm</a>
				</li>
			</ul>
		);
	}
}
