import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import BuyPart from "./Components/BuyPart";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path={`/parts/:_id`} element={<BuyPart />}></Route>
			</Routes>
		</div>
	);
}

export default App;
