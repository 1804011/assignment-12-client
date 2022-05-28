import React from "react";
import { HashLoader } from "react-spinners";

const PreLoader = ({ loading, color, size }) => {
	return (
		<div className="flex justify-center items-center">
			<HashLoader loading={loading} size={size || 150} color={color} />
		</div>
	);
};

export default PreLoader;
