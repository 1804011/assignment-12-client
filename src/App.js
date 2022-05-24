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
		</div>
	);
}

export default App;
