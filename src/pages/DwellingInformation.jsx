//PAGES INFORMATIONS SUR UN LOGEMENT

//Importation des composants pour construire la page d'information sur un logement.
import ImageDwelling from "../components/DwellingInformation/ImageDwelling";
import InfoDwelling from "../components/DwellingInformation/InfoDwelling";
import InfoRodDwelling from "../components/DwellingInformation/InfoRodDwelling";
//Importation des données nécéssaires pour contstruire la page.
import Data from "../data/data.json";
//Importation de useParams pour la récupération de l'id du logement
import { useParams } from "react-router-dom";

//Composant fonction qui retourne les éléments pour la construction de la page d'information sur un logement.
function DwellingInfo() {
    const { id } = useParams();

    const data = Data.find((dwelling) => dwelling.id == id);

    return (
        <>
            <div className="image-dwelling__container">
                <ImageDwelling dwelling={data} />
            </div>
            <div className="info-dwelling__container">
                <InfoDwelling dwelling={data} />
            </div>
            <div className="info-dwelling__bottom">
                <InfoRodDwelling title="Description" texte={data.description} />
                <InfoRodDwelling
                    title="Équipements"
                    texte={data.equipments.map((equipement) => (
                        <p key={data.id + equipement}>{equipement}</p>
                    ))}
                />
            </div>
        </>
    );
}

//Exportation du composant fonction
export default DwellingInfo;
