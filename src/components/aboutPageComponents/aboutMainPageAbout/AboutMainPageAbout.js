import "./aboutMainPageAbout.css";
import photo from "../../../img/logo/photo.jpg";

const AboutMainPageAbout = () => {
	return (
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
	)
}

export default AboutMainPageAbout;