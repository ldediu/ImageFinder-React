import React from "react";
import "../styles/ImagesContainer.scss";
import Card from "./Card";
import noMatch from "../img/nomatch.gif"

function ImagesContainer({ imagesData, isLoading }) {
  return (
    <div className="ImagesContainer">
      <h1>Container</h1>
      {!isLoading && imagesData.length === 0 && <img src={noMatch} alt="No images found" />}
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
      {!isLoading &&
        imagesData.map((image) => {
          return <Card key={image.id} image={image} />;
        })}
    </div>
  );
}

export default ImagesContainer;
