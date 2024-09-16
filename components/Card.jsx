import './Card.css';
import PropTypes from "prop-types";

function Card({image, titre, description}) {
    return (
        <div id="card"  className="card">
            <img src={image} alt="image" />
            <div className="container">
                <h4>{titre}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
}
Card.propTypes = {
    image: PropTypes.string.isRequired,
    titre: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default Card;
