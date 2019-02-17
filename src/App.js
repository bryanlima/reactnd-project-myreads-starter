import React from 'react'
import './App.css'
import ListBooks from './components/ListBooks';
import * as BooksAPI from './BooksAPI';
import SearchBooks from './components/SearchBooks';
import { Route, Link } from 'react-router-dom';

export default class BooksApp extends React.Component {

  state = {
    books: [],
    queryBooks: []
  }

  getUserBooks = async () => {
    const books = await BooksAPI.getAll();
    this.setState({ books });
  }

  onBookShelfChange = async (shelf, book) => {
    await BooksAPI.update(book.id, shelf);
    book.shelf = shelf;

    let queryBooks = this.state.queryBooks;
    if (queryBooks.some(b => b.id === book.id)) {
      queryBooks = this.state.queryBooks.filter(b => b.id !== book.id).concat([book]);
    }

    this.setState(state => {
      return ({
        books: state.books.filter(b => b.id !== book.id).concat([book]),
        queryBooks
      });
    })
  }

  searchBook = async (query) => {
    let queryBooks = [];
    if (query !== null && query !== '') {
      const response = await BooksAPI.search(query);
      queryBooks = response.error !== "empty query" ? response : [];

      queryBooks = queryBooks.map(b => {
        const book = this.state.books.find(book => book.id === b.id);
        book !== undefined ? b.shelf = book.shelf : b.shelf = 'none';
        return b;
      });
    }

    this.setState({
      queryBooks: queryBooks
    })
  }

  async componentDidMount() {
    await this.getUserBooks();
  }

  render() {
    const { books, queryBooks } = this.state;

    return (
      <div className='app'>
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <ListBooks
              books={books}
              onBookShelfChange={this.onBookShelfChange}
            />
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>)}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <SearchBooks
              books={queryBooks}
              onBookShelfChange={this.onBookShelfChange}
              onSearch={this.searchBook} />
          )}
        />
      </div>
    );
  }
}