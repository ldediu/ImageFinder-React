import React from "react";
import "../styles/Card.scss";


function Card({image}) {
    return (
        <div className="Card">
            <h1>Card</h1>
            <img src={image.webformatURL} alt='img' className="cardImage" />
        </div>
    );
}

export default Card;