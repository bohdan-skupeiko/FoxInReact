import "./styles/main.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
	return (
		<Router>
			<ScrollToTop/>
			<Header/>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/about" element={<About/>}/>
				<Route path="/service" element={<Service/>}/>
				<Route path="/portfolio" element={<Portfolio/>}/>
				<Route path="/contact" element={<Contact/>}/>
			</Routes>
			<Footer/>
		</Router>
	);
}

export default App;