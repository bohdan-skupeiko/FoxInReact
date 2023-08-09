import secondSliderPhoto1 from "../../img/second__slider.jpg";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination, EffectFade} from 'swiper/modules';
import BtnSlider from "../swiperButtonArrow/SwiperButtonArrow";
import secondSliderPhoto2 from "../../img/second__slider_2.jpg";
import secondSliderPhoto3 from "../../img/second__slider_3.jpg";
import "./sliderTestimonial.css";
import React, {useState} from 'react';
import ChangeTestimonialTitle from "../../utils/ChangeTestimonialTitle";

const SliderTestimonial = ({topContentNumber, totalSlides}) => {
	const [activeSlide, setActiveSlide] = useState(0);
	const handleSlideChange = (swiper) => {
		setActiveSlide(swiper.realIndex);
	};
	return (
		<section className="testimonial">
			<div className="testimonial__container _container">
				<Swiper
					modules={[Navigation, Pagination, EffectFade]}
					slidesPerView={1}
					effect={'fade'}
					pagination={{
						clickable: true,
						el: '.custom__pagination-testimonial',
					}}
					onSlideChange={handleSlideChange}
					className="mySwiper"
				>
					<div className={`slider__counter ${activeSlide === 0 ? 'active-slide' : ''}`}>
            <span className="slide-number">
              {`${(activeSlide + 1).toString().padStart(2, '0')}`}
            </span>
						/
						{totalSlides}
					</div>
					<div className="custom__pagination-testimonial"></div>
					<BtnSlider className="arrow__buttons-testimonial"/>
					<SwiperSlide>
						<div className="testimonial__main">
							<img src={secondSliderPhoto1} alt="sliderPhoto" className="testimonial__main-img"/>
							<div className="testimonial__info">
								<div className="testimonial__top top__content">
									<div className="top__content-main">
										<ChangeTestimonialTitle/>
										<div className="top__content-number">{topContentNumber}</div>
										<h2 className="top__content-title">
											testimonial
										</h2>
									</div>
								</div>
								<div className="testimonial__text">
									<div className="testimonial__text-svg">
										<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M6.66662 23.2516H10.6666L13.3333 17.9182V9.91821H5.33329V17.9182H9.33329L6.66662 23.2516ZM20 23.2516H24L26.6666 17.9182V9.91821H18.6666V17.9182H22.6666L20 23.2516Z"
												fill="#FE390C"/>
										</svg>
									</div>
									<p className="testimonial__desk">
										Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
										duis
										enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
									</p>
									<h4 className="testimonial__name">Esther Howard</h4>
									<h5 className="testimonial__sub-name">CEO of Adebe</h5>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="testimonial__main">
							<img src={secondSliderPhoto2} alt="sliderPhoto" className="testimonial__main-img"/>
							<div className="testimonial__info">
								<div className="testimonial__top top__content">
									<div className="top__content-main">
										<div className="top__content-number">{topContentNumber}</div>
										<h2 className="top__content-title">
											testimonial
										</h2>
									</div>
									<div className="slide-counter">

									</div>
								</div>
								<div className="testimonial__text">
									<div className="testimonial__text-svg">
										<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M6.66662 23.2516H10.6666L13.3333 17.9182V9.91821H5.33329V17.9182H9.33329L6.66662 23.2516ZM20 23.2516H24L26.6666 17.9182V9.91821H18.6666V17.9182H22.6666L20 23.2516Z"
												fill="#FE390C"/>
										</svg>
									</div>
									<p className="testimonial__desk">
										Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
										duis
										enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
									</p>
									<h4 className="testimonial__name">Esther Howard</h4>
									<h5 className="testimonial__sub-name">CEO of Adebe</h5>
								</div>
							</div>

						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="testimonial__main">
							<img src={secondSliderPhoto3} alt="sliderPhoto" className="testimonial__main-img"/>
							<div className="testimonial__info">
								<div className="testimonial__top top__content">
									<div className="top__content-main">
										<div className="top__content-number">{topContentNumber}</div>
										<h2 className="top__content-title">
											testimonial
										</h2>
									</div>
									<div className="slide-counter">
									</div>
								</div>
								<div className="testimonial__text">
									<div className="testimonial__text-svg">
										<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M6.66662 23.2516H10.6666L13.3333 17.9182V9.91821H5.33329V17.9182H9.33329L6.66662 23.2516ZM20 23.2516H24L26.6666 17.9182V9.91821H18.6666V17.9182H22.6666L20 23.2516Z"
												fill="#FE390C"/>
										</svg>
									</div>
									<p className="testimonial__desk">
										Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
										duis
										enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
									</p>
									<h4 className="testimonial__name">Esther Howard</h4>
									<h5 className="testimonial__sub-name">CEO of Adebe</h5>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	)
}
export default SliderTestimonial;