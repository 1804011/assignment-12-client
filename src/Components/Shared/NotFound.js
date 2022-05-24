import React from "react";
import notFound from "../../images/notFound.gif";
const NotFound = () => {
	return (
		<div>
			<img
				src={notFound}
				alt="notFound"
				style={{
					height: "100vh",
					width: "100vw",
				}}
			/>
		</div>
	);
};

export default NotFound;
