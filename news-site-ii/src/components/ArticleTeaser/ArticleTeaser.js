import {
  Navbar,
} from 'reactstrap';

function ArticleTeaser(props) {

  const { id, title, created_date: createdDate, handleTitleClick } = props;

  const handleClick = (event) => {
    event.preventDefault();
    handleTitleClick(id);
  }
  return (
    <Navbar color="light" light expand="md">
    <div>
      <a href='#' onClick={handleClick}>{ title }</a>
      <p>{ createdDate }</p>
    </div>
    </Navbar>
  )
}

export default ArticleTeaser;

