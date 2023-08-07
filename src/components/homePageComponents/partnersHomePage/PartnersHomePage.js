import "./partnersHomePage.css";
import partnerIcon1 from "../../../img/partner__icon1.svg";
import partnerIcon2 from "../../../img/partner__icon2.svg";
import partnerIcon3 from "../../../img/partner__icon3.svg";
import partnerIcon4 from "../../../img/partner__icon4.svg";
import partnerIcon5 from "../../../img/partner__icon5.svg";
import partner__icon1 from "../../../img/partners_phone/logo_1.svg";
import partner__icon2 from "../../../img/partners_phone/logo_2.svg";
import partner__icon3 from "../../../img/partners_phone/logo_3.svg";
import partner__icon4 from "../../../img/partners_phone/logo_4.svg";
import partner__icon5 from "../../../img/partners_phone/logo_5.svg";

const PartnersHomePage = () => {
	return (
		<section className="partners">
			<div className="partners__container _container">
				<div className="partners__content">
					<div className="partners__content-items main__version">
						<img src={partnerIcon1} alt="partner__icon" className="partners__content-item"/>
						<img src={partnerIcon2} alt="partner__icon" className="partners__content-item"/>
						<img src={partnerIcon3} alt="partner__icon" className="partners__content-item"/>
						<img src={partnerIcon4} alt="partner__icon" className="partners__content-item"/>
						<img src={partnerIcon5} alt="partner__icon" className="partners__content-item"/>
					</div>
					<div className="partners__content-items phone__version">
						<div className="phone__version-first">
							<img src={partner__icon1} alt="partner__icon" className="partners__content-item"/>
							<img src={partner__icon2} alt="partner__icon" className="partners__content-item"/>
							<img src={partner__icon3} alt="partner__icon" className="partners__content-item"/>
						</div>
						<div className="phone__version-last">
							<img src={partner__icon4} alt="partner__icon" className="partners__content-item"/>
							<img src={partner__icon5} alt="partner__icon" className="partners__content-item"/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PartnersHomePage;