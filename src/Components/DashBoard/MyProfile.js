import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import authHeader from "../../authHeader";
import auth from "../../firebase.init";
import PreLoader from "../PreLoader";

const MyProfile = () => {
	const [user, loading, error] = useAuthState(auth);
	const [profile, setProfile] = useState({});
	const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
	if (loading) {
		return <PreLoader />;
	}
	useEffect(() => {
		fetch(`https://desolate-journey-82772.herokuapp.com/users/${user?.email}`, {
			method: "GET",
			headers: {
				authorization: authHeader(),
			},
		})
			.then((res) => res.json())
			.then((data) => setProfile(data));
	}, []);
	const { name, email, location, social, phone, institution } = profile;
	const nameRef = useRef(name);
	const instituteRef = useRef(institution);
	const locationRef = useRef(location);
	const phoneRef = useRef(phone);
	const linkedinRef = useRef(social);
	const handleSubmit = async (e) => {
		e.preventDefault();
		await updateProfile({ displayName: nameRef.current?.value });

		const data = {
			name: nameRef.current?.value,
			location: locationRef.current?.value,
			social: linkedinRef.current?.value,
			phone: phoneRef.current?.value,
			institution: instituteRef.current?.value,
		};
		axios
			.put(
				`https://desolate-journey-82772.herokuapp.com/users/${user?.email}`,
				data
			)
			.then(({ data }) => {
				if (data?.acknowledged) {
					toast.success("profile update successfull");
				} else {
					toast.error("update is failed");
				}
			});
	};
	return (
		<div className="lg:my-8 mx-4 lg:mx-12">
			<h2 className="text-2xl text-center font-bold">My Profile</h2>

			<form className="flex flex-col w-full max-w-xs" onSubmit={handleSubmit}>
				<div class="form-control w-full max-w-xs">
					<label class="label">
						<span class="label-text font-semibold">Name</span>
					</label>
					<input
						type="text"
						placeholder="Your Name"
						ref={nameRef}
						onChange={() => {
							setProfile({ ...profile, name: nameRef.current?.value });
						}}
						value={name}
						required
						class="input input-bordered w-full max-w-xs"
					/>
				</div>
				<div class="form-control w-full max-w-xs">
					<label class="label">
						<span class="label-text font-semibold">Email</span>
					</label>
					<input
						type="email"
						value={email}
						required
						placeholder="Your Email"
						class="input input-bordered w-full max-w-xs"
						readOnly
					/>
				</div>
				<div class="form-control w-full max-w-xs">
					<label class="label">
						<span class="label-text font-semibold">Institution</span>
					</label>
					<input
						type="text"
						ref={instituteRef}
						value={institution}
						onChange={() =>
							setProfile({
								...profile,
								institution: instituteRef.current?.value,
							})
						}
						placeholder="Your Institution"
						class="input input-bordered w-full max-w-xs"
					/>
				</div>
				<div class="form-control w-full max-w-xs">
					<label class="label">
						<span class="label-text font-semibold">Location</span>
					</label>
					<input
						type="text"
						ref={locationRef}
						value={location}
						onChange={() =>
							setProfile({ ...profile, location: locationRef.current?.value })
						}
						placeholder="Your Location"
						class="input input-bordered w-full max-w-xs"
					/>
				</div>
				<div class="form-control w-full max-w-xs">
					<label class="label">
						<span class="label-text font-semibold">Phone No</span>
					</label>
					<input
						type="text"
						ref={phoneRef}
						value={phone}
						onChange={() =>
							setProfile({ ...profile, phone: phoneRef.current?.value })
						}
						placeholder="Your Phone"
						class="input input-bordered w-full max-w-xs"
					/>
				</div>
				<div class="form-control w-full max-w-xs">
					<label class="label">
						<span class="label-text font-semibold">LinkedIn Profile Link</span>
					</label>
					<input
						type="url"
						ref={linkedinRef}
						value={social}
						placeholder="Your LinkedIn profile link"
						class="input input-bordered w-full max-w-xs"
					/>
					<input
						type="submit"
						value="Save"
						className="btn w-full max-w-xs my-4"
					/>
				</div>
			</form>
		</div>
	);
};

export default MyProfile;
