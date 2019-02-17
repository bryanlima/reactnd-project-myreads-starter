import React from 'react';
import PropTypes from 'prop-types';

export default class Book extends React.PureComponent {

  static propTypes = {
    onBookShelfChange: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired
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

  disableOptionIfEqual = (shelf, bookShelf) => shelf === bookShelf ? "disabled" : "";

  bookShelfChanger(book) {

    return (
      <div className="book-shelf-changer">
        <select key={book.id} onChange={(event) => this.handlerBookShelfChanger(event, book)}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }

  handlerBookShelfChanger(event, book) {

    event.preventDefault();
    const shelf = event.target.value;
    this.props.onBookShelfChange(shelf, book);
  }

  render() {

    const { book } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          {book.imageLinks && (this.bookCover(book.imageLinks.smallThumbnail))}
          {this.bookShelfChanger(book)}
        </div>
        <div className="book-title">{book.title}</div>
        <ul className="book-authors-list">
          {book.authors && (book.authors.map(author => <li className="book-authors">{author}</li>))}
        </ul>
      </div>
    );
  }
}