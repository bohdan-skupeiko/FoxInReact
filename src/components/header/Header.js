import "./header.css";
import "../../styles/main.css";
import logo from "../../img/logo.svg";
import {NavLink} from "react-router-dom";
import BurgerMenu from "../burger/BurgerMenu";
import Menu from "../menu/Menu";

const Header = () => {
	return (
		<header className="header">
			<div className="header__container _container">
				<div className="header__content">
					<NavLink to="/" className="header__logo">
						<img src={logo} alt="Logo" className="logo__img"/>
					</NavLink>
					<nav className="header__menu menu">
						<ul className="menu__list">
							<Menu/>
						</ul>
					</nav>
					<BurgerMenu/>
					<div className="header__btn">
						<NavLink to="/contact" className="header__button">CONTACT</NavLink>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;