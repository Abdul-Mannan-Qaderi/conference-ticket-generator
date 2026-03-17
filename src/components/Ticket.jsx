import { useLocation } from "react-router-dom";
import logo1 from "../assets/images/logo-mark.svg";
import githubLogo from "../assets/images/icon-github.svg";
export default function Ticket() {
	const location = useLocation();
	const { name, email, github, image } = location.state || {};

	if (!location.state) {
		return <p>No data found. Go back.</p>;
	}
	if (!name || !email || !github) {
		alert("Please fill all fields");
		return;
	}
	return (
		<div className="pb-24 flex flex-col justify-center items-center">
			{/* <!-- Form starts --> */}
			<div className="flex justify-center items-center gap-3 text-xl md:text-3xl font-bold py-4 md:py-8">
				<img src={logo1} alt="logo" className="w-6 md:w-8" />
				Coding Conf
			</div>
			<div className="py-3 text-center mb-4">
				<h1 className="text-3xl font-bold py-3 md:text-5xl lg:text-6xl">
					Your Journey to Coding Conf
					<br className="hidden md:block" /> 2026 Starts Here!
				</h1>
				<p className="px-7 py-2 text-lg text-Neutral-300 md:text-2xl">
					Secure your spot at next year's biggest coding conference.
				</p>
			</div>
		</div>
		// <div>
		// 	<h1>{name}</h1>
		// 	<p>{email}</p>
		// 	<p>{github}</p>
		// 	{image && <img src={image} alt="avatar" />}
		// </div>
	);
}

// {/* <!-- Form ends --> */}
// 	{/* <!-- Generated tickets starts --> */}
// 	Congrats,
// 	{/* <!-- Full Name -->! Your ticket is ready. */}
// 	We've emailed your ticket to
// 	{/* <!-- Email Address -->  */}
// 	and will send updates in the run up to the event. Coding Conf Jan 31, 2025
// 	/ Austin, TX
// 	{/* Generated tickets ends --> */}
