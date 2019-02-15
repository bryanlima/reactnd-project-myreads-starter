import React from 'react';
import Book from './Book';

class SearchBooks extends React.Component {

  state = {
    query: ''
  }

  bookResult(books) {

    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map(book => 
            <li><Book book={book} onBookShelfChange={this.props.onBookShelfChange} /></li>
          )}
          
        </ol>
      </div>
    );
  }

  updateQuery(event) {
    debugger;
    event.preventDefault();

    this.setState({ query: event.target.value });
  }

  render() {
    debugger;
    const { query } = this.state;
    const { books } = this.props;
    const filtredBooks = query === '' ? null : books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input onChange={(event) => this.updateQuery(event)} type="text" placeholder="Search by title or author" />

          </div>
        </div>
        {filtredBooks && (this.bookResult(filtredBooks))}
      </div>
    );
  }
}

export default SearchBooks;