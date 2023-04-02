//PAGE INFORMATIONS SUR UN LOGEMENT

//Importation de useState et de l'image pour le boutton des barres ouvrantes et fermantes
import { useState } from "react";
import ImageButton from "../../assets/images/V-buttom.png";

//Composant fonction qui permet de construire les barres ouvrantes et fermantes
//Ces barres contiennent les informations pour la description et les équipements
function InfoRodDwelling({ title, texte }) {
    //State pour ouvrir et fermer une barre
    const [isOpen, setIsOpen] = useState(false);

    if (isOpen === true) {
        return (
            <div
                onClick={() => setIsOpen(false)}
                className="about info-container"
            >
                <div className="about__title-container info">
                    <h2 className="about__title">{title}</h2>
                    <img
                        style={{ rotate: "180deg" }}
                        src={ImageButton}
                        alt="Image pour le bouton fermer/ouvrir des barres d'informations."
                        className="about__title-button"
                    />
                </div>
                <p className="about__texte">{texte}</p>
            </div>
        );
    } else if (isOpen === false) {
        return (
            <div
                onClick={() => setIsOpen(true)}
                className="about info-container"
            >
                <div className="about__title-container info">
                    <h2 className="about__title">{title}</h2>
                    <img
                        src={ImageButton}
                        alt="Image pour le bouton fermer/ouvrir des barres d'informations."
                        className="about__title-button"
                    />
                </div>
            </div>
        );
    }
}

//Exportation du composant fonction
export default InfoRodDwelling;
