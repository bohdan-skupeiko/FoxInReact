import {Link} from "react-router-dom";
import portfolioBg from "../../../img/portfolio/portfolio_bg.svg";

const PortfolioTopPage = () => {
	return (
		<section className="about__top portfolio__top-page backside__bg">
			<div className="about__container _container">
				<div className="div">
					<div className="about__top-content">
						<h1 className="about__top-title">portfolio</h1>
					</div>
					<div className="about_breadcrumbs">
						<ul className="breadcrumbs__list">
							<li><Link to="/" className="breadcrumbs__link">Home </Link></li>
							<li><span className="breadcrumbs__text">Portfolio</span></li>
						</ul>
					</div>
				</div>
			</div>
			<div className="intro__contact-bg _ibg">
				<img src={portfolioBg} alt="cover"/>
			</div>
		</section>
	)
}

export default PortfolioTopPage;