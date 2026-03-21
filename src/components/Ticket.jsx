import { useLocation } from "react-router-dom";
import logo1 from "../assets/images/logo-mark.svg";
import githubLogo from "../assets/images/icon-github.svg";
import bg from "../assets/images/pattern-ticket.svg";
export default function Ticket() {
	const location = useLocation();
	const { name, email, github, image } = location.state || {};
	const fname = name.split(" ")[0];
	const lname = name.split(" ")[1];
	if (!location.state) {
		return <p>No data found. Go back.</p>;
	}
	if (!name || !email || !github) {
		alert("Please fill all fields");
		return;
	}
	return (
		<div className="pb-24 flex flex-col justify-center items-center">
			<div className="flex justify-center items-center gap-3 text-2xl md:text-3xl font-bold py-4 md:py-8">
				<img src={logo1} alt="logo" className="w-6 md:w-8" />
				Coding Conf
			</div>

			<div className="py-3 text-center mb-12">
				<h1 className="text-3xl font-bold py-3 md:text-5xl lg:text-6xl">
					Congrats,{" "}
					<span className="bg-gradient-to-r from-Orange-500 to-Neutral-0 text-transparent bg-clip-text">
						{fname}
					</span>{" "}
					<span className="bg-gradient-to-r from-Orange-500 to-Neutral-0 text-transparent bg-clip-text">
						{lname}
					</span>
					!
					<br className="hidden md:block" /> Your ticket is ready.
				</h1>
				<p className="px-7 py-2 text-lg text-Neutral-300 md:text-2xl">
					We've emailed your ticket to <br className="hidden md:block" />{" "}
					<span className="text-Orange-300">{email}</span> and will send updates
					in <br className="hidden md:block" /> the run up to the event.
				</p>
			</div>

			{/* TICKET STARTS */}
			<div
				className={`ticket relative md:my-14  justify-between gap-3 bg-contain w-fit bg-no-repeat bg-center`}
			>
				<img className="" src={bg} alt="ticket-bg" />
				<div className="absolute  left-0 grid grid-cols-7 p-5 md:pt-0 top-0 h-full w-full">
					<div className="div-left col-span-6 flex flex-col justify-between">
						<div className="flex justify-between items-start gap-3 text-2xl md:text-3xl font-bold h-fit w-fit md:py-8">
							<img
								src={logo1}
								alt="logo"
								className="w-10 md:w-10 justify-start "
							/>
							<div className="">
								<h3 className="mb-1 md:mb-2 -mt-1.5 md:text-4xl">Coding Conf</h3>
								<p className="text-Neutral-500 text-[16px] md:text-lg">
									Jan 31, 2025 / Austin, TX
								</p>
							</div>
						</div>

						<div className="flex gap-3">
							{image && (
								<img
									src={image}
									alt="avatar"
									className="w-13 h-13 md:w-20 md:h-20 rounded-lg"
								/>
							)}
							<div className="flex flex-col justify-center gap-2">
								<h3 className="text-3xl">
									{fname} {lname}
								</h3>
								<p className="flex items-center text-Neutral-300 md:text-lg">
									<img
										className="w-4 md:w-6"
										src={githubLogo}
										alt="github lint"
									/>
									&nbsp;@{github}
								</p>
							</div>
						</div>
					</div>
					<div className="div-right col-span-1 flex justify-start items-center">
						<p className="rotate-90 h-fit w-fit text-2xl md:text-3xl text-Neutral-500">
							#{Math.round(Math.random() * 1000) + 10000}
						</p>
					</div>
				</div>
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
