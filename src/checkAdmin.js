import React from "react";

const checkAdmin = (email) => {
	const admin = false;
	fetch("https://desolate-journey-82772.herokuapp.com/users/" + email)
		.then((res) => res.json())
		.then((data) => {
			if (data?.role == "admin") {
				admin = true;
			}
		});
	return admin;
};

export default checkAdmin;
