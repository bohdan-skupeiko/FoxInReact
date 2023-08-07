import Work from "../components/work/Work";
import Services from "../components/services/Services";
import IntroHomePage from "../components/homePageComponents/introHomePage/IntroHomePage";
import InformationHomePage from "../components/homePageComponents/informationHomePage/InformationHomePage";
import PartnersHomePage from "../components/homePageComponents/partnersHomePage/PartnersHomePage";
import ContactHomePage from "../components/homePageComponents/contactHomePage/ContactHomePage";
import SliderPortfolio from "../components/sliderPortfolio/SliderPortfolio";

const Home = () => {
	return (
		<main className="main">
			<IntroHomePage/>
			<InformationHomePage/>
			<PartnersHomePage/>
			<Work/>
			<Services mainNumber="02"/>
			<section className="portfolio">
				<SliderPortfolio titleNumber="03"/>
			</section>
			<ContactHomePage/>
		</main>
	);
}

export default Home;