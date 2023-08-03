import aboutBg from "../img/about/about__bg.jpg";
import photo from "../img/logo/photo.jpg";
import experienceLogo1 from "../img/about/experience__icon1.svg";
import experienceLogo2 from "../img/about/experience__icon2.svg";
import experienceLogo3 from "../img/about/experience__icon3.svg";
import experienceLogo4 from "../img/about/experience__icon4.svg";
import portfolioPdf from "../file/portfolio.pdf"
import workDownload from "../img/work_download.svg";
import PartnerLogo from "../components/partnerLogo/PartnerLogo";
import {Link} from "react-router-dom";

const About = () => {
	return (
		<div className="wrapper">
			<main className="main">
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
				<section className="about">
					<div className="_container">
						<div className="about__main">
							<img src={photo} alt="photo" className="about__img"/>
							<div className="about__main-content">
								<div className="about__content-title">
									<div className="about__content-number">
										01
									</div>
									<h2 className="about__content-text">
										about me
									</h2>
								</div>
								<h3 className="about__subtitle">
									I'm Professional Designer and Front-End Web Developer That Solve Your Problems
								</h3>
								<div className="about__text">
									<p className="about__text-first">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
										sint.
										Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
									<p className="about__text-second">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
										sint.
										Velit officia consequat duis enim velit mollit.</p>
								</div>
								<div className="about__date">
									<div className="about__date-con">
										<div className="about__date-number">8</div>
										<h5 className="about__date-text">
											Year
											<br/>
											of experience
										</h5>
									</div>
									<div className="about__date-con">
										<div className="about__date-number">25</div>
										<h5 className="about__date-text">
											Saticfied
											<br/>
											Customers
										</h5>
									</div>
								</div>
							</div>
						</div>

					</div>
				</section>
				<section className="skills">
					<div className="skills__container _container">
						<div className="skills__basic">
							<div className="skills__info">
								<div className="skills__top-group">
									<div className="skills__top-number">
										02
									</div>
									<h2 className="skills__top-title">
										My Skills
									</h2>
								</div>
								<p className="skills__text">
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
									enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
								</p>
								<a href="#" download className="skills__button">DOWNLOAD CV</a>
							</div>
							<div className="skills__experience">
								<div className="skills_experience-items">
									<div className="skills__line-component">
										<div className="skills__line-info">
											<div className="skills__line-prof">UI/UX Design</div>
											<div className="skills__line-percent ">90%</div>
										</div>
										<div className="skills__line">
											<div className="skills__fill percent1"></div>
										</div>
									</div>
								</div>

								<div className="skills_experience-items">
									<div className="skills__line-component">
										<div className="skills__line-info">
											<div className="skills__line-prof">Front End Developer</div>
											<div className="skills__line-percent ">95%</div>
										</div>
										<div className="skills__line">
											<div className="skills__fill percent2"></div>
										</div>
									</div>
								</div>

								<div className="skills_experience-items">
									<div className="skills__line-component">
										<div className="skills__line-info">
											<div className="skills__line-prof">Graphic Design</div>
											<div className="skills__line-percent ">90%</div>
										</div>
										<div className="skills__line">
											<div className="skills__fill percent3"></div>
										</div>
									</div>
								</div>

								<div className="skills_experience-items">
									<div className="skills__line-component">
										<div className="skills__line-info">
											<div className="skills__line-prof">Product Design</div>
											<div className="skills__line-percent ">85%</div>
										</div>
										<div className="skills__line">
											<div className="skills__fill percent4"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="experience">
					<div className="experience__container _container">
						<div className="experience__main">
							<div className="experience__top">
								<div className="experience__number">
									03
								</div>
								<h2 className="experience__title">
									My Experiences
								</h2>
							</div>
							<div className="experience__down">
								<div className="experience__items">
									<div className="experience__item">
										<img src={experienceLogo1} alt="experience__icon" className="experience__img"/>
										<div className="experience__item-title">
											<div className="experience__item-number">01</div>
											<div className="experience__item-right">
												<h5 className="experience__item-subtitle">Lead Web Developer</h5>
												<div className="experience__item-date">2016-2020</div>
											</div>
										</div>
										<p className="experience__item-text">
											Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco
										</p>

									</div>

									<div className="experience__item">
										<img src={experienceLogo2} alt="experience__icon" className="experience__img"/>
										<div className="experience__item-title">
											<div className="experience__item-number">02</div>
											<div className="experience__item-right">
												<h5 className="experience__item-subtitle">Lead Web Developer</h5>
												<div className="experience__item-date">2016-2020</div>
											</div>
										</div>
										<p className="experience__item-text">
											Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco
										</p>
									</div>

									<div className="experience__item">
										<img src={experienceLogo3} alt="experience__icon" className="experience__img"/>
										<div className="experience__item-title">
											<div className="experience__item-number">03</div>
											<div className="experience__item-right">
												<h5 className="experience__item-subtitle">Lead Web Developer</h5>
												<div className="experience__item-date">2016-2020</div>
											</div>
										</div>
										<p className="experience__item-text">
											Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco
										</p>

									</div>

									<div className="experience__item">
										<img src={experienceLogo4} alt="experience__icon" className="experience__img"/>
										<div className="experience__item-title">
											<div className="experience__item-number">04</div>
											<div className="experience__item-right">
												<h5 className="experience__item-subtitle">Lead Web Developer</h5>
												<div className="experience__item-date">2016-2020</div>
											</div>
										</div>
										<p className="experience__item-text">
											Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="partner">
					<div className="partner__container _container">
						<div className="partner__body partner__main-page">
							<div className="partner__main">
								<div className="partner__title">
									<div className="partner__title-number">04</div>
									<h2 className="partner__title-title">
										my PARTNERS
									</h2>
								</div>
								<PartnerLogo/>
							</div>
						</div>
						<div className="work__content work__about-page">
							<div className="work__content-all">
								<h2 className="work__content-title">
									let’s work together on Your Next Project
								</h2>
								<a href="#" className="work__btn">HIRE ME NOW</a>
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
			</main>
		</div>
	)
}

export default About;