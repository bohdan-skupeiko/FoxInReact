import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

function BurgerMenu() {
	const [isActive, setIsActive] = useState(false);
	const activeLink = 'menu__link active';
	const normalLink = 'menu__link';
	const toggleMenu = () => {
		setIsActive(!isActive);
		document.body.classList.toggle('look');
	};

	return (
		<div>
			<div className={`header__burger  ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
				<span></span>
			</div>
			<div className={`header__menu ${isActive ? 'menu__active' : ''}`} onClick={toggleMenu}>
				<ul className="menu__list menu__mobile">
					<li className="menu__item">
						<NavLink to="/" className={({isActive}) =>  isActive ? activeLink : normalLink}>HOME</NavLink>
					</li>
					<li className="menu__item">
						<NavLink to="/about" className={({isActive}) =>  isActive ? activeLink : normalLink}>ABOUT</NavLink>
					</li>
					<li className="menu__item ">
						<NavLink to="/service" className={({isActive}) =>  isActive ? activeLink : normalLink}>SERVICE</NavLink>
					</li>
					<li className="menu__item">
						<NavLink to="/portfolio" className={({isActive}) =>  isActive ? activeLink : normalLink}>PORTFOLIO</NavLink>
					</li>
					<li className="menu__item">
						<NavLink to="/contact" className={({isActive}) =>  isActive ? activeLink : normalLink}>CONTACT</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
}
export default BurgerMenu;