import React from "react";

const MyPortfolio = () => {
	return (
		<div className="flex flex-col justify-center p-[24px]">
			<h2 className="text-2xl font-bold text-center">Name: Shariful Islam</h2>
			<p className="text-center font-semibold my-2">
				Email Address: u1804011@student.cuet.ac.bd
			</p>
			<h2 className="text-center font-bold text-2xl my-8">
				Educational Background
			</h2>
			<ul className="text-center font-semibold">
				<li className="my-3">
					B.Sc in Engineering(Persuing) : Chittagong University Of Engineering &
					technology (CUET)
				</li>
				<li className="my-3">
					HSC: Dewanhat City Corporation College, Chittagong
				</li>
				<li className="my-3">SSC: Government Muslim High School, Chittagong</li>
			</ul>
			<h2 className="text-center my-8 text-2xl font-bold">My Skills</h2>
			<div className="flex flex-wrap justify-center"></div>
		</div>
	);
};

export default MyPortfolio;
