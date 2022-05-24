import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
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
						<li className="font-semibold my-1">
							<Link to="my-orders">My Orders</Link>
						</li>
						<li className="font-semibold my-1">
							<Link to="my-reviews">My Reviews</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
