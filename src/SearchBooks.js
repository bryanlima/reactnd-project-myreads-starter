import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';

export default class SearchBooks extends React.Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onBookShelfChange: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  bookResultGrid(books, onBookShelfChange) {

    return (
      <span>
        <BookShelf onBookShelfChange={onBookShelfChange} shelf='Currently Reading' books={books.filter(book => book.shelf === 'currentlyReading')} />
        <BookShelf onBookShelfChange={onBookShelfChange} shelf='Want to Read' books={books.filter(book => book.shelf === 'wantToRead')} />
        <BookShelf onBookShelfChange={onBookShelfChange} shelf='Read' books={books.filter(book => book.shelf === 'read')} />
        <BookShelf onBookShelfChange={onBookShelfChange} shelf='None' books={books.filter(book => book.shelf === 'none')} />
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

    this.setState({ query: event.target.value });
  }

  render() {
    const { query } = this.state;
    const { books } = this.props;
    const filtredBooks = query === '' ? null : books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/'
            className='close-search' value='Close'>
              Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              ref={input => input && input.focus()}
              onChange={(event) => this.updateQuery(event)}
              type="text"
              placeholder="Search by title or author"
            />

          </div>
        </div>
        {filtredBooks && (this.bookResult(filtredBooks))}
      </div>
    );
  }
}