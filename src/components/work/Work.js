import filePdf from "../../file/portfolio.pdf";
import workDownload from "../../img/work_download.svg";
import "./work.css";

const Work = () => {
	return (
		<section className="work">
			<div className="container__work _container">
				<div className="work__content">
					<div className="work__content-all">
						<h2 className="work__content-title">
							let’s work together on Your Next Project
						</h2>
						<a href="#!" className="work__btn">HIRE ME NOW</a>
						<div className="work__download">
							<a href={filePdf} download className="work__download-icon">
								<img src={workDownload} alt="download-icon"/>
							</a>
							<a href={filePdf} download className="work__download-btn">Download CV</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Work;