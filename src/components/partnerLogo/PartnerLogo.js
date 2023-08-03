import behance from "../../img/logo/behance.svg";
import slack from "../../img/logo/slack.svg";
import dribbble from "../../img/logo/dribbble.svg";
import twilio from "../../img/logo/twilio.svg";
import github from "../../img/logo/github.svg";
import chargebee from "../../img/logo/chargebee.svg";
import udemy from "../../img/logo/udemy.svg";
import instagram from "../../img/logo/instagram.svg";
import mapbox from "../../img/logo/mapbox.svg";

const PartnerLogo = () => {
	return (
		<>
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
		</>
	)
}

export default PartnerLogo;