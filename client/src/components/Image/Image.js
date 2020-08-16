import React, { useState } from "react";

import ImageInfo from "./ImageInfo";
import "./Image.css";

function Image(props) {
  const [isHovered, setIsHovered] = useState(0);

  const toggleInHover = () => {
    setIsHovered(1);
  };
  const toggleOutHover = () => {
    setIsHovered(0);
  };

  return (
    <React.Fragment>
      {isHovered ? (
        <ImageInfo
          toggleOut={toggleOutHover}
          description={props.description}
          likes={props.likes}
        />
      ) : (
        <img
          class="img-gallery"
          onMouseEnter={toggleInHover}
          src={props.url}
          width="100"
          height="100"
        ></img>
      )}
    </React.Fragment>
  );
}

export default Image;
