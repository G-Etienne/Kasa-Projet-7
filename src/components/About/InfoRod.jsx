//PAGE A PROPOS

//importation de useState
//importation de l'image du bouton pour ouvrir et fermer les barres
import { useState } from "react";
import ImageButton from "../../assets/images/V-buttom.png";

//Composant fonction qui retourne des éléments pour construire les barres contenant les informations
//Si isOpen est false --> la barre est fermer, sinon elle affiche les informations
function InfoRod({ title, texte }) {
    const [isOpen, setIsOpen] = useState(false);

    if (isOpen === true) {
        return (
            <div className="about">
                <div
                    onClick={() => setIsOpen(false)}
                    className="about__title-container"
                >
                    <h2 className="about__title">{title}</h2>
                    <img
                        style={{ rotate: "180deg" }}
                        onClick={() => setIsOpen(false)}
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
            <div className="about">
                <div
                    onClick={() => setIsOpen(true)}
                    className="about__title-container"
                >
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
export default InfoRod;
