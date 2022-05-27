import React, { useEffect, useState } from "react";

const useAdmin = (email) => {
	const [admin, setAdmin] = useState(false);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	useEffect(() => {
		fetch("https://desolate-journey-82772.herokuapp.com/admin", {
			method: "GET",
			headers: {
				email,
			},
		})
			.then((res) => {
				if (res?.status == 401 || res?.status == 403) {
					setLoading(false);
					setError(true);
				} else {
					return res.json();
				}
			})
			.then((data) => {
				setLoading(false);
				setAdmin(true);
			});
	}, [email]);
	return [admin, loading, error];
};

export default useAdmin;
