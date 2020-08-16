import React, { useState, useEffect } from "react";
import axios from "axios";

import Image from "./Image";
import { Button } from "@material-ui/core";

const ImagesContainer = (props) => {
  const [images, setImages] = useState([]);
  const [pageImages, setPageImages] = useState([]);
  const [pageNum, setPageNum] = useState(0);

  const loadMoreItems = () => {
    setPageNum((prevPageNum) => prevPageNum + 1);
  };

  useEffect(() => {
    console.log("Loading images ....");
    //.get(`{process.env.REACT_APP_WEATHER_API_URL}/api/images`)
    axios
      .get(`http://localhost:3001/api/images`)
      .then((res) => {
        setImages(res.data);
        setPageNum(1);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log("Loading page images ....");
    const arr = images.slice(0, props.rows * pageNum);
    setPageImages(arr);
  }, [pageNum]);

  return (
    <React.Fragment>
      <div className="images-container">
        {pageImages.map((image, index) => (
          <Image
            key={index}
            url={image.url}
            description={image.description}
            likes={image.likes}
          />
        ))}
      </div>
      <Button
        variant="contained"
        color="primary"
        type="button"
        onClick={loadMoreItems}
      >
        Load more ...
      </Button>
    </React.Fragment>
  );
};

export default ImagesContainer;
