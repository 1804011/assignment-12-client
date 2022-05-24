import React from "react";
import { useParams } from "react-router-dom";
import Part from "./Home/Part";
import Header from "./Shared/Header";

const BuyPart = () => {
	const { _id } = useParams();
	return (
		<div>
			<div className="flex justify-center my-[36px]">
				<div class="card border-2 w-96 bg-base-100 shadow-xl lg:p-12 mx-[16px] lg:m-0">
					<figure class="px-10 pt-10">
						<img src={""} alt="cpu" class="rounded-xl" />
					</figure>
					<div class="card-body items-center text-center">
						<h2 class="card-title text-4xl">CPU</h2>
						<p className="font-semibold"></p>
						<h6 className="font-semibold">Available Quantity:23</h6>
						<h6 className="font-bold">
							<small>Minimum Order Quantity: 12</small>
						</h6>
						<h1 className="text-2xl font-semibold my-3">
							Price:<span style={{ color: "orange" }}>${67}</span>
						</h1>
						<div class="card-actions">
							<label for="my-modal-3" class="btn modal-button btn-primary">
								Purchase
							</label>
						</div>

						<input type="checkbox" id="my-modal-3" class="modal-toggle" />
						<div class="modal">
							<div class="modal-box relative">
								<label
									for="my-modal-3"
									class="btn btn-sm btn-circle absolute right-2 top-2"
								>
									✕
								</label>
								<h2 className="text-center font-semibold m-4">
									Please provide purchase information
								</h2>
								<form className="flex flex-col items-center ">
									<div class="form-control w-full max-w-xs">
										<label class="label">
											<span class="label-text font-semibold">Name</span>
										</label>
										<input
											type="text"
											placeholder="Your Name"
											class="input input-bordered w-full max-w-xs"
										/>
									</div>
									<div class="form-control w-full max-w-xs">
										<label class="label">
											<span class="label-text font-semibold">Email</span>
										</label>
										<input
											type="email"
											placeholder="Enter Your Email"
											class="input input-bordered w-full max-w-xs"
										/>
									</div>
									<div class="form-control w-full max-w-xs">
										<label class="label">
											<span class="label-text font-semibold">Phone Number</span>
										</label>
										<input
											type="text"
											placeholder="Enter Your Mobile No"
											class="input input-bordered w-full max-w-xs"
										/>
									</div>
									<div class="form-control w-full max-w-xs">
										<label class="label">
											<span class="label-text font-semibold">
												Order Quantity
											</span>
										</label>
										<input
											type="number"
											min={5}
											value={5}
											placeholder="Enter Order Quantity"
											class="input input-bordered w-full max-w-xs"
										/>
									</div>

									<div class="form-control w-full max-w-xs">
										<label class="label">
											<span class="label-text font-semibold">Address</span>
										</label>
										<input
											type="text"
											placeholder="Provide Your Address"
											class="input input-bordered w-full max-w-xs"
										/>
									</div>

									<input
										type="submit"
										value="Confirm Purchase"
										className="btn btn-primary w-full max-w-xs my-4"
									/>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BuyPart;
