import image from "../assets/images/image-a-propo.png";

function ImageAbout() {
    return (
        <img
            className="image-about__image"
            src={image}
            alt="Image de montagnes, page à propos."
        />
    );
}

export default ImageAbout;
