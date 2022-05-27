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
		fetch(`https://desolate-journey-82772.herokuapp.com/orders/${user?.email}`)
			.then((res) => res.json())
			.then((data) => setOrders(data));
	}, []);
	const handleDelete = (id) => {
		fetch(`https://desolate-journey-82772.herokuapp.com/orders/${id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				if (data?.deletedCount) {
					fetch(
						`https://desolate-journey-82772.herokuapp.com/orders/${user?.email}`
					)
						.then((res) => res.json())
						.then((data) => setOrders(data));
				}
			});
	};
	return (
		<div>
			<div class="overflow-x-auto mx-[16px]">
				<h2 className="text-2xl font-bold my-6">
					My Orders: ({orders?.length})
				</h2>
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
