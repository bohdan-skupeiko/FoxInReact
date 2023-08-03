import portfolioBg from "../img/portfolio/portfolio_bg.svg"
import Questions from "../components/questions/Questions";
import Work from "../components/work/Work";
import PartnerLogo from "../components/partnerLogo/PartnerLogo";
import {Link} from "react-router-dom";

const Portfolio = () => {
	return (
		<main className="main">
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
			<section className="partner partner__service-page">
				<div className="partner__container _container">
					<div className="partner__body">
						<div className="partner__main">
							<div className="partner__title">
								<div className="partner__title-number">02</div>
								<h2 className="partner__title-title">
									MY PARTNERS
								</h2>
							</div>
							<PartnerLogo/>
						</div>
					</div>
				</div>
			</section>
			<Work/>
			<section className="questions questions__page">
				<div className="questions__container _container">
					<div className="questions__main">
						<div className="questions__title">
							<div className="questions__title-number">03</div>
							<h2 className="questions__title-title">HAVE ANY QUESTIONS?</h2>
						</div>
						<Questions/>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Portfolio;