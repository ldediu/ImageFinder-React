import React from "react";
import "../styles/ImagesContainer.scss";
import Card from "./Card";
import noMatch from "../img/nomatch.gif"

function ImagesContainer({ imagesData, isLoading, setSearchField }) {
  return (
    <div className="ImagesContainer">
      {!isLoading && imagesData.length === 0 && <img className="nomatch-gif" src={noMatch} alt="No images found" />}
      {isLoading && (
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      <div className="img-container">
        {!isLoading &&
          imagesData.map((image) => {
            return <Card key={image.id} image={image} setSearchField={setSearchField}/>;
          })}
      </div>
    </div>
  );
}

export default ImagesContainer;
