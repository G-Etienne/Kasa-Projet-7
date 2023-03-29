import Dwellings from "../components/dwellings";
import Data from "../data/data.json";

import ImageHome from "../components/ImageHome";

function Home() {
    return (
        <>
            <ImageHome />
            <div className="dwelling_container">
                {Data.map((item) => (
                    <Dwellings key={item.id} dwelling={item} />
                ))}
            </div>
        </>
    );
}

export default Home;
