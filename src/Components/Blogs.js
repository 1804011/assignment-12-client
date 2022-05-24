import React from "react";

const Blogs = () => {
	return (
		<div className="flex flex-col items-center ">
			<div className="question w-full lg:w-3/4  m-4 px-4">
				<h2 className="text-xl font-bold">
					*What are the different ways to manage state in react?
				</h2>
				<p className="px-6 font-semibold ">
					-state is a usefull features in react.When the value of some
					identities may change then it is managed by state in react js.There
					are some ways in react to manage state, Such as useState,using custom
					hooks,using context or redux apis.For example, using built-in useState
					hooks is one way of managing state.To manage state by useState we
					define a state variable and a function which changes the state and the
					variable are given an initial value.Moreover,when we have common
					portion of code which manage state in different file then we can use
					custom hooks.Finally,We can use context or redux apis to avoid props
					drilling and by doing this we can manage state.
				</p>
			</div>
			<div className="question w-full lg:w-3/4 m-4 px-4">
				<h2 className="text-xl font-bold">
					*Why we don't set the state directly in react?
				</h2>
				<p className="px-6 font-semibold">
					-useState hook is used to manage state in react.When state change is
					experienced by the useState() hooks then it triggers re-rendering the
					ui.If we set the state directly without using the setState function
					react can't identify any change in state hence no re-render is done.So
					we must change the state by using setState function.
				</p>
			</div>
			<div className="question w-full m-4 px-4 lg:w-3/4">
				<h2 className="text-xl font-bold">
					*How will we improve performance of react application?
				</h2>
				<p className="font-semibold px-6">
					-Performance is a key for developing user experience.we can improve
					performance by doing many things such as,keeping component state local
					to our website,avoiding unnecessary re-rendering of ui,by splitting
					the code and also by lazy loading.We have to keep state local as much
					as possible.because state passing by props drilling causes unnecessary
					re-render.We also minimized re-rendering as much as we can.To minimize
					re-rendering we can memoized components.Moreover,We shouldn't load all
					data at once.We should load only necessary portion of data,to do this
					we can load data lazily.
				</p>
			</div>
			<div className="w-full m-4 px-4 lg:w-3/4">
				<h2 className="text-xl font-bold">
					*How to search product by name from an array of products having
					name,price,description?
				</h2>
				<p className="font-semibold px-6">
					-we can filter the array by name to filter out the product.for
					example, if the array containing all products is 'Products' then we
					can code: 'Products.filter(product=&gt;product.name===searchFieldName)
					where 'searchFieldName' is the name entered by the user in search
					field.
				</p>
			</div>
			<div className="w-full m-4 px-4 lg:w-3/4">
				<h2 className="text-xl font-bold">
					*What is unit test? Why should we write unit test?
				</h2>
				<p className="font-semibold px-6">
					-Unit test is a testing process by which we ensure that all code meets
					quality standard before its handle over to production.It ensures
					quality of the code,saving time and money and it helps developer to
					write better and efficient code.We should done unit testing to ensure
					that all portion of our code works correctly as expected by us.And
					also to ensure safety and security of the information.
				</p>
			</div>
		</div>
	);
};

export default Blogs;
