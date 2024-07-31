import React from "react";

const ArticleItem = ({ article }) => {
  return (
    <div className="article-item">
      <h3>{article?.source?.name}</h3>
      <p>{article.date ? new Date(article.date)?.toDateString() : "N/A"}</p>
      <p>Author: {article.author || "N/A"}</p>
      <h2>{article.title}</h2>
      <p>{article.description || "N/A"}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
};

export default ArticleItem;
