import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import BuyPart from "./Components/BuyPart";
import Header from "./Components/Shared/Header";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import RequireAuth from "./Components/RequireAuth";

import Blogs from "./Components/Blogs";
import MyPortfolio from "./Components/MyPortfolio";
import NotFound from "./Components/Shared/NotFound";
import Dashboard from "./Components/DashBoard/Dashboard";
import MyOrders from "./Components/DashBoard/MyOrders";
import AddReview from "./Components/DashBoard/AddReview";
import MyProfile from "./Components/DashBoard/MyProfile";
import AddProduct from "./Components/DashBoard/AddProduct";
import MakeAdmin from "./Components/DashBoard/MakeAdmin";
import ManageProducts from "./Components/DashBoard/ManageProducts";
import RequireAdmin from "./Components/RequireAdmin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/signup" element={<Signup />}></Route>
				<Route path="/blogs" element={<Blogs />}></Route>
				<Route path="/portfolio" element={<MyPortfolio />}></Route>
				<Route
					path="/dashboard"
					element={
						<RequireAuth>
							<Dashboard />
						</RequireAuth>
					}
				>
					<Route index element={<MyProfile />}></Route>
					<Route path="dashboard" element={<MyProfile />}></Route>
					<Route path="my-orders" element={<MyOrders />}></Route>
					<Route path="add-review" element={<AddReview />}></Route>
					<Route
						path="add-product"
						element={
							<RequireAdmin>
								<AddProduct />
							</RequireAdmin>
						}
					></Route>
					<Route
						path="make-admin"
						element={
							<RequireAdmin>
								<MakeAdmin />
							</RequireAdmin>
						}
					></Route>
					<Route
						path="manage-products"
						element={
							<RequireAdmin>
								<ManageProducts />
							</RequireAdmin>
						}
					></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Route>
				<Route path="*" element={<NotFound />}></Route>

				<Route
					path={`/parts/:_id`}
					element={
						<RequireAuth>
							<BuyPart />
						</RequireAuth>
					}
				></Route>
			</Routes>
			<ToastContainer />
		</div>
	);
}

export default App;
