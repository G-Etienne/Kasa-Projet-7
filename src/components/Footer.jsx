//Imporation du logo Kasa pour le pied de page
import logo from "../assets/logo/Kasa-footer.png";

//Composant fonction qui retourne un élément footer avec l'image du logo Kasa et le texte du footer.
function Footer() {
    return (
        <footer className="footer">
            <img
                className="footer__image"
                src={logo}
                alt="Logo Kasa pied de page"
            />
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

//Exportation du composant fonction
export default Footer;
