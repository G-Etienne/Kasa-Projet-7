//PAGES INFORMATIONS SUR UN LOGEMENT

//Importation de font awesome pour les étoiles
//Importation de l'icone étoile

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

//Composant fonction qui retourne les éléments pour construir la partie
//note (avec les étoiles)
function DwellingStar({ thedwelling }) {
    //Constance qui contien la note du logement
    const howManyStar = parseInt(thedwelling.rating);

    //fonction qui assigne un sélécteur à l'étoile en fonction de la note
    //Permet d'afficher les étoiles de couleur et grise.
    const ColorStar = (number) => {
        if (howManyStar >= number) {
            return "info-host__star-color";
        } else {
            return "info-host__star-grey";
        }
    };
    return (
        <div className="info-host__star">
            <FontAwesomeIcon
                className={ColorStar(1)}
                icon={faStar}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
                className={ColorStar(2)}
                icon={faStar}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
                className={ColorStar(3)}
                icon={faStar}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
                className={ColorStar(4)}
                icon={faStar}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
                className={ColorStar(5)}
                icon={faStar}
            ></FontAwesomeIcon>
        </div>
    );
}

//Exportation du composant fonction
export default DwellingStar;
