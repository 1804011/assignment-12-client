import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import BuyPart from "./Components/BuyPart";
import Header from "./Components/Shared/Header";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/signup" element={<Signup />}></Route>

				<Route path={`/parts/:_id`} element={<BuyPart />}></Route>
			</Routes>
		</div>
	);
}

export default App;
