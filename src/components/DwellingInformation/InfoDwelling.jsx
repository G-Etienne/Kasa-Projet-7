//PAGES INFORMATIONS SUR UN LOGEMENT

//Importation du composant Tag
//Importation de fontAwesome pour les étoiles (note)
//Importation de l'icone étoile
import Tag from "./Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

//Composant fonction qui retourne les éléments pour construire les informations
//Ces éléments ne servent qu'a construire la partie des informations qui ne sont pas
//dans les barres ouvrantes et fermantes
function InfoDwelling({ dwelling }) {
    //Constance qui contien la note du logement
    const howManyStar = parseInt(dwelling.rating);

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
        <>
            <div>
                <h1 className="info-dwelling__title">{dwelling.title}</h1>
                <p className="info-dwelling__location">{dwelling.location}</p>
                <div className="info-dwelling__tags">
                    {dwelling.tags.map((tag) => (
                        <Tag key={tag + dwelling.id} texte={tag} />
                    ))}
                </div>
            </div>
            <div className="info-host-and-star">
                <div className="info-host">
                    <p className="info-host__name">{dwelling.host.name}</p>
                    <img
                        className="info-host__picture"
                        src={dwelling.host.picture}
                        alt="Photo de la personne qui loue son logement."
                    />
                </div>
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
            </div>
        </>
    );
}

//Exportation du composant fonction
export default InfoDwelling;
