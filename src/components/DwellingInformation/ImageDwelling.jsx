//PAGES INFORMATIONS SUR UN LOGEMENT

//Importation de l'image pour les boutons de défilement des images.
//Importation de l'image croix pour fermer le mode plein écran
//Importation de useEffect et useState
import imageButton from "../../assets/images/buttom-dwelling.png";
import imageCroix from "../../assets/images/croix.png";
import { useEffect, useState } from "react";

//Composant fonction retourne la partie image de la page
//Si on clique sur l'image, le composants retourner sera une image plus grosse
function ImageDwelling({ dwelling }) {
    //Utilisatoion du state index pour le défilement des images
    let [index, setIndex] = useState(0);
    //Utilisation de bigPicture pour le mode plein écran
    let [bigPicture, setBigPicture] = useState(false);

    //Constance pour définir le nombre d'image pour un logement
    const lengthPictures = dwelling.pictures.length;

    //Fonction qui permet de passe de la dernière image à la première et inversement.
    useEffect(() => {
        if (index < 0) {
            setIndex(lengthPictures - 1);
        } else if (index > lengthPictures - 1) {
            setIndex(0);
        }
    }, [index, lengthPictures]);

    //Condition pour retourner l'image normal ou en plein écran selon le state bigPicture
    //Retourne les éléments pour la construction de la partie image de la page
    //onClick dans les balises images permet la mise à jour du state index
    if (bigPicture === false) {
        if (lengthPictures > 1) {
            return (
                <div className="image-dwelling">
                    <img
                        onClick={() => setBigPicture(true)}
                        className="image-dwelling__picture"
                        src={dwelling.pictures[index]}
                        alt="Première photo du logement"
                    />
                    <img
                        onClick={() => setIndex((index = index - 1))}
                        className="image-dwelling__left-button"
                        src={imageButton}
                        alt="Image pour le bouton gauche."
                    />
                    <img
                        onClick={() => setIndex((index = index + 1))}
                        className="image-dwelling__right-button"
                        src={imageButton}
                        alt="Image pour le bouton droit."
                    />
                </div>
            );
        } else {
            return (
                <div className="image-dwelling">
                    <img
                        onClick={() => setBigPicture(true)}
                        className="image-dwelling__picture"
                        src={dwelling.pictures[index]}
                        alt="Première photo du logement"
                    />
                </div>
            );
        }
    } else if (bigPicture === true) {
        if (lengthPictures > 1) {
            return (
                <div className="big-image-dwelling">
                    <img
                        className="big-image-dwelling__croix"
                        onClick={() => setBigPicture(false)}
                        src={imageCroix}
                        alt="image de croix pour aider à fermer le mode plein écran"
                    />
                    <img
                        onClick={() => setBigPicture(false)}
                        className="big-image-dwelling__picture"
                        src={dwelling.pictures[index]}
                        alt="Première photo du logement"
                    />
                    <img
                        onClick={() => setIndex((index = index - 1))}
                        className="big-image-dwelling__left-button"
                        src={imageButton}
                        alt="Image pour le bouton gauche."
                    />
                    <img
                        onClick={() => setIndex((index = index + 1))}
                        className="big-image-dwelling__right-button"
                        src={imageButton}
                        alt="Image pour le bouton droit."
                    />
                </div>
            );
        } else {
            return (
                <div className="big-image-dwelling">
                    <img
                        className="big-image-dwelling__croix"
                        onClick={() => setBigPicture(false)}
                        src={imageCroix}
                        alt="image de croix pour aider à fermer le mode plein écran"
                    />
                    <img
                        onClick={() => setBigPicture(false)}
                        className="big-image-dwelling__picture"
                        src={dwelling.pictures[index]}
                        alt="Première photo du logement"
                    />
                </div>
            );
        }
    }
}

//Exportation du composant fonction
export default ImageDwelling;
