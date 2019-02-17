import React from 'react';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';

export default class ListBooks extends React.PureComponent {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onBookShelfChange: PropTypes.func.isRequired
  };

  render() {

    const { books } = this.props;

    return (
      <div className="list-books-content">
        <div>
          <BookShelf onBookShelfChange={this.props.onBookShelfChange} shelf='Currently Reading' books={books.filter(book => book.shelf === 'currentlyReading')} />
          <BookShelf onBookShelfChange={this.props.onBookShelfChange} shelf='Want to Read' books={books.filter(book => book.shelf === 'wantToRead')} />
          <BookShelf onBookShelfChange={this.props.onBookShelfChange} shelf='Read' books={books.filter(book => book.shelf === 'read')} />
        </div>
      </div>
    );
  }
}