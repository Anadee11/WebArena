import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import React from "react";
import ContentModal from "../ContentModal/ContentModal";

const SingleContent = ({ id, poster, title, date, media_type }) => {
  return (
    <ContentModal id={id}>
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {(media_type = "Movie")}
        <span className="subTitle">{date}</span>
      </span>
    </ContentModal>
  );
};

export default SingleContent;
