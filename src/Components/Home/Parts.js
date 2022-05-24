import React, { useEffect, useState } from "react";
import { useResolvedPath } from "react-router-dom";
import cpu from "../../images/cpu.jfif";
import keyboard from "../../images/keyboard.jfif";
import monitor from "../../images/monitor.jfif";
import ssd from "../../images/ssd.jfif";
import Part from "./Part";
const Parts = () => {
	const [parts, setParts] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/parts")
			.then((res) => res.json())
			.then((data) => setParts(data));
	}, []);
	return (
		<div className="flex flex-col items-center">
			<h2 className="text-4xl text-center my-8 font-semibold">
				Computer Parts to manufacture
			</h2>
			<div className="grid lg:grid-cols-4 sm:grid-cols-1 my-[24px] gap-3">
				{parts.map((part) => (
					<Part {...part} />
				))}
			</div>
		</div>
	);
};

export default Parts;
