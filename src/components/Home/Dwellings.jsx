//PAGE ACCUEIL

//Importation de NavLink pour rediriger l'utilisateur vers la page
//d'informations du logement choisi
import { NavLink } from "react-router-dom";

//Composant fonction qui retourne un élément permettant de présenter un logement.
function Dwellings({ dwelling }) {
    return (
        <NavLink to={"/dwelling/" + dwelling.id} className="itemPresentation">
            <img
                className="itemPresentation__image"
                src={dwelling.cover}
                alt="Première image du logement"
            />
            <h2 className="itemPresentation__title">{dwelling.title}</h2>
        </NavLink>
    );
}

//Exportation du composant fonction
export default Dwellings;
