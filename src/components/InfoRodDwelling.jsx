import { useState } from "react";
import ImageButton from "../assets/images/V-buttom.png";

function InfoRod({ title, texte }) {
    const [isOpen, setIsOpen] = useState(false);

    if (isOpen === true) {
        return (
            <div className="about info-container">
                <div className="about__title-container info">
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
            <div className="about info-container">
                <div className="about__title-container info">
                    <h2 className="about__title">{title}</h2>
                    <img
                        onClick={() => setIsOpen(true)}
                        src={ImageButton}
                        alt="Image pour le bouton fermer/ouvrir des barres d'informations."
                        className="about__title-button"
                    />
                </div>
            </div>
        );
    }
}

export default InfoRod;
