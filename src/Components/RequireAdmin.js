import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import useAdmin from "../Hooks/useAdmin";
import { signOut } from "firebase/auth";
import PreLoader from "./PreLoader";

const RequireAdmin = ({ children }) => {
	let [user, loading] = useAuthState(auth);
	const [admin, isLoading] = useAdmin(user?.email);
	let location = useLocation();
	if (loading || isLoading) {
		return <PreLoader />;
	}
	if (!user || !admin) {
		// Redirect them to the /login page, but save the current location they were
		// trying to go to when they were redirected. This allows us to send them
		// along to that page after they login, which is a nicer user experience
		// than dropping them off on the home page.
		signOut(auth);
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return children;
};
export default RequireAdmin;
