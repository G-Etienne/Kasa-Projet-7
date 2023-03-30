import ImageAbout from "../components/ImageAbout";
import InfoRod from "../components/InfoRod";

import Data from "../data/dataAbout.json";

function About() {
    return (
        <div className="about-container">
            <div className="image-about">
                <ImageAbout />
            </div>
            <div className="about-info-container">
                {Data.map((item) => (
                    <InfoRod
                        key={item.title + 1}
                        title={item.title}
                        texte={item.text}
                    />
                ))}
            </div>
        </div>
    );
}

export default About;
