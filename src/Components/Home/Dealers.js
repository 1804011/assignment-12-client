import React from "react";
import dell from "../../images/dell.png";
import hp from "../../images/hp.png";
import acer from "../../images/acer.png";
const Dealers = () => {
	return (
		<div className="flex flex-col items-center lg:my-[64px]">
			<h2 className="text-2xl text-center font-bold mb-8">Our Dealers</h2>

			<div className="gap-10 grid grid-cols-1 lg:grid-cols-3 lg:mx-[48px] lg:w-1/2">
				<img src={hp} alt="hp" className="w-full" height={96} width={96} />
				<img src={dell} alt="dell" className=" w-full" height={96} width={96} />
				<img src={acer} alt="apple" className="w-full" height={96} width={96} />
			</div>
		</div>
	);
};

export default Dealers;
