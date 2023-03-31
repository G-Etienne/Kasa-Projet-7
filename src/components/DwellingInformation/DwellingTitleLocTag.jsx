//PAGES INFORMATIONS SUR UN LOGEMENT

//Importation du composant Tag
import Tag from "./Tag";

//Composant fonction qui retourne les éléments pour construire la partie avec
//le nom du logement, la localisation et les tags
function DwellingTitleLocTag({ thedwelling }) {
    return (
        <div>
            <h1 className="info-dwelling__title">{thedwelling.title}</h1>
            <p className="info-dwelling__location">{thedwelling.location}</p>
            <div className="info-dwelling__tags">
                {thedwelling.tags.map((tag) => (
                    <Tag key={tag + thedwelling.id} texte={tag} />
                ))}
            </div>
        </div>
    );
}
//Exportation du composant fonction
export default DwellingTitleLocTag;
