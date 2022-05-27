import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
const Dashboard = () => {
	const [user, uLoading, uError] = useAuthState(auth);
	const [admin, loading] = useAdmin(user?.email);
	if (uLoading || loading) {
		return <p>Loading...</p>;
	}

	return (
		<div>
			<div class="drawer drawer-mobile">
				<input id="my-drawer" type="checkbox" class="drawer-toggle" />
				<div class="drawer-content">
					<Outlet />
				</div>
				<div class="drawer-side">
					<label for="my-drawer" class="drawer-overlay"></label>
					<ul class="menu p-4 overflow-y-auto w-60 bg-[lightblue] text-base-content">
						<li className="font-semibold my-1 p-0">
							<Link to="/dashboard">My Profile</Link>
						</li>
						{admin || (
							<li className="font-semibold my-1">
								<Link to="my-orders">My Orders</Link>
							</li>
						)}
						{admin || (
							<li className="font-semibold my-1">
								<Link to="add-review">Add Review</Link>
							</li>
						)}
						{admin && (
							<li className="font-semibold my-1">
								<Link to="add-product">Add Product</Link>
							</li>
						)}
						{admin && (
							<li className="font-semibold my-1">
								<Link to="make-admin">Make Admin</Link>
							</li>
						)}
						{admin && (
							<li className="font-semibold my-1">
								<Link to="manage-products">Manage Products</Link>
							</li>
						)}
						{admin && (
							<li className="font-semibold my-1">
								<Link to="manage-all-orders">Manage All Orders</Link>
							</li>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
