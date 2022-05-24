import React, { useEffect, useState } from "react";

const MyOrders = () => {
	const [orders, setOrders] = useState([]);
	useEffect(() => {
		console.log(9);
	}, []);
	return <div>myorders</div>;
};

export default MyOrders;
