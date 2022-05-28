import axios from "axios";
import React, { useState, useEffect } from "react";
import authHeader from "../authHeader";
const useAdmin = (email) => {
	const [admin, setAdmin] = useState(false);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		// axios.get(`https://desolate-journey-82772.herokuapp.com/users/${email}`).then(({ data }) => {
		// 	setAdmin(data?.role === "admin");
		// 	setLoading(false);
		// });
		fetch(`https://desolate-journey-82772.herokuapp.com/users/${email}`, {
			method: "GET",
			headers: {
				authorization: authHeader(),
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setAdmin(data?.role == "admin");
				setLoading(false);
			});
	}, [email]);
	return [admin, loading];
};
export default useAdmin;
