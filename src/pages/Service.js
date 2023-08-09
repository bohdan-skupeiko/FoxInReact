import Questions from "../components/questions/Questions";
import Services from "../components/services/Services";
import PartnerLogo from "../components/partnerLogo/PartnerLogo";
import ServiceTopPageService from "../components/servicePageComponents/serviceTopPageService/ServiceTopPageService";
import SliderTestimonial from "../components/sliderTestimonial/SliderTestimonial";

const Service = () => {
	return (
		<main className="main">
			<ServiceTopPageService/>
			<Services mainNumber="01"/>
			<PartnerLogo partnerTitleNumber="02"/>
			<SliderTestimonial topContentNumber="03" totalSlides="03"/>
			<Questions questionsTitleNumber="04"/>
		</main>
	);
}

export default Service;