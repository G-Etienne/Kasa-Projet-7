//PAGE A PROPOS

//importation des composants pour la page
import ImageAbout from "../components/About/ImageAbout";
import InfoRod from "../components/About/InfoRod";

//Importation des données nécéssaire pour construire la page.
import Data from "../data/dataAbout.json";

//Composant fonction qui retourne les éléments pour construire la page a propos
function About() {
    return (
        <div className="about-container">
            <div className="image-about">
                <ImageAbout />
            </div>
            <div className="about-info-container">
                {Data.map((item) => (
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
