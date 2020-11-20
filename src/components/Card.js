import React from "react";
import "../styles/Card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faThumbsUp,
  faHeart,
  faHashtag,
} from "@fortawesome/free-solid-svg-icons";

function Card({ image, setSearchField }) {
  const clickTag = (id) => {
    setSearchField(id);
  }
  return (
    <div className="Card">
      <a href={image.largeImageURL} target="#" rel="noopener noreferrer">
        <div
          className="img-div">
          <img src={image.webformatURL} alt='img' className="cardImage" />
        </div>
      </a>
      <div className="info-div">
        <p>
          <FontAwesomeIcon icon={faEye} /> {image.views}
        </p>
        <p>
          <FontAwesomeIcon icon={faThumbsUp} /> {image.likes}
        </p>
        <p>
          <FontAwesomeIcon icon={faHeart} /> {image.favorites}
        </p>
        <p>
          <FontAwesomeIcon icon={faHashtag} />{" "}
          {image.tags.split(",").map((tag) => {
            return <span key={tag} className="tag" onClick={(e) => clickTag(tag)}>{tag}</span>;
          })}
        </p>
      </div>
    </div>
  );
}

export default Card;
