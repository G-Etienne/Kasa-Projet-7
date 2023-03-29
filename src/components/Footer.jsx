import logo from "../assets/logo/Kasa-footer.png";

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

export default Footer;
