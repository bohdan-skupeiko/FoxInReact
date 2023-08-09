import "./informationHomePage.css";
import about1 from "../../../img/about_1.png";
import about2 from "../../../img/about_2.png";

const InformationHomePage = () => {
	return (
		<section className="information">
			<div className="information__container _container">
				<div className="information__content content">
					<div className="content__first">
						<div className="content__left-item">
							<img className="content__left-img" src={about1} alt="Heis"/>
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
	)
}

export default InformationHomePage;