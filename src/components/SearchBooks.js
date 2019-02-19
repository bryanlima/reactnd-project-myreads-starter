import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';

export default class SearchBooks extends React.Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onBookShelfChange: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired
  }

  bookResultGrid(books, onBookShelfChange) {
    const currentlyReading = "currentlyReading";
    const wantToRead = "wantToRead";
    const read = "read";
    const none = "none";

    return (
      <span>
        {books.some(book => book.shelf === currentlyReading) && (<BookShelf onBookShelfChange={onBookShelfChange} shelf='Currently Reading' books={books.filter(book => book.shelf === currentlyReading)} />)}
        {books.some(book => book.shelf === wantToRead) && (<BookShelf onBookShelfChange={onBookShelfChange} shelf='Want to Read' books={books.filter(book => book.shelf === wantToRead)} />)}
        {books.some(book => book.shelf === read) && (<BookShelf onBookShelfChange={onBookShelfChange} shelf='Read' books={books.filter(book => book.shelf === read)} />)}
        {books.some(book => book.shelf === none) && (<BookShelf onBookShelfChange={onBookShelfChange} shelf='None' books={books.filter(book => book.shelf === none)} />)}
      </span>
    );
  }

  bookResult(books) {

    return (
      <div className="search-books-results">{this.bookResultGrid(books, this.props.onBookShelfChange)}</div>
    );
  }

  updateQuery(event) {
    event.preventDefault();

    this.props.onSearch(event.target.value);
  }

  async componentWillUnmount() {
    this.props.onSearch(null);
  }

  render() {
    const { books } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/'
            className='close-search'
            value='Close'>
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              id='search-books'
              ref={input => input && input.focus()}
              onChange={(event) => this.updateQuery(event)}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        {this.bookResult(books)}
      </div>
    );
  }
}