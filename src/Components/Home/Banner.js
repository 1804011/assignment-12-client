import React from "react";
import parts from "../../images/parts.jpg";
const Banner = () => {
	return (
		<section>
			<div class="hero min-h-screen">
				<div class="hero-content flex-col lg:flex-row-reverse">
					<img src={parts} class="max-w-xs rounded-lg shadow-2xl lg:w-1/2" />
					<div className="lg:w-1/2 ">
						<h1 class="text-5xl font-bold">
							We manufacture various parts of pc
						</h1>
						<p class="py-6">
							We manufacture various parts of pc of different brand such
							as,hp,lenovo,dell etc.If you are need of any computer parts such
							as ssd card,monitor,mouse,keyboard and so on you can contact us
						</p>
						<button class="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
