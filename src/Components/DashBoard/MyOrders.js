import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MyOrder from "./MyOrder";

const MyOrders = () => {
	const [user, loading, error] = useAuthState(auth);

	if (loading) {
		return <p>Loading...</p>;
	}
	const [orders, setOrders] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/orders/${user?.email}`)
			.then((res) => res.json())
			.then((data) => setOrders(data));
	}, []);
	const handleDelete = (id) => {
		fetch(`http://localhost:5000/orders/${id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				if (data?.deletedCount) {
					fetch(`http://localhost:5000/orders/${user?.email}`)
						.then((res) => res.json())
						.then((data) => setOrders(data));
				}
			});
	};
	return (
		<div>
			<div class="overflow-x-auto mx-[16px]">
				<table class="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>Image</th>
							<th>Parts</th>
							<th>Order Quantity</th>
							<th>Price</th>
							<th>Action</th>
							<th>Payment Status</th>
						</tr>
					</thead>
					<tbody>
						{orders.map((order, index) => (
							<MyOrder
								{...order}
								key={index}
								index={index + 1}
								handleDelete={handleDelete}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyOrders;
