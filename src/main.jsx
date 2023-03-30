//Fichier JSX principale du site
//Importation de React, react routeur dom et des routes du site
import React from "react";
import ReactDOM from "react-dom/client";
import Roads from "./routes/route";

//Importation du fichier contenant le style du site
import "./styles/main.scss";

//Branchement de notre fichier React à notre fichier index.html
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Roads />
    </React.StrictMode>
);
