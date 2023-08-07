import {Link} from "react-router-dom";
import aboutBg from "../../../img/about/about__bg.jpg";
import "./aboutTopAboutPage.css"

const AboutTopAboutPage = () => {
	return (
		<section className="about__top backside__bg">
			<div className="about__container _container">
				<div className="div">
					<div className="about__top-content">
						<h1 className="about__top-title">ABOUT</h1>
					</div>
					<div className="about_breadcrumbs">
						<ul className="breadcrumbs__list">
							<li>
								<Link to="/" className="breadcrumbs__link">Home </Link>
							</li>
							<li><span className="breadcrumbs__text">About</span></li>
						</ul>
					</div>
				</div>
			</div>
			<div className="intro__contact-bg _ibg">
				<img src={aboutBg} alt="cover"/>
			</div>
		</section>
	)
}
export default AboutTopAboutPage;