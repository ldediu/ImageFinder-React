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

  const changePage = (val) => {
    if (val === 1) {
      setPageNum(pageNum + 1);
    } else {
      setPageNum(pageNum - 1);
    }
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
    console.log("render app");
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&q=${searchField}&image_type=photo&orientation=horizontal&per_page=6&page=${pageNum}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImagesData(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [searchField, pageNum]);

  return (
    <div className="App">
      <HeadNav setSearchField={setSearchField} />
      <ImagesContainer imagesData={imagesData} isLoading={isLoading} />
      <ButtonsNav pageNum={pageNum} changePage={changePage} />
    </div>
  );
}

export default App;
