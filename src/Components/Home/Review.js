import React from "react";

const Review = ({ name, rating, review }) => {
	return (
		<div className="my-[12px] mx-[16px] lg:mx-0">
			<div class="card w-96 bg-neutral text-neutral-content max-w-xs">
				<div class="card-body items-center text-center">
					<h2 class="card-title">{name}</h2>
					<p className="text-[orange] text-xl">Rating: {rating}</p>
					<div class="card-actions justify-center">{review}</div>
				</div>
			</div>
		</div>
	);
};

export default Review;
