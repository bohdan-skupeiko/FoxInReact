import "./contactHomePage.js.css"
import phoneIcon from "../../../img/contact-icon-phone.svg";
import emailIcon from "../../../img/contact-icon-email.svg";
import addressIcon from "../../../img/contact-icon-address.svg";
import linkedin from "../../../img/linkedin.svg";
import youtube from "../../../img/bool-icon.svg";
import instagram from "../../../img/instagram-icon.svg";
import facebook from "../../../img/facebook-icon.svg";

const ContactHomePage = () => {
	return (
		<section className="contact">
			<div className="contact__container _container">
				<div className="contact__main">
					<div className="contact__info">
						<div className="contact__intro ">
							<div className="contact__number">05</div>
							<h5 className="contact__title ">contact</h5>
						</div>
						<div className="contacts__phone">
							<div className="contacts__phone-icon">
								<img src={phoneIcon} alt="icon-phone"/>
							</div>
							<div className="contacts__phone-info">
								<h5 className="contacts__phone-title">Phone</h5>
								<p className="contacts__phone-number">(219) 555-0114</p>
							</div>
						</div>
						<div className="contacts__email">
							<div className="contacts__email-icon">
								<img src={emailIcon} alt="icon-phone"/>
							</div>
							<div className="contacts__email-info">
								<h5 className="contacts__email-title">Email</h5>
								<p className="contacts__email-text">robertfox@example.com</p>
							</div>
						</div>
						<div className="contacts__address">
							<div className="contacts__address-icon">
								<img src={addressIcon} alt="icon-phone"/>
							</div>
							<div className="contacts__address-info">
								<h5 className="contacts__address-title">Address</h5>
								<p className="contacts__address-text">4517 Washington Ave. Manchester, Kentucky 39495</p>
							</div>
						</div>
						<div className="contacts__social">
							<a href="https://ua.linkedin.com/" target="_blank" rel="noreferrer"><img src={linkedin} alt="in"/></a>
							<a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><img src={youtube} alt="bool"/></a>
							<a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram"/></a>
							<a href="https://uk-ua.facebook.com/" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook"/></a>
						</div>
					</div>
					<div className="contact__form contact__form-page">
						<div className="contact__form-title ">
							I’m always open to discussing <span>product design work</span> or partnership
						</div>
						<div className="contact__form-line">
							<span></span>
						</div>
						<div className="contact__wrapper-form">
							<form action="" name="form" method="post" className="form">
								<div className="form__group-top">
									<div className="form__row">
										<label htmlFor="name" className="margin__bott">Your name*</label>
										<input type="text" id="name" name="name" placeholder="Enter your name here"/>
									</div>
									<div className="form__row">
										<label htmlFor="email" className="margin__bott">Email Address*</label>
										<input type="email" id="email" name="email" placeholder="Enter your email address"/>
									</div>
								</div>
								<div className="form__row-textarea form-row">
									<label htmlFor="message" className="margin__bott">Message</label>
									<textarea id="message" name="message" placeholder="Write your message here"></textarea>
								</div>
								<div className="form__row-btn">
									<button className="form__button" type="submit">send message</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default ContactHomePage;