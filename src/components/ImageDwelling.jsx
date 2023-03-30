import imageButton from "../assets/images/buttom-dwelling.png";
import { useEffect, useState } from "react";

function ImageDwelling({ dwelling }) {
    let [index, setIndex] = useState(0);
    let [bigPicture, setBigPicture] = useState(false);

    const lengthPictures = dwelling.pictures.length;

    useEffect(() => {
        if (index < 0) {
            setIndex(lengthPictures - 1);
        } else if (index > lengthPictures - 1) {
            setIndex(0);
        }
    }, [index, lengthPictures]);

    if (bigPicture === false) {
        return (
            <div className="image-dwelling">
                <img
                    onClick={() => setBigPicture(true)}
                    className="image-dwelling__picture"
                    src={dwelling.pictures[index]}
                    alt="Première photo du logement"
                />
                <img
                    onClick={() => setIndex((index = index - 1))}
                    className="image-dwelling__left-button"
                    src={imageButton}
                    alt="Image pour le bouton gauche."
                />
                <img
                    onClick={() => setIndex((index = index + 1))}
                    className="image-dwelling__right-button"
                    src={imageButton}
                    alt="Image pour le bouton droit."
                />
            </div>
        );
    } else if (bigPicture === true) {
        return (
            <div className="big-image-dwelling">
                <img
                    onClick={() => setBigPicture(false)}
                    className="big-image-dwelling__picture"
                    src={dwelling.pictures[index]}
                    alt="Première photo du logement"
                />
                <img
                    onClick={() => setIndex((index = index - 1))}
                    className="big-image-dwelling__left-button"
                    src={imageButton}
                    alt="Image pour le bouton gauche."
                />
                <img
                    onClick={() => setIndex((index = index + 1))}
                    className="big-image-dwelling__right-button"
                    src={imageButton}
                    alt="Image pour le bouton droit."
                />
            </div>
        );
    }
}

export default ImageDwelling;
