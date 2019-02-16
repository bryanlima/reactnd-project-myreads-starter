import React from 'react';
import PropTypes from 'prop-types';

export default class Book extends React.Component {

  static propTypes = {
    onBookShelfChange: PropTypes.func.isRequired
  }

  bookCover(urlImg) {

    return (
      <div
        className="book-cover" style={{
          width: 128,
          height: 193,
          backgroundImage: 'url("' + urlImg + '")' }}
      />
    );
  }

  bookShelfChanger(bookId) {

    return (
      <div className="book-shelf-changer">
        <select id={bookId} onChange={(event) => this.handlerBookShelfChanger(event)}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }

  handlerBookShelfChanger(event) {

    event.preventDefault();

    const bookId = event.target.id;
    const shelf = event.target.value;

    this.props.onBookShelfChange(shelf, bookId);
  }

  render() {

    const book = this.props.book;

    return (
      <div className="book">
        <div className="book-top">
          {this.bookCover(book.imageLinks.smallThumbnail)}
          {this.bookShelfChanger(book.id)}
        </div>
        <div className="book-title">{book.title}</div>
        {book.authors.map(author => <div className="book-authors">{author}</div>)}
      </div>
    );
  }
}