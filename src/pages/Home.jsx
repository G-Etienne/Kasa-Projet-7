import { useEffect, useState } from "react";
import "../styles/Home.css";
import Button from "../components/Button";
import Data from "../data/data.json"

function Home() {
    const [count] = useState(0);

    useEffect(() => {
        console.log(count);
    }, [count]);

    console.log(Data)

    return (
        <div>
            <h1>Salut!</h1>
            <Button>COOOOOL</Button>
            <p>{Data[0].id}</p>
        </div>
    );
}

export default Home;
