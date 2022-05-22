import React from "react";

const Review = ({ img, name, rating, review }) => {
	return (
		<div class="card lg:w-96 my-[16px] mx-[16px] bg-base-100 shadow-xl border-2">
			<div class="card-body">
				<div className="flex flex-col lg:flex-row items-center">
					<div class="avatar">
						<div class="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
							<img src={img} />
						</div>
					</div>
					<div className="info pl-5 text-center lg:text-left my-[16px] lg:my-[0px] ">
						<h5 className="font-bold ">{name}</h5>
						<h6 className="font-semibold text-[orange] text-xs">
							Rating:{rating}
						</h6>
						<p>{review}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Review;
