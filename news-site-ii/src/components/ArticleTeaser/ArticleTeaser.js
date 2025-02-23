import React, { Component } from 'react';

import {
  Navbar,
} from 'reactstrap';

class ArticleTeaser extends Component {
  render() {
    /* Note: the { created_date: createdDate } syntax in this destructure is
        taking the value of created_date from this.props and setting it to
        a new variable called createdDate
    */
    const { id, title, created_date: createdDate, handleTitleClick } = this.props;

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
}

export default ArticleTeaser;


// Functional solution:
// function ArticleTeaser({ id, title, created_date: createdDate, handleTitleClick }) {
//   return (
//     <div>
//       <a onClick={ () => handleTitleClick(id) }>{ title }</a>
//       <p>{ createdDate }</p>
//     </div>
//   );
// }
