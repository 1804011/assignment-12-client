import React, { useState } from "react";

const ManageProduct = ({ _id, img, name, handleDelete }) => {
	const [confirm, setConfirm] = useState(false);

	if (confirm) {
		handleDelete(_id);
		setConfirm(false);
	}

	return (
		<tr>
			<th>{_id}</th>
			<td>{name}</td>
			<td>
				<img src={img} alt={name} width={36} height={36} />
			</td>
			<td>
				<label for={_id} class="btn btn-xs">
					delete
				</label>
			</td>

			<input type="checkbox" id={_id} class="modal-toggle" />

			<div class="modal modal-bottom sm:modal-middle">
				<div class="modal-box">
					<p class="py-4">Do you want to delete this item?</p>
					<div class="modal-action">
						<label for={_id} class="btn" onClick={() => setConfirm(true)}>
							confirm
						</label>
						<label for={_id} class="btn" onClick={() => setConfirm(false)}>
							cancel
						</label>
					</div>
				</div>
			</div>
		</tr>
	);
};

export default ManageProduct;
