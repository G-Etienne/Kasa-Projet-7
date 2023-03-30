//PAGES ACCUEIL

//Importation de l'image en haut de la page d'accueil
import Image from "../../assets/images/image-home.png";

//Composants fonction qui retourne une image et le texte à afficher au centre de l'image.
function ImageHome() {
    return (
        <div className="imageHome">
            <img
                className="imageHome__image"
                src={Image}
                alt="Image de plages Rocheuses"
            />
            <p className="imageHome__texte">Chez vous, Partout et ailleurs</p>
        </div>
    );
}

//Exportation du composant fonction
export default ImageHome;
