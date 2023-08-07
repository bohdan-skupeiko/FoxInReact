import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar} from 'swiper/modules';
import "./portfolioSlider.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BtnSlider from "../swiperButtonArrow/SwiperButtonArrow";

import photoSlide1 from "../../img/slider-photo1.png"
import photoSlide2 from "../../img/slider-photo2.png"
import photoSlide3 from "../../img/slider-photo3.png"

const SliderPortfolio = ({titleNumber}) => {
	return (

		<div className="portfolio__container _container">
			<div className="portfolio__main">
				<Swiper
					modules={[Navigation, Pagination, Scrollbar]}
					spaceBetween={24}
					slidesPerView={3}
					pagination={{
						clickable: true,
					}}
					centeredSlides={false}
					breakpoints={{
						320: {
							slidesPerView: 1,
							centeredSlides: true
						},
						1024: {
							slidesPerView: 2,
						},
						1200: {
							slidesPerView: 3,
						}
					}}
				>
					<div className="portfolio__main-nav">
						<div className="portfolio__main-logo">
							<div className="portfolio__main-number">{titleNumber}</div>
							<h2 className="portfolio__main-title">Portfolio</h2>
						</div>
						<nav className="portfolio__main-menu">
							<button className="portfolio__main-button active">ALL</button>
							<button className="portfolio__main-button ">UI/UX DESIGN</button>
							<button className="portfolio__main-button">PRODUCT DESIGN</button>
							<button className="portfolio__main-button">BRANDING</button>
							<button className="portfolio__main-button">WEB DESIGN</button>
						</nav>
						<BtnSlider/>
					</div>
					<SwiperSlide>
						<div className="portfolio__carousel-item">
							<img src={photoSlide1} alt="slide-1"/>
							<div className="portfolio__carousel-overlay">
								<h4>MOBILE DESIGN</h4>
								<h5>UI/UX Design</h5>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="portfolio__carousel-item">
							<img src={photoSlide2} alt="slide-1"/>
							<div className="portfolio__carousel-overlay">
								<h4>PRODUCT DESING</h4>
								<h5>UI/UX Design</h5>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="portfolio__carousel-item">
							<img src={photoSlide3} alt="slide-1"/>
							<div className="portfolio__carousel-overlay">
								<h4>WEB DESIGN</h4>
								<h5>UI/UX Design</h5>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="portfolio__carousel-item">
							<img src={photoSlide1} alt="slide-1"/>
							<div className="portfolio__carousel-overlay">
								<h4>BRANDING</h4>
								<h5>UI/UX Design</h5>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="portfolio__carousel-item">
							<img src={photoSlide2} alt="slide-1"/>
							<div className="portfolio__carousel-overlay">
								<h4>UI/UX DESIGN</h4>
								<h5>UI/UX Design</h5>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}

export default SliderPortfolio;