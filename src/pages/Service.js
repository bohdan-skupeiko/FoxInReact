import serviceBg from "../img/service/service_bg.jpg";
import Questions from "../components/questions/Questions";
import Work from "../components/work/Work";
import Services from "../components/services/Services";
import PartnerLogo from "../components/partnerLogo/PartnerLogo";
import {Link} from "react-router-dom";
const Service = () => {
	return (
		<main className="main">
			<section className="about__top service__top-page backside__bg">
				<div className="about__container _container">
					<div className="div">
						<div className="about__top-content">
							<h1 className="about__top-title">service</h1>
						</div>
						<div className="about_breadcrumbs">
							<ul className="breadcrumbs__list">
								<li><Link to="/" className="breadcrumbs__link">Home </Link></li>
								<li><span className="breadcrumbs__text">Service</span></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="intro__contact-bg _ibg">
					<img src={serviceBg} alt="serviceBg"/>
				</div>
			</section>
			<section className="service ">
				<div className="service__container _container">
					<div className="service__main service__main-page">
						<div className="service__main-top top__page-content">
							<div className="service__main-number page__number-service"> 01</div>
							<h2 className="service__main-title">
								my service
							</h2>
						</div>
						<Services/>
					</div>
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

export default Service;