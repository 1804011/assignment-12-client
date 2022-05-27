import axios from "axios";
import React, { useState, useEffect } from "react";
const useAdmin = (email) => {
	const [admin, setAdmin] = useState(false);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		axios.get(`http://localhost:5000/users/${email}`).then(({ data }) => {
			setAdmin(data?.role === "admin");
			setLoading(false);
		});
	}, [email]);
	return [admin, loading];
};
export default useAdmin;
