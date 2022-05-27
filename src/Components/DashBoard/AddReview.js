import axios from "axios";
import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddReview = () => {
	const [user, loading, error] = useAuthState(auth);
	if (loading) {
		return <p>Loading...</p>;
	}
	const ratingRef = useRef("");
	const reviewRef = useRef("");
	const handleSubmit = (e) => {
		e.preventDefault();
		const rating = ratingRef.current.value;
		const review = reviewRef.current.value;
		axios
			.post("https://desolate-journey-82772.herokuapp.com/reviews", {
				rating,
				review,
				name: user?.displayName,
			})
			.then(({ data }) => {
				if (data?.acknowledged) {
					ratingRef.current.value = reviewRef.current.value = "";
				}
			});
	};
	return (
		<div className="my-[24px] mx-auto lg:w-1/3">
			<form className="flex flex-col items-center" onSubmit={handleSubmit}>
				<div class="form-control w-full max-w-xs">
					<label class="label">
						<span class="label-text font-semibold">Enter Rating</span>
					</label>
					<input
						type="number"
						min={1}
						max={5}
						ref={ratingRef}
						placeholder="Enter Rating"
						class="input input-bordered w-full max-w-xs"
					/>
					<label class="label">
						{/* <span class="label-text-alt">Alt label</span> */}
					</label>
				</div>
				<div class="form-control w-full max-w-xs">
					<label class="label">
						<span class="label-text font-semibold">Enter Your Review</span>
					</label>
					<textarea
						class=" input input-bordered h-24 w-full max-w-xs"
						placeholder="Enter Your Review"
						required
						ref={reviewRef}
						style={{ resize: "none" }}
					></textarea>
					<label class="label">
						{/* <span class="label-text-alt">Your bio</span> */}
					</label>
				</div>
				<input
					type="submit"
					value="Add"
					className="btn btn-dark w-full max-w-xs"
				/>
			</form>
		</div>
	);
};

export default AddReview;
