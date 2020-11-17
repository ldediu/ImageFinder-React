import React from "react";
import "../styles/ImagesContainer.scss";
import Card from "./Card";

function ImagesContainer({ imagesData, isLoading }) {
  return (
    <div className="ImagesContainer">
      <h1>Container</h1>
      {imagesData.map((image) => {
        return <Card key={image.id} image={image} />;
      })}
    </div>
  );
}

export default ImagesContainer;
