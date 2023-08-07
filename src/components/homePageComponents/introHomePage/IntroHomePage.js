import "./introHomePage.css";
import instagram from "../../../img/instagram-icon.svg";
import facebook from "../../../img/facebook-icon.svg";
import linkedin from "../../../img/linkedin.svg";
import youtube from "../../../img/bool-icon.svg";
import bg from "../../../img/background.jpg";

const IntroHomePage = () => {
	return (
		<section className="intro backside__bg">
			<div className="intro__container _container">
				<div className="intro__content left">
					<div className="intro__left">
						<div className="left__text"><span>Hello,</span> I’m</div>
						<h1 className="left__name">robert fox</h1>
						<div className="left__specialty">Professional Product Designer</div>
						<a className="intro__button" href="">let’s talk</a>
					</div>
					<div className="intro__right">
						<a href="https://www.instagram.com/" className="intro__icons" target="_blank" rel="noreferrer"><img
							src={instagram} alt="instagram"/></a>
						<a href="https://uk-ua.facebook.com/" className="intro__icons" target="_blank" rel="noreferrer"><img
							src={facebook} alt="facebook"/></a>
						<a href="https://ua.linkedin.com/" className="intro__icons" target="_blank" rel="noreferrer"><img
							src={linkedin}
							alt="in"/></a>
						<a href="https://www.youtube.com/" className="intro__icons" target="_blank" rel="noreferrer"><img
							src={youtube} alt="bool"/></a>
					</div>
				</div>
			</div>
			<div className="intro__bg _ibg">
				<img src={bg} alt="cover"/>
			</div>
		</section>
	)
}

export default IntroHomePage;