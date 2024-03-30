import React from "react";

export function Menu() {
	const li = 5;
	const iconSize = "150px";
	const menuSize = "60px";
	const unitSize = "45px";
	const menuPosition = `calc((${menuSize} * 2 - ${iconSize}) / -2)`;
	const offset = "60px";
	const deg = 180 / li;

	return (
		<div className="relative flex bg-[#353535] h-full">
			<div className="absolute top-1/2 left-1/2 rounded-full outline cursor-pointer h-[60px] w-[60px] text-center text-red-200 leading-[60px] font-bold m-2 text-1.75xl">
				MENU
				<ul className="menu absolute top-[-60px] left-[-60px] border-transparent cursor-default rounded-full scale-1 transition-transform duration-1400 delay-70 text-black">
					{[...Array(li)].map((_, index) => (
						<li
							key={index}
							className="spread absolute top-[30px] left-[30px] transition-all duration-500 delay-100"
							style={{
								transformOrigin: `${offset} ${offset}`,
								transform: `rotate(${
									45 + deg * (index + 1)
								}deg)`,
							}}
						>
							<a
								href="#"
								className="unit absolute bg-white text-[60%] no-underline w-[50px] h-[20px] leading-[20px] text-dodgerblue rounded-full transition duration-600"
								style={{
									transform: `rotate(${
										-deg * (index + 1) + 720 - 45
									}deg)`,
								}}
							>
								{index +1}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
