import Questions from "../components/questions/Questions";
import PartnerLogo from "../components/partnerLogo/PartnerLogo";
import PortfolioTopPage from "../components/portfolioPageComponents/portfolioTopPage/PortfolioTopPage";
import SliderPortfolio from "../components/sliderPortfolio/SliderPortfolio";

const Portfolio = () => {
	return (
		<main className="main">
			<PortfolioTopPage/>
			<section className="portfolio__bg-page">
				<SliderPortfolio titleNumber="01"/>
			</section>
			<PartnerLogo partnerTitleNumber="02"/>
			<Questions questionsTitleNumber="03"/>
		</main>
	);
}

export default Portfolio;