import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ImageInfo =(props)=> {
  return (
    <div class="img-info" onMouseLeave={props.toggleOut}>
      <p>{props.description}</p>
      <FontAwesomeIcon icon={faHeart} />
      <span>{props.likes}</span>
    </div>
  );
}

export default ImageInfo;
