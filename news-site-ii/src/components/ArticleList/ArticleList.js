import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js'


function ArticleList({ articles, handleTitleClick }) {
  return (
    articles.map((article, index) => (
      <ArticleTeaser {...article} id={ index + 1 }
        handleTitleClick={handleTitleClick} />
    ))
  );
}

export default ArticleList;