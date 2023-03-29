import { NavLink } from "react-router-dom";
import logo from "../assets/logo/Kasa.png";

const Header = () => {
    return (
        <header className="header">
            <img
                className="header__image"
                src={logo}
                alt="image logo de kasa"
            />
            <nav>
                <NavLink className="header__link" to="/">
                    Accueil
                </NavLink>
                <NavLink className="header__link" to="/about">
                    A Propos
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
