import React from 'react';

class Book extends React.Component {

    bookCover(urlImg) {
        return (<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("' + urlImg + '")' }}></div>);
    }

    handlerBookShelfChanger = event => {
        event.preventDefault();

        // 1. get book id
        // 2. get change value

        const bookId = event.target.id;
        const shelf = event.target.value;

        this.props.onBookShelfChange(shelf, bookId);
    }

    bookShelfChanger(bookId) {
        return (
            <div className="book-shelf-changer">
                <select id={bookId} onChange={this.handlerBookShelfChanger}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
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


export default Book;