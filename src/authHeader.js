const authHeader = () => {
	const token = localStorage.getItem("access-token");
	return "Bearer " + token;
};
export default authHeader;
