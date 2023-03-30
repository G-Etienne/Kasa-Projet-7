import ImageDwelling from "../components/ImageDwelling";
import InfoDwelling from "../components/InfoDwelling";
import InfoRodDwelling from "../components/InfoRodDwelling";
import Data from "../data/data.json";
import { useParams } from "react-router-dom";

function DwellingInfo() {
    const { id } = useParams();

    const data = Data.find((dwelling) => dwelling.id == id);

    return (
        <>
            <div className="image-dwelling__container">
                <ImageDwelling dwelling={data} />
            </div>
            <div className="info-dwelling__container">
                <InfoDwelling dwelling={data} />
            </div>
            <div className="info-dwelling__bottom">
                <InfoRodDwelling title="Description" texte={data.description} />
                <InfoRodDwelling
                    title="Équipements"
                    texte={data.equipments.map((equipement) => (
                        <p key={data.id + equipement}>{equipement}</p>
                    ))}
                />
            </div>
        </>
    );
}

export default DwellingInfo;
