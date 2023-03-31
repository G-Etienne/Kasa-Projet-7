//PAGES INFORMATIONS SUR UN LOGEMENT

//Importation du composant contenant le titre du logement, la localisation et les tags
//Importation du composant pour le nom et la photo de l'hôte
//Importation du composant pour les étoiles
import DwellingTitleLocTag from "./DwellingTitleLocTag";
import DwellingInfosHost from "./DwellingInfoHost";
import DwellingStar from "./DwellingStar";

//Composant fonction qui retourne les éléments pour construire les informations
//Ces éléments ne servent qu'a construire la partie des informations qui ne sont pas
//dans les barres ouvrantes et fermantes
function InfoDwelling({ dwelling }) {
    return (
        <>
            <DwellingTitleLocTag thedwelling={dwelling} />
            <div className="info-host-and-star">
                <DwellingInfosHost thedwelling={dwelling} />

                <DwellingStar thedwelling={dwelling} />
            </div>
        </>
    );
}

//Exportation du composant fonction
export default InfoDwelling;
