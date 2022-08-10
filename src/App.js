import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
// import Card from "./components/Card";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<NavBar />
				<div className="body">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="projects" element={<Projects />} />
						<Route path="contact" element={<Contact />} />
						<Route
							path="*"
							element={
								<main style={{ padding: "1rem" }}>
									<p>Nice try, but there's nothing here!</p>
								</main>
							}
						/>
					</Routes>
				</div>
			</BrowserRouter>

			{/* <Card /> */}
		</div>
	);
}

export default App;
