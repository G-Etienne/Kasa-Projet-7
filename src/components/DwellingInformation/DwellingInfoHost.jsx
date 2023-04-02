//PAGE INFORMATIONS SUR UN LOGEMENT

//Composant fonction qui retourne les éléments pour construire la partie informations sur l'hôte
function DwellingInfosHost({ thedwelling }) {
    return (
        <div className="info-host">
            <p className="info-host__name">{thedwelling.host.name}</p>
            <img
                className="info-host__picture"
                src={thedwelling.host.picture}
                alt="Photo de la personne qui loue son logement."
            />
        </div>
    );
}

//Exportation du composant fonction
export default DwellingInfosHost;
