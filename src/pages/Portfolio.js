import Questions from "../components/questions/Questions";
import PartnerLogo from "../components/partnerLogo/PartnerLogo";
import PortfolioTopPage from "../components/portfolioPageComponents/portfolioTopPage/PortfolioTopPage";

const Portfolio = () => {
	return (
		<main className="main">
			<PortfolioTopPage/>
			<PartnerLogo partnerTitleNumber="01"/>
			<Questions questionsTitleNumber="02"/>
		</main>
	);
}

export default Portfolio;