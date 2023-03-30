//PAGE ERREUR 404
//Importation de NavLink pour le retour à la page accueil
import { NavLink } from "react-router-dom";

//Composant fonction qui retourne les éléments pour construire la page erreur 404
function Error() {
    return (
        <div className="error">
            <p className="error__title">404</p>
            <p className="error__text">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <NavLink className="error__link" to="/">
                Retourner sur la page d'accueil
            </NavLink>
        </div>
    );
}

//Exportation du composant fonction
export default Error;
