import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";
import Part from "./Home/Part";
import Header from "./Shared/Header";

const BuyPart = () => {
	const { _id } = useParams();
	const [part, setPart] = useState({});
	const [user, loading, error] = useAuthState(auth);
	const [orderQuantity, setOrderQuantity] = useState(0);
	const [modal, setModal] = useState(true);
	const addressRef = useRef("");
	const phoneRef = useRef("");
	useEffect(() => {
		fetch(`https://desolate-journey-82772.herokuapp.com/parts/${_id}`)
			.then((res) => res.json())
			.then((data) => setPart(data));
	}, []);
	let { img, name, description, price, min, stock } = part;
	price = parseInt(price);
	min = parseInt(min);
	stock = parseInt(stock);
	useEffect(() => {
		setOrderQuantity(parseInt(min));
	}, []);

	const handlePurchase = (e) => {
		e.preventDefault();
		const phone = phoneRef.current.value;
		const address = addressRef.current.value;
		const service = name;
		const order = {
			name: user?.displayName,
			email: user?.email,
			part: name,
			price,
			orderQuantity,
			phone,
			address,
			img,
		};
		fetch("https://desolate-journey-82772.herokuapp.com/orders", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(order),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data?.acknowledged) {
					setModal(false);
					fetch(`https://desolate-journey-82772.herokuapp.com/parts/${_id}`, {
						method: "PUT",
						headers: {
							"content-type": "application/json",
						},
						body: JSON.stringify(order),
					})
						.then((res) => res.json())
						.then(() => {});
					toast.success("order successfull");
				} else {
					toast.error("order failed");
				}
			});
	};
	return (
		<div>
			<div className="flex justify-center my-[36px]">
				<div class="card border-2 w-96 bg-base-100 shadow-xl lg:p-12 mx-[16px] lg:m-0">
					<figure class="px-10 pt-10">
						<img src={img} alt={`${name}`} class="rounded-xl" />
					</figure>
					<div class="card-body items-center text-center">
						<h2 class="card-title text-4xl">{name}</h2>
						<p className="font-semibold">{description}</p>
						<h6 className="font-semibold">
							Available Quantity:
							<span className="text-[orange]">{stock}</span>
						</h6>
						<h6 className="font-bold">
							<small>
								Minimum Order Quantity:
								<span className="text-[orange]"> {min}</span>
							</small>
						</h6>
						<h1 className="text-2xl font-semibold my-3">
							Price:<span style={{ color: "orange" }}>${price}</span>
						</h1>
						<div class="card-actions">
							<label for="my-modal-3" class="btn modal-button btn-primary">
								Purchase
							</label>
						</div>

						<input type="checkbox" id="my-modal-3" class="modal-toggle" />
						{modal && (
							<div class="modal">
								<div class="modal-box relative">
									<label
										for="my-modal-3"
										class="btn btn-sm btn-circle absolute right-2 top-2"
									>
										✕
									</label>
									<h2 className="text-center text-3xl font-semibold m-4 my-0">
										{name}
									</h2>
									<form
										onSubmit={handlePurchase}
										className="flex flex-col items-center"
									>
										<div class="form-control w-full max-w-xs">
											<label class="label">
												<span class="label-text font-semibold">Name</span>
											</label>
											<input
												type="text"
												value={user?.displayName}
												placeholder="Your Name"
												class="input input-bordered w-full max-w-xs"
												readOnly
											/>
										</div>
										<div class="form-control w-full max-w-xs">
											<label class="label">
												<span class="label-text font-semibold">Email</span>
											</label>
											<input
												type="email"
												placeholder="Enter Your Email"
												value={user?.email}
												class="input input-bordered w-full max-w-xs"
												readOnly
											/>
										</div>
										<div class="form-control w-full max-w-xs">
											<label class="label">
												<span class="label-text font-semibold">
													Phone Number
												</span>
											</label>
											<input
												type="text"
												required
												ref={phoneRef}
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
												min={min}
												max={stock}
												required
												onChange={(e) =>
													setOrderQuantity(parseInt(e.target.value))
												}
												value={orderQuantity}
												placeholder="Enter Order Quantity"
												class="input input-bordered w-full max-w-xs"
											/>
											<label class="label">
												<span class="label-text-alt text-[red] font-semibold">
													{(orderQuantity < min && (
														<>*Order Quantity must be at least {min}</>
													)) ||
														(orderQuantity > stock && (
															<>*Order quantity can't exceed stock size</>
														))}
												</span>
											</label>
										</div>

										<div class="form-control w-full max-w-xs mt-[-12px]">
											<label class="label">
												<span class="label-text font-semibold">
													Your Address
												</span>
											</label>
											<textarea
												class="textarea textarea-bordered w-full max-w-xs"
												placeholder="Your Address"
												required
												ref={addressRef}
												style={{ resize: "none" }}
											></textarea>
										</div>

										<input
											type="submit"
											value="Confirm Purchase"
											disabled={orderQuantity < min || orderQuantity > stock}
											className="btn btn-primary w-full max-w-xs my-4"
										/>
									</form>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BuyPart;
