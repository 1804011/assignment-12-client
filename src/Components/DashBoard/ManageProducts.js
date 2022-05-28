import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import PreLoader from "../PreLoader";
import ManageProduct from "./ManageProduct";

const ManageProducts = () => {
	const {
		data: parts,
		isLoading,
		refetch,
	} = useQuery("users", () =>
		fetch("http://localhost:5000/parts").then((res) => res.json())
	);
	if (isLoading) {
		return <PreLoader />;
	}

	// const [parts, setParts] = useState([]);
	// useEffect(() => {
	// fetch("https://desolate-journey-82772.herokuapp.com/parts", {})
	// 	.then((res) => res.json())
	// 	.then((data) => setParts(data));
	// }, []);
	const handleDelete = (id) => {
		fetch(`https://desolate-journey-82772.herokuapp.com/parts/${id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				if (data?.deletedCount) {
					refetch();
				}
			});
	};
	return (
		<div className="m-8">
			<h2 className="text-2xl text-center font-bold m-3">
				Manage Products: ({parts?.length})
			</h2>
			<div class="overflow-x-auto">
				<table class="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Image</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{parts.map((part) => (
							<ManageProduct
								{...part}
								key={part._id}
								handleDelete={handleDelete}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ManageProducts;
