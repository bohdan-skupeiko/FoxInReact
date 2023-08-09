import "./partnerLogo.css";
import behance from "../../img/logo/behance.svg";
import slack from "../../img/logo/slack.svg";
import dribbble from "../../img/logo/dribbble.svg";
import twilio from "../../img/logo/twilio.svg";
import github from "../../img/logo/github.svg";
import chargebee from "../../img/logo/chargebee.svg";
import udemy from "../../img/logo/udemy.svg";
import instagram from "../../img/logo/instagram.svg";
import mapbox from "../../img/logo/mapbox.svg";
import portfolioPdf from "../../file/portfolio.pdf";
import workDownload from "../../img/work_download.svg";

const PartnerLogo = ({partnerTitleNumber}) => {
	return (
		<>
			<section className="partner">
				<div className="partner__container _container">
					<div className="partner__body partner__main-page">
						<div className="partner__main">
							<div className="partner__title">
								<div className="partner__title-number">{partnerTitleNumber}</div>
								<h2 className="partner__title-title">
									my PARTNERS
								</h2>
							</div>
							<div className="partner__block partner__block-main">
								<div className="partner__block-up">
									<img src={behance} alt="partner__icon" className="partner__up-img"/>
									<img src={slack} alt="partner__icon" className="partner__up-img"/>
									<img src={dribbble} alt="partner__icon" className="partner__up-img"/>
									<img src={twilio} alt="partner__icon" className="partner__up-img"/>
									<img src={github} alt="partner__icon" className="partner__up-img"/>
								</div>
								<div className="partner__block-down">
									<img src={chargebee} alt="" className="partner__down-img"/>
									<img src={udemy} alt="" className="partner__down-img"/>
									<img src={instagram} alt="" className="partner__down-img"/>
									<img src={mapbox} alt="" className="partner__down-img"/>
								</div>
							</div>
							<div className="partner__block partner__block-mobile">
								<div className="partner__block-first">
									<img src={behance} alt="behance" className="partner__first-img"/>
									<img src={slack} alt="slack" className="partner__first-img"/>
									<img src={dribbble} alt="dribbble" className="partner__first-img"/>
								</div>
								<div className="partner__block-second">
									<img src={twilio} alt="twilio" className="partner__second-img"/>
									<img src={github} alt="github" className="partner__second-img"/>
									<img src={chargebee} alt="chargebee" className="partner__second-img"/>
								</div>
								<div className="partner__block-third">
									<img src={udemy} alt="udemy" className="partner__third-img"/>
									<img src={instagram} alt="instagram" className="partner__third-img"/>
									<img src={mapbox} alt="mapbox" className="partner__third-img"/>
								</div>
							</div>
						</div>
					</div>
					<div className="work__content work__about-page">
						<div className="work__content-all">
							<h2 className="work__content-title">
								let’s work together on Your Next Project
							</h2>
							<a href="#!" className="work__btn">HIRE ME NOW</a>
							<div className="work__download">
								<a href={portfolioPdf} download className="work__download-icon">
									<img src={workDownload} alt="download-icon"/>
								</a>
								<a href={portfolioPdf} download className="work__download-btn">Download CV</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default PartnerLogo;