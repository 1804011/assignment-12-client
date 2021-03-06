import React, { useState } from "react";

const MyOrder = ({
	_id,
	img,
	part,
	orderQuantity,
	price,
	payment,
	index,
	handleDelete,
}) => {
	const [confirm, setConfirm] = useState(false);
	if (confirm) {
		handleDelete(_id);
		setConfirm(false);
	}
	return (
		<>
			<tr>
				<th>{_id}</th>
				<td>
					<img src={img} width={36} height={36} alt={name} />
				</td>
				<td>{part}</td>
				<td>{orderQuantity}</td>
				<td>{price}</td>
				<td>
					<label for={_id} className="btn btn-xs">
						delete
					</label>
				</td>
				<td>
					<button className="btn btn-xs">unpaid</button>
				</td>
			</tr>
			<input type="checkbox" id={_id} class="modal-toggle" />
			<div class="modal modal-bottom sm:modal-middle">
				<div class="modal-box">
					<p class="py-4">Do you want to delete this item?</p>
					<div class="modal-action">
						<label for={_id} class="btn" onClick={() => setConfirm(true)}>
							Confirm
						</label>
						<label for={_id} class="btn" onClick={() => setConfirm(false)}>
							Cancel
						</label>
					</div>
				</div>
			</div>
		</>
	);
};

export default MyOrder;
