import React from "react";

const MyPortfolio = () => {
	return (
		<div className="flex flex-col justify-center p-[24px]">
			<h2 className="text-2xl font-bold text-center">Name: Shariful Islam</h2>
			<p className="text-center font-semibold my-2">
				Email Address: u1804011@student.cuet.ac.bd
			</p>
			<h2 className="text-center font-bold text-2xl my-8">
				Educational Background
			</h2>
			<ul className="text-center font-semibold">
				<li className="my-3">
					B.Sc in Engineering(Persuing) : Chittagong University Of Engineering &
					technology (CUET)
				</li>
				<li className="my-3">
					HSC: Dewanhat City Corporation College, Chittagong
				</li>
				<li className="my-3">SSC: Government Muslim High School, Chittagong</li>
			</ul>
			<h2 className="text-center my-8 text-2xl font-bold">My Skills</h2>
			<div className="flex flex-wrap justify-center">
				<button class="btn btn-sm mx-3 my-2">HTML</button>
				<button class="btn btn-sm mx-3 my-2">CSS</button>
				<button class="btn btn-sm mx-3 my-2">BOOTSTRAP</button>
				<button class="btn btn-sm mx-3 my-2">TAILWIND</button>
				<button class="btn btn-sm mx-3 my-2">Javascript</button>
				<button class="btn btn-sm mx-3 my-2">REACT Js</button>
				<button class="btn btn-sm mx-3 my-2">NODE js</button>
				<button class="btn btn-sm mx-3 my-2">MONGODB</button>
				<button class="btn btn-sm mx-3 my-2">NoSql</button>
				<button class="btn btn-sm mx-3 my-2">Mysql</button>
			</div>
			<h2 className="text-center text-2xl font-bold my-4">My Website</h2>
			<div className="flex flex-wrap justify-center m-4">
				<button className="btn btn-sm mx-3 my-2">
					<a href="https://assignment-11-124e0.firebaseapp.com">
						Electronics Inventory
					</a>
				</button>
				<button className="btn btn-sm mx-3 my-2">
					<a href="https://assignment-10-e432d.firebaseapp.com">
						Health Solution
					</a>
				</button>
				<button className="btn btn-sm mx-3 my-2">
					<a href="https://sharif-assigments9.netlify.app">
						Laptop Review Website
					</a>
				</button>
			</div>
		</div>
	);
};

export default MyPortfolio;
