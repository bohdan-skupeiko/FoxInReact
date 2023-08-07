import ContactTopPageContact from "../components/contactPageComponents/contactTopPageContact/ContactTopPageContact";
import ContactContactPage from "../components/contactPageComponents/contactContactPage/ContactContactPage";
import MapContactPage from "../components/contactPageComponents/mapContactPage/MapContactPage";
const Contact = () => {
	return (
		<main className="main">
			<ContactTopPageContact/>
			<ContactContactPage/>
			<MapContactPage/>
		</main>
	);
}

export default Contact;