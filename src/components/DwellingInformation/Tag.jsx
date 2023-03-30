//PAGES INFORMATIONS SUR UN LOGEMENT

//Composant fonction qui retourne un élément Tag
function Tag({ texte }) {
    return (
        <div className="tag__container">
            <p className="tag__texte">{texte}</p>
        </div>
    );
}

//Exportation du composant fonction
export default Tag;
