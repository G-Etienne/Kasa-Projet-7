import { NavLink } from "react-router-dom";

function Dwellings({ dwelling }) {
    return (
        <NavLink to={"/dwelling/" + dwelling.id} className="itemPresentation">
            <img
                className="itemPresentation__image"
                src={dwelling.cover}
                alt="Première image du logement"
            />
            <h2 className="itemPresentation__title">{dwelling.title}</h2>
        </NavLink>
    );
}

export default Dwellings;
