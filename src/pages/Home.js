import instagram from "../img/instagram-icon.svg";
import facebook from "../img/facebook-icon.svg";
import linkedin from "../img/linkedin.svg";
import youtube from "../img/bool-icon.svg";
import bg from "../img/background.jpg";
import about1 from "../img/about_1.png";
import about2 from "../img/about_2.png";
import partnerIcon1 from "../img/partner__icon1.svg";
import partnerIcon2 from "../img/partner__icon2.svg";
import partnerIcon3 from "../img/partner__icon3.svg";
import partnerIcon4 from "../img/partner__icon4.svg";
import partnerIcon5 from "../img/partner__icon5.svg";
import partner__icon1 from "../img/partners_phone/logo_1.svg";
import partner__icon2 from "../img/partners_phone/logo_2.svg";
import partner__icon3 from "../img/partners_phone/logo_3.svg";
import partner__icon4 from "../img/partners_phone/logo_4.svg";
import partner__icon5 from "../img/partners_phone/logo_5.svg";
import phoneIcon from "../img/contact-icon-phone.svg";
import emailIcon from "../img/contact-icon-email.svg";
import addressIcon from "../img/contact-icon-address.svg";
import Work from "../components/work/Work";
import Services from "../components/services/Services";


const Home = () => {
	return (
		<main className="main">
			<section className="intro backside__bg">
				<div className="intro__container _container">
					<div className="intro__content left">
						<div className="intro__left">
							<div className="left__text"><span>Hello,</span> I’m</div>
							<h1 className="left__name">robert fox</h1>
							<div className="left__specialty">Professional Product Designer</div>
							<a className="intro__button" href="#">let’s talk</a>
						</div>
						<div className="intro__right">
							<a href="https://www.instagram.com/" className="intro__icons" target="_blank" rel="noreferrer"><img
								src={instagram} alt="instagram"/></a>
							<a href="https://uk-ua.facebook.com/" className="intro__icons" target="_blank" rel="noreferrer"><img
								src={facebook} alt="facebook"/></a>
							<a href="https://ua.linkedin.com/" className="intro__icons" target="_blank" rel="noreferrer"><img src={linkedin}
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
			<section className="information">
				<div className="information__container _container">
					<div className="information__content content">
						<div className="content__first">
							<div className="content__left-item">
								<img className="content__left-img" src={about1} alt="photo"/>
								<div className="content__left-description">
									<h3 className="content__left-text"> Saticfied <br/>Customers
									</h3>
									<div className="content__left-number">
										25
									</div>
								</div>
							</div>
							<div className="content__right-item">
								<div className="content__right-description">
									<div className="content__right-number">8</div>
									<h3 className="content__right-text">Year <br/>
										of experience
									</h3>
								</div>
								<img className="content__right-img" src={about2} alt="work"/>
							</div>
						</div>
						<div className="content__second">
							<div className="content__second-title">
								<div className="content__second-number">
									01
								</div>
								<h2 className="content__second-h2">About me</h2>
							</div>
							<div className="content__second-description">
								<p className="text__first">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
									Velit
									officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
								<p className="text__second">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
									Velit
									officia consequat duis enim velit mollit.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
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
			<Work/>
			<section className="service">
				<div className="service__container _container">
					<div className="service__main">
						<div className="service__main-top">
							<div className="service__main-number">02</div>
							<h2 className="service__main-title">
								my service
							</h2>
						</div>
						<Services/>
					</div>
				</div>
			</section>
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
								<a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={instagram}
																																					alt="instagram"/></a>
								<a href="https://uk-ua.facebook.com/" target="_blank" rel="noreferrer"><img src={facebook}
																																					 alt="facebook"/></a>
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
		</main>
	)
}

export default Home;