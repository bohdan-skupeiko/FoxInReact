import {Link} from "react-router-dom";
import serviceBg from "../../../img/service/service_bg.jpg";
import "./serviceTopPageService.css";

const ServiceTopPageService = () => {
	return (
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
	)
}

export default ServiceTopPageService;