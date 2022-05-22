import React from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import Banner from "./Banner";
import Parts from "./Parts";
import Reviews from "./Reviews";

const Home = () => {
	return (
		<div>
			<Header />
			<Banner />
			<Parts />
			<Reviews />
			<Footer />
		</div>
	);
};

export default Home;
