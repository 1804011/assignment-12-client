import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
	useCreateUserWithEmailAndPassword,
	useSignInWithEmailAndPassword,
	useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
	const emailRef = useRef("");
	const passwordRef = useRef("");
	const navigate = useNavigate();
	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);
	const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
	const handleSubmit = (e) => {
		e.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		signInWithEmailAndPassword(email, password);
	};
	if (loading || gLoading) {
		return <p>Loading...</p>;
	}
	if (user || gUser) {
		navigate("/");
	}
	return (
		<div>
			<div className="flex flex-col items-center">
				<div class="card w-96 bg-base-100 shadow-xl lg:my-[48px] border-2">
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
						<button type="button" className="w-full btn btn-dark text-white">
							Continue With Google
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
