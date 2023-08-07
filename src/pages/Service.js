import Questions from "../components/questions/Questions";
import Services from "../components/services/Services";
import PartnerLogo from "../components/partnerLogo/PartnerLogo";
import ServiceTopPageService from "../components/servicePageComponents/serviceTopPageService/ServiceTopPageService";

const Service = () => {
	return (
		<main className="main">
			<ServiceTopPageService/>
			<Services mainNumber="01"/>
			<PartnerLogo partnerTitleNumber="02"/>
			<Questions questionsTitleNumber="03"/>
		</main>
	);
}

export default Service;