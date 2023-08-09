import "./skillsPageAbout.css";
const SkillsPageAbout = () => {
	return (
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
						<a href="/#" download className="skills__button">DOWNLOAD CV</a>
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
	)
}

export default SkillsPageAbout;