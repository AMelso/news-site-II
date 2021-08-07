function Article(props) {
  
    const { title, created_date: createdDate, abstract, byline, image } = props;
    // if img exists do this
    return (
      <div>
        <h1>{ title }</h1>
        <p>{ createdDate }</p>
        { byline && <h2>{ byline }</h2> }
        {<img src={ image }/> }
        <p>{ abstract }</p>
      </div>
    )
  
}

export default Article;


