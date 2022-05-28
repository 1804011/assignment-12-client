import axios from "axios";
import React, { useRef } from "react";
import { toast } from "react-toastify";

const AddProduct = () => {
	const partRef = useRef("");
	const imgRef = useRef("");
	const stockRef = useRef("");
	const minRef = useRef("");
	const detailRef = useRef("");
	const priceRef = useRef("");
	const handleSubmit = (e) => {
		e.preventDefault();

		const name = partRef.current?.value;

		const img = imgRef.current?.value;
		const stock = stockRef.current?.value;
		const min = minRef.current?.value;
		const price = priceRef.current?.value;
		const description = detailRef.current?.value;
		axios
			.post(`https://desolate-journey-82772.herokuapp.com/parts`, {
				name,
				img,
				stock,
				min,
				price,
				description,
			})
			.then(({ data }) => {
				if (data?.acknowledged) {
					partRef.current.value =
						imgRef.current.value =
						stockRef.current.value =
						minRef.current.value =
						detailRef.current.value =
						priceRef.current.value =
							"";
					toast.success("product added successfully");
				} else {
					toast.error("product addition failed");
				}
			});
	};
	return (
		<div className="lg:m-8 mx-4  flex justify-center">
			<form
				className="flex flex-col items-center w-full max-w-xs"
				onSubmit={handleSubmit}
			>
				<div class="form-control w-full max-w-xs">
					<label class="label">
						<span class="label-text font-semibold">Part Name</span>
					</label>
					<input
						type="text"
						required
						ref={partRef}
						placeholder="Enter Part"
						class="input input-bordered w-full max-w-xs"
					/>
				</div>
				<div class="form-control w-full max-w-xs">
					<label class="label">
						<span class="label-text font-semibold">Image Url</span>
					</label>
					<input
						type="url"
						ref={imgRef}
						required
						placeholder="Enter image url"
						class="input input-bordered w-full max-w-xs"
					/>
				</div>
				<div class="form-control w-full max-w-xs">
					<label class="label">
						<span class="label-text font-semibold">Available Stock</span>
					</label>
					<input
						type="number"
						required
						ref={stockRef}
						placeholder="Enter stock size"
						class="input input-bordered w-full max-w-xs"
					/>
				</div>
				<div class="form-control w-full max-w-xs">
					<label class="label">
						<span class="label-text font-semibold">Minimum Order Quantity</span>
					</label>
					<input
						type="number"
						required
						ref={minRef}
						placeholder="Enter minimum order Quantity"
						class="input input-bordered w-full max-w-xs"
					/>
				</div>
				<div class="form-control w-full max-w-xs">
					<label class="label">
						<span class="label-text font-semibold">Price</span>
					</label>
					<input
						type="number"
						required
						ref={priceRef}
						placeholder="Enter price"
						class="input input-bordered w-full max-w-xs"
					/>
				</div>
				<div class="form-control w-full max-w-xs">
					<label class="label">
						<span class="label-text font-semibold">Description</span>
					</label>
					<textarea
						type="text"
						required
						ref={detailRef}
						placeholder="Enter description"
						class="textarea textarea-bordered w-full max-w-xs"
						style={{ resize: "none" }}
					/>
				</div>
				<input
					type="submit"
					value="Add Product"
					className="btn btn-dark w-full max-w-xs my-4"
				/>
			</form>
		</div>
	);
};

export default AddProduct;
