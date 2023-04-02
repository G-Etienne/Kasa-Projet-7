//PAGE A PROPOS

//Importation des composants pour la page
import ImageAbout from "../components/About/ImageAbout";
import InfoRod from "../components/About/InfoRod";

//Importation des données nécéssaires pour construire la page.
import DataAbout from "../data/dataAbout.json";

//Composant fonction qui retourne les éléments pour construire la page A propos
function About() {
    return (
        <div className="about-container">
            <div className="image-about">
                <ImageAbout />
            </div>
            <div className="about-info-container">
                {DataAbout.map((item) => (
                    <InfoRod
                        key={item.title + 1}
                        title={item.title}
                        texte={item.text}
                    />
                ))}
            </div>
        </div>
    );
}

//Exportation du composant fonction
export default About;
