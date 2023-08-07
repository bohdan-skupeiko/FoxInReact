import {NavLink} from "react-router-dom";

const Menu = () => {
	const activeLink = 'menu__link active';
	const normalLink = 'menu__link';
	return (
		<>
			<li className="menu__item">
				<NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>HOME</NavLink>
			</li>
			<li className="menu__item">
				<NavLink to="/about" className={({isActive}) => isActive ? activeLink : normalLink}>ABOUT</NavLink>
			</li>
			<li className="menu__item ">
				<NavLink to="/service" className={({isActive}) => isActive ? activeLink : normalLink}>SERVICE</NavLink>
			</li>
			<li className="menu__item">
				<NavLink to="/portfolio" className={({isActive}) => isActive ? activeLink : normalLink}>PORTFOLIO</NavLink>
			</li>
			<li className="menu__item">
				<NavLink to="/contact" className={({isActive}) => isActive ? activeLink : normalLink}>CONTACT</NavLink>
			</li>
		</>
	);
}

export default Menu;