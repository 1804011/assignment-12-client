import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
	useCreateUserWithEmailAndPassword,
	useSignInWithEmailAndPassword,
	useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import PreLoader from "../PreLoader";

const Login = () => {
	const emailRef = useRef("");
	const passwordRef = useRef("");
	const navigate = useNavigate();
	let location = useLocation();
	const [userInfo, userLoading, userError] = useAuthState(auth);
	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);
	const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

	const handleSubmit = (e) => {
		e.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		signInWithEmailAndPassword(email, password);

		axios
			.post("https://desolate-journey-82772.herokuapp.com/login", { email })
			.then(({ data }) => {
				console.log(data);
				localStorage.setItem("access-token", data?.token);
			});
	};
	let from = location.state?.from?.pathname || "/";
	if (loading || gLoading || userLoading) {
		return <PreLoader />;
	}
	if (userInfo) {
		axios
			.put("https://desolate-journey-82772.herokuapp.com/users", {
				email: userInfo?.email,
				name: userInfo?.displayName,
			})

			.then(({ data }) => {});
	}
	if (gUser) {
		axios
			.post("http://localhost:5000/login", { email: gUser?.user?.email })
			.then(({ data }) => {
				alert(data);
				localStorage.setItem("access-token", data?.token);
			});
	}
	if (user || gUser) {
		navigate(from, { replace: true });
	}
	return (
		<div>
			<div className="flex flex-col items-center">
				<div class="card w-80 lg:w-96 bg-base-100 shadow-xl my-[48px] border-2 mx-[16px]">
					<div class="card-body  flex flex-cols items-center">
						<h2 class="card-title text-center">Login</h2>
						<form
							onSubmit={handleSubmit}
							className="flex flex-col items-center w-full"
						>
							<div class="form-control w-full max-w-xs">
								<label class="label">
									<span class="label-text font-semibold">Email</span>
								</label>
								<input
									type="text"
									placeholder="Enter Your Email"
									ref={emailRef}
									class="input input-bordered w-full max-w-xs"
								/>
								<label class="label">
									<span class="label-text-alt font-semibold text-[red] my-[-4px]">
										{error?.message.includes("user") && <>*wrong email</>}
									</span>
								</label>
							</div>
							<div class="form-control w-full max-w-xs">
								<label class="label">
									<span class="label-text font-semibold">Password</span>
								</label>
								<input
									type="password"
									placeholder="Enter Your Password"
									ref={passwordRef}
									class="input input-bordered w-full max-w-xs"
								/>
								<label class="label my-[-4px]">
									<span class="label-text-alt font-semibold text-[red]">
										{error?.message.includes("password") && (
											<>*wrong password</>
										)}
									</span>
								</label>
							</div>
							<input
								type="submit"
								className="btn btn-dark text-white w-full my-[6px]"
								value="Login"
							/>
							<small className="text-center">
								<span>New to this site?</span>
								<Link to="/signup">
									<span className="text-primary font-semibold"> Signup</span>
								</Link>
							</small>
						</form>
						<div class="divider">OR</div>
						<button
							type="button"
							onClick={() => signInWithGoogle()}
							className="w-full btn btn-dark text-white"
						>
							Continue With Google
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
