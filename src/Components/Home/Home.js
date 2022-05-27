import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Dealers from "./Dealers";
import Parts from "./Parts";
import Question from "./Question";
import Reviews from "./Reviews";

const Home = () => {
	return (
		<div>
			<Banner />
			<Parts />
			<BusinessSummary />
			<Dealers />
			<Reviews />
			<Question />
			<Footer />
		</div>
	);
};

export default Home;
