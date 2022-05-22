import React from "react";

const Part = ({ img, name, description, stock, min, price }) => {
	return (
		<div class="card w-80 bg-base-100 shadow-xl border-2">
			<figure class="px-10 pt-10">
				<img src={img} alt="cpu" class="rounded-xl" />
			</figure>
			<div class="card-body items-center text-center">
				<h2 class="card-title text-4xl">{name}</h2>
				<p className="font-semibold">{description}</p>
				<h6 className="font-semibold">Available Quantity:{stock}</h6>
				<h6 className="font-bold">
					<small>Minimum Order Quantity: {min}</small>
				</h6>
				<h1 className="text-2xl font-semibold my-3">
					Price:<span style={{ color: "orange" }}>${price}</span>
				</h1>
				<div class="card-actions">
					<button class="btn btn-primary">Buy Now</button>
				</div>
			</div>
		</div>
	);
};

export default Part;
