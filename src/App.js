import React, { useState, useEffect } from "react";
import "./styles/App.scss";
import ImagesContainer from "./components/ImagesContainer";
import HeadNav from "./components/HeadNav";
import ButtonsNav from "./components/ButtonsNav";

function App() {
  const [imagesData, setImagesData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [searchField, setSearchField] = useState("");

  const changePage = () => {
    return 1;
  };

  const getData = () => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&q=${searchField}&image_type=photo&orientation=horizontal&per_page=6&page=${pageNum}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImagesData(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };


  useEffect(() => {
      getData();
  });

  return (
    <div className="App">
      <HeadNav />
      <ImagesContainer imagesData={imagesData} isLoading={isLoading} />
      <ButtonsNav />
    </div>
  );
}

export default App;
