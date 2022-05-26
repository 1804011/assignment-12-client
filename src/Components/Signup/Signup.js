import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import {
	useCreateUserWithEmailAndPassword,
	useSignInWithGoogle,
} from "react-firebase-hooks/auth";
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
	const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
	const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

	const onSubmit = async (data) => {
		const { email, password, name } = data;
		await createUserWithEmailAndPassword(email, password);
		await updateProfile({ displayName: name });
	};
	if (loading || gLoading) {
		return <p>Loading...</p>;
	}
	if (user) {
		navigate("/login");
	}
	if (gUser) {
		navigate("/");
	}
	return (
		<div>
			<div className="flex flex-col items-center">
				<div class="card w-80 lg:w-96 bg-base-100 shadow-xl my-[8px] lg:my-[48px] border-2">
					<div class="card-body  flex flex-cols items-center">
						<h2 class="card-title text-center">Signup</h2>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="flex flex-col items-center w-full"
						>
							<div class="form-control w-full max-w-xs">
								<label class="label">
									<span class="label-text font-semibold">Name</span>
								</label>
								<input
									type="text"
									{...register("name", {
										required: true,
									})}
									placeholder="Enter Your Name"
									class="input input-bordered w-full max-w-xs"
								/>
							</div>
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
						<button
							onClick={() => signInWithGoogle()}
							type="button"
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

export default Signup;
