import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import PreLoader from "../PreLoader";
const MakeAdmin = () => {
	const [logged, loading, error] = useAuthState(auth);
	if (loading) {
		return <PreLoader />;
	}
	const [users, setUsers] = useState([]);
	useEffect(() => {
		fetch("https://desolate-journey-82772.herokuapp.com/users")
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);
	const handleAdmin = (email) => {
		fetch("https://desolate-journey-82772.herokuapp.com/admin/" + email, {
			method: "PUT",
			headers: { email: logged?.email },
		})
			.then((res) => {
				if (res.status == 401 || res.status == 403) {
					localStorage.removeItem("access-token");
					signOut(auth);
					return;
				} else {
					return res.json();
				}
			})
			.then((data) => {
				if (data?.modifiedCount) {
					fetch("https://desolate-journey-82772.herokuapp.com/users")
						.then((res) => res.json())
						.then((data) => setUsers(data));
					toast.success("admin added successfully!");
				} else {
					toast.error("admin addition failed!!");
				}
			});
	};
	return (
		<div>
			<h2 className="text-center my-[18px] text-2xl font-bold">
				All Users: {users?.length}
			</h2>
			<div class="overflow-x-auto mx-[24px] mx-[16px]">
				<table class="table w-full ">
					<thead>
						<tr>
							<th></th>
							<th>Email</th>
							<th>Role</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => {
							const { email } = user;
							return (
								<tr>
									<th>{index + 1}</th>
									<td>{email}</td>
									<td>
										{user?.role == "admin" || (
											<button
												className="btn btn-xs"
												onClick={() => handleAdmin(email)}
											>
												make admin
											</button>
										)}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MakeAdmin;
