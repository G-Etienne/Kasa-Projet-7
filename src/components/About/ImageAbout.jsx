//PAGE A PROPOS

//Importation de l'image de la page A Propos
import image from "../../assets/images/image-a-propo.png";

//Composant fonction qui retourne un élément image avec la photo importer
function ImageAbout() {
    return (
        <img
            className="image-about__image"
            src={image}
            alt="Image de montagnes de la page à propos."
        />
    );
}

//Exportation du composant fonction
export default ImageAbout;
