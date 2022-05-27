import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		fetch("https://desolate-journey-82772.herokuapp.com/reviews")
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);
	return (
		<div className="my-[48px]">
			<h2 className="text-4xl text-center font-semibold my-[16px]">
				Customer reviews
			</h2>
			<div className="grid grid-cols-1 lg:grid-cols-3 lg:px-[48px] my-[48px]">
				{reviews.map((review) => (
					<Review {...review} key={review._id}></Review>
				))}
			</div>
		</div>
	);
};

export default Reviews;
