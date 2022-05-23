import React from "react";

const Question = () => {
	return (
		<div>
			<div className="flex flex-col lg:flex-row items-center bg-[violet] w-4/5 rounded-xl lg:w-2/3 mx-auto border-rounded my-[48px] p-[24px]">
				<div className="left">
					<h2 className="text-2xl font-semibold">Do You Have Any Question?</h2>
					<p className=" my-[16px] lg:my-0">
						If you have any confusion about our services don't hesitate to ask
					</p>
				</div>
				<div className="right lg:w-3/4 w-full lg:px-[24px]">
					<form className="flex flex-col">
						<input
							type="text"
							placeholder="Your Name"
							class="input my-[4px] w-full"
						/>
						<input
							type="email"
							placeholder="Your Email"
							class="input my-[4px] w-full"
						/>
						<textarea
							class="textarea w-full my-[4px]"
							placeholder="Your Message"
							style={{
								resize: "none",
							}}
						></textarea>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Question;
