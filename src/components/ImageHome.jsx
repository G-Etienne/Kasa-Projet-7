import Image from "../assets/images/image-home.png";

function ImageHome() {
    return (
        <div className="imageHome">
            <img
                className="imageHome__image"
                src={Image}
                alt="Image de plages Rocheuses"
            />
            <p className="imageHome__texte">Chez vous, Partout et ailleurs</p>
        </div>
    );
}

export default ImageHome;
