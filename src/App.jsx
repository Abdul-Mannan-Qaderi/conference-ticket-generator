import Form from "./components/Form";
import Ticket from "./components/Ticket"; // create this page
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
	return (
		<Router>
			<main
				className="
					flex justify-center
				bg-Neutral-900 text-Neutral-0
					p-4
					min-h-dvh
				"
			>
				<div className="max-w-[1440px]">
					<Routes>
						<Route path="/conference-ticket-generator" element={<Form />} />
						<Route path="/conference-ticket-generator/ticket" element={<Ticket />} />
					</Routes>
				</div>
			</main>
		</Router>
	);
}
