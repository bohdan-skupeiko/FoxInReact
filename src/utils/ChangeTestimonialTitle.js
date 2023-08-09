import { useEffect } from 'react';

const ChangeTestimonialTitle = () => {
	useEffect(() => {
		const adjustTestimonials = () => {
			if (window.innerWidth < 993) {
				const testimonials = document.querySelectorAll('.testimonial__main');
				testimonials.forEach(item => {
					const name = item.querySelector('.top__content-main');
					item.prepend(name);
				});
			}
		};
		adjustTestimonials();

		window.addEventListener('resize', adjustTestimonials);

		return () => {
			window.removeEventListener('resize', adjustTestimonials);
		};
	}, []);
};

export default ChangeTestimonialTitle;