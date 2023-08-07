import PartnerLogo from "../components/partnerLogo/PartnerLogo";
import AboutTopAboutPage from "../components/aboutPageComponents/aboutTopAboutPage/AboutTopAboutPage";
import AboutMainPageAbout from "../components/aboutPageComponents/aboutMainPageAbout/AboutMainPageAbout";
import SkillsPageAbout from "../components/aboutPageComponents/skillsPageAbout/SkillsPageAbout";
import ExperiencePageAbout from "../components/aboutPageComponents/experiencePageAbout/ExperiencePageAbout";

const About = () => {
	return (
		<div className="wrapper">
			<main className="main">
				<AboutTopAboutPage/>
				<AboutMainPageAbout/>
				<SkillsPageAbout/>
				<ExperiencePageAbout/>
				<PartnerLogo partnerTitleNumber="04"/>
			</main>
		</div>
	)
}

export default About;