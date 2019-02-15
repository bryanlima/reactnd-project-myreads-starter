import React from 'react';
import Book from './Book';

class BookShelf extends React.Component {

    render() {
        const { shelf, books } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books.map(book =>
                      <li>
                        <Book book={book} onBookShelfChange={this.props.onBookShelfChange} />
                      </li>
                    )}
                  </ol>
                </div>
              </div>
        );
    }
}

export default BookShelf;