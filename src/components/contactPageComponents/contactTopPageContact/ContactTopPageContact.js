import {Link} from "react-router-dom";
import contactBg from "../../../img/contact/contact_bg.jpg";
import "./contactTopPageContact.css";

const ContactTopPageContact = () => {
	return (
		<section className="contact__body backside__bg">
			<div className="_container">
				<div className="contact__body-info">
					<h1 className="contact__body-title">CONTACT</h1>
				</div>
				<div className="breadcrumbs">
					<ul className="breadcrumbs__list">
						<li><Link to="/" className="breadcrumbs__link">Home </Link></li>
						<li><span className="breadcrumbs__text">Contact</span></li>
					</ul>
				</div>
			</div>
			<div className="intro__contact-bg _ibg">
				<img src={contactBg} alt="cover"/>
			</div>
		</section>
	)
}

export default ContactTopPageContact;