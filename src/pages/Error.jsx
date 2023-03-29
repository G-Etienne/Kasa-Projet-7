import { NavLink } from "react-router-dom";

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

export default Error;
