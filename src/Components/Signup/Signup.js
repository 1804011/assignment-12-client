import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Signup = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth);
	const onSubmit = (data) => {
		const { email, password } = data;
		createUserWithEmailAndPassword(email, password);
	};
	if (loading) {
		return <p>Loading...</p>;
	}
	if (user) {
		navigate("/login");
	}
	return (
		<div>
			<div className="flex flex-col items-center">
				<div class="card w-96 bg-base-100 shadow-xl lg:my-[48px] border-2">
					<div class="card-body  flex flex-cols items-center">
						<h2 class="card-title text-center">Signup</h2>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="flex flex-col items-center w-full"
						>
							<div class="form-control w-full max-w-xs">
								<label class="label">
									<span class="label-text font-semibold">Email</span>
								</label>
								<input
									type="email"
									{...register("email", {
										required: true,
									})}
									placeholder="Enter Your Email"
									class="input input-bordered w-full max-w-xs"
								/>
								<label class="label">
									<span class="label-text-alt font-semibold text-[red] my-[-4px]">
										{(errors.email && <>*email is required</>) ||
											(error && <>*email already in use</>)}
									</span>
								</label>
							</div>
							<div class="form-control w-full max-w-xs">
								<label class="label">
									<span class="label-text font-semibold">Password</span>
								</label>
								<input
									type="password"
									{...register("password", {
										required: true,
										minLength: 6,
									})}
									placeholder="Enter Your Password"
									class="input input-bordered w-full max-w-xs"
								/>
								<label class="label my-[-4px]">
									<span class="label-text-alt font-semibold text-[red]">
										{errors.password && (
											<>*password must be at least 6 character</>
										)}
									</span>
								</label>
							</div>
							<input
								type="submit"
								className="btn btn-dark text-white w-full my-[6px]"
								value="Signup"
							/>
							<small className="text-center">
								<span>Already Registered?</span>
								<Link to="/login">
									<span className="text-primary font-semibold"> Login</span>
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

export default Signup;
