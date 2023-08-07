import React, {useState} from 'react';
import Menu from "../menu/Menu";

function BurgerMenu() {
	const [isActive, setIsActive] = useState(false);
	const toggleMenu = () => {
		setIsActive(!isActive);
		document.body.classList.toggle('look');
	};

	return (
		<>
			<div className={`header__burger  ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
				<span></span>
			</div>
			<div className={`header__menu ${isActive ? 'menu__active' : ''}`} onClick={toggleMenu}>
				<ul className="menu__list menu__mobile">
					<Menu/>
				</ul>
			</div>
		</>
	);
}

export default BurgerMenu;