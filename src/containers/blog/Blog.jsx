import React from "react";
import { Article } from "../../components";
import {
  imgBlog01,
  imgBlog02,
  imgBlog03,
  imgBlog04,
  imgBlog05,
} from "./imports";
import "./blog.css";

const articlesData = [
  {
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    imgUrl: imgBlog01,
    link: "",
  },
  {
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    imgUrl: imgBlog02,
    link: "",
  },
  {
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    imgUrl: imgBlog03,
    link: "",
  },
  {
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    imgUrl: imgBlog04,
    link: "",
  },
  {
    date: "Sep 26, 2021",
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    imgUrl: imgBlog05,
    link: "",
  },
];

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening,<br/> We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-content">
        <div className="gpt3__blog-content__first-article">
          <Article
            imgUrl={articlesData[0].imgUrl}
            date={articlesData[0].date}
            title={articlesData[0].title}
          />
        </div>
        <div className="gpt3__blog-content__container">
          {[...articlesData].splice(1).map((a, idx) => (
            <Article
              key={idx}
              imgUrl={a.imgUrl}
              date={a.date}
              title={a.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
