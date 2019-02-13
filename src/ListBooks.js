import React from 'react';
import BookShelf from './BookShelf';

class ListBooks extends React.Component {

    render() {

        debugger;
        const { books } = this.props;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf onBookShelfChange={this.props.onBookShelfChange} shelf='Currently Reading' books={books.filter(book => book.shelf === 'currentlyReading')} />
                        <BookShelf shelf='Want to Read' books={books.filter(book => book.shelf === 'wantToRead')} />
                        <BookShelf shelf='Read' books={books.filter(book => book.shelf === 'read')} />
                    </div>
                </div>
                <div className="open-search">
                    <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                </div>
            </div>
        );
    }
}

export default ListBooks;