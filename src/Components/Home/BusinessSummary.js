import React from "react";
import user from "../../images/user.png";
import star from "../../images/star.png";
import briefing from "../../images/briefing.png";
const BusinessSummary = () => {
	return (
		<div className="lg:my-[48px]">
			<h2 className="text-2xl text-center font-semibold my-[36px]">
				Millions of Users Trust us
			</h2>
			<div className="flex justify-center flex-wrap">
				<div class="card w-80 border-2  bg-base-100 shadow-xl mx-[16px] my-[16px]">
					<div class="card-body text-center flex flex-col items-center ">
						<img src={user} alt="user" height={76} width={76} />

						<h1 className="text-4xl font-semibold text-[orange]">22k+</h1>
						<p className="text-xl font-bold">Users</p>
					</div>
				</div>
				<div class="card w-80  border-2 bg-base-100 shadow-xl mx-[16px] my-[16px]">
					<div class="card-body text-center flex flex-col items-center">
						<img src={star} alt="rating" width={76} height={76} />
						<h1 className="text-4xl font-semibold text-[orange]">4.8</h1>
						<p className="text-2xl font-bold">Ratings</p>
					</div>
				</div>
				<div class="card w-80 border-2  bg-base-100 shadow-xl mx-[16px] my-[16px]">
					<div class="card-body text-center flex flex-col items-center">
						<img src={briefing} alt="project" width={76} height={76} />
						<h1 className="text-4xl font-semibold text-[orange]">50+</h1>
						<p className="text-2xl font-bold">Completed Projects</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BusinessSummary;
