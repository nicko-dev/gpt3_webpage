import React from "react";
import "./article.css";

const article = ({ imgUrl, date, title }) => {
  return (
    <div className="gpt3__article">
      <img src={imgUrl} alt="blog" />
      <div className="gpt3__article-content">
        <div className="gpt3__article-content_heading">
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <div className="gpt3__article-content_footer">
          <p>Read Full Article</p>
        </div>
      </div>
    </div>
  );
};

export default article;
