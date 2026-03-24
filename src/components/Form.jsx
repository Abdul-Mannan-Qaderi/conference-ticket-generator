import logo1 from "../assets/images/logo-mark.svg";
import infoLogo from "../assets/images/icon-info.svg";
import uploadLogo from "../assets/images/icon-upload.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Form() {
	const navigate = useNavigate();
	const [image, setImage] = useState(null);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [github, setGithub] = useState("");

	const [imageError, setImageError] = useState("");
	const [emailError, setEmailError] = useState("");

	function handleSubmit(e) {
		e.preventDefault();

		let valid = true;

		// email validation
		const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
		if (!emailValid) {
			setEmailError("Please enter a valid email address");
			valid = false;
		} else {
			setEmailError("");
		}

		if (!valid) return;

		const formData = {
			name,
			email,
			github,
			image,
		};
		navigate("/conference-ticket-generator/ticket", { state: formData });
	}

	function handleImageChange(e) {
		const file = e.target.files[0];

		if (file) {
			// ❗ size validation
			if (file.size > 500 * 1024) {
				setImageError("File size must be less than 500KB");
				setImage(null);

				// reset input
				e.target.value = "";
				return;
			}

			setImageError("");

			const reader = new FileReader();
			reader.onload = function (event) {
				setImage(event.target.result);
			};
			reader.readAsDataURL(file);
		}
	}

	function handleRemoveImage(e) {
		e.preventDefault();
		setImage(null);
		// also reset file input
		document.getElementById("avatar").value = "";
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
			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-6 max-w-lg md:w-md"
			>
				<div>
					<label htmlFor="avatar" className="mb-2 inline-block">
						Upload Avatar
					</label>
					<label
						htmlFor="avatar"
						className="
							flex flex-col gap-4 justify-center items-center
              p-4 mb-2 text-Neutral-300
              w-full bg-Neutral-500/20 backdrop-blur-[2px]
              rounded-xl border-2  border-dashed border-Neutral-700
							hover:bg-Neutral-300/20
          "
					>
						<span className="bg-Neutral-700/60 border-2 border-Neutral-700 rounded-lg w-10 h-10 flex justify-center items-center">
							<img
								id="avatarPreview"
								src={image || uploadLogo}
								alt="upload logo"
								className="rounded-lg"
							/>
						</span>
						<input
							type="file"
							name="avatar"
							id="avatar"
							onChange={handleImageChange}
							placeholder="hello"
							className="hidden border"
						/>
						{!image ? (
							<span className="text-center text-sm">
								Drag and drop or click to upload
							</span>
						) : (
							<div className="flex gap-2">
								<button
									onClick={handleRemoveImage}
									className="bg-Neutral-700/50 rounded-md py-0 px-1 underline"
								>
									Remove image
								</button>
								<label
									htmlFor="avatar"
									className="bg-Neutral-700/50 rounded-md px-1 text-sm"
								>
									Change image
								</label>
							</div>
						)}
					</label>
					<span
						className={`text-[12px] flex items-center gap-1.5 ${imageError ? "block" : "hidden"} ${
							imageError ? "text-Orange-300" : "text-Neutral-500"
						}`}
					>
						<img src={infoLogo} alt="info logo" />
						<span>
							{imageError || "Upload your photo (JPG or PNG, max size: 500KB)."}
						</span>
					</span>
				</div>
				<div>
					<label htmlFor="name" className="mb-2 inline-block">
						Full Name
					</label>
					<input
						id="name"
						type="text"
						name="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="
						bg-Neutral-500/20 backdrop-blur-[2px]
							border border-Neutral-500 rounded-xl
							tracking-widest
							hover:bg-Neutral-300/20
							text-xl
							p-3 w-full

							focus-visible::ring-0
							focus-visible:outline-2
							focus-visible:outline-offset-3
						focus-visible:outline-Neutral-500
						"
					/>
				</div>
				<div>
					<label htmlFor="email" className="mb-2 inline-block">
						Email Address
					</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="example@email.com"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
							setEmailError("");
						}}
						className="
							bg-Neutral-500/20 backdrop-blur-[2px]
							border border-Neutral-500 rounded-xl 
							text-xl
							p-3 w-full
							hover:bg-Neutral-300/20
							focus-visible::ring-0
							focus-visible:outline-2
							focus-visible:outline-offset-3
						focus-visible:outline-Neutral-500
						"
					/>
					{emailError && (
						<span className="text-[12px] flex items-center gap-1.5 text-red-500 mt-1">
							<img src={infoLogo} alt="info logo" />
							{emailError}
						</span>
					)}
				</div>
				<div>
					<label htmlFor="github" className="mb-2 inline-block">
						GitHub Username
					</label>
					<input
						type="text"
						placeholder="@yourusername Generate My Ticket"
						value={github}
						onChange={(e) => setGithub(e.target.value)}
						className="
						bg-Neutral-500/20 backdrop-blur-[2px]
							border border-Neutral-500 rounded-xl 
							text-xl
							p-3 w-full
						hover:bg-Neutral-300/20
							focus-visible::ring-0
							focus-visible:outline-2
							focus-visible:outline-offset-3
						focus-visible:outline-Neutral-500
						"
					/>
				</div>
				<input
					type="submit"
					value={"Generate My Ticket"}
					className="
					bg-Orange-500 text-Neutral-900 font-bold
						rounded-xl 
						text-xl
						p-3 w-full
					hover:bg-Orange-700
							focus-visible::ring-0
							focus-visible:outline-2
							focus-visible:outline-offset-2
						focus-visible:outline-Neutral-300
					"
				/>
			</form>
		</div>
	);
}
