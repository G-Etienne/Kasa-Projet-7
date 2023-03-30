//PAGE ACCUEIL

//Imporation des composants pour construire la page
import Dwellings from "../components/Home/Dwellings";
import ImageHome from "../components/Home/ImageHome";

//Importation des données nécéssaire pour la construction de la page
import Data from "../data/data.json";

//Composant fonction qui retourne les éléments pour la construction de la page d'accueil
function Home() {
    return (
        <>
            <ImageHome />
            <nav className="dwelling_container">
                {Data.map((item) => (
                    <Dwellings key={item.id} dwelling={item} />
                ))}
            </nav>
        </>
    );
}

//Exportation du composant fonction
export default Home;
