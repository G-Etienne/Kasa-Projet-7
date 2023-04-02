//Importation de NavLink pour la navigation entre la page d'accueil et A propos
//Importation de l'image du logo Kasa pour l'en-tête de la page.
import { NavLink } from "react-router-dom";
import logo from "../assets/logo/Kasa.png";

//Composant fonction qui retourne un élément header avec une image et les liens de navigation
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

//Exportation du composant fonction
export default Header;
