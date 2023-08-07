import "./experiencePageAbout.css";
import experienceLogo1 from "../../../img/about/experience__icon1.svg";
import experienceLogo2 from "../../../img/about/experience__icon2.svg";
import experienceLogo3 from "../../../img/about/experience__icon3.svg";
import experienceLogo4 from "../../../img/about/experience__icon4.svg";

const ExperiencePageAbout = () => {
	return (
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
	)
}

export default ExperiencePageAbout;