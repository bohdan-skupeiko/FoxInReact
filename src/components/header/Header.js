import "./header.css";
import "../../styles/main.css";
import logo from "../../img/logo.svg";
import {NavLink} from "react-router-dom";
import BurgerMenu from "../burger/BurgerMenu";

const Header = () => {

	const activeLink = 'menu__link active';
	const normalLink = 'menu__link';

	return (
		<header className="header">
			<div className="header__container _container">
				<div className="header__content">
					<NavLink to="/" className="header__logo">
						<img src={logo} alt="Logo" className="logo__img"/>
					</NavLink>
					<BurgerMenu/>
					<nav className="header__menu menu">
						<ul className="menu__list">
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
					</nav>

					<div className="header__btn">
						<NavLink to="/contact" className="header__button">CONTACT</NavLink>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;