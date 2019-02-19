import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchBooks from '../components/SearchBooks';
import { MemoryRouter } from 'react-router-dom';

describe('SearchBook component', () => {

  it('Render <SearchBook /> component', () => {

    const books = [
      {
        "title": "Book 1",
        "authors": ["William E. Shotts, Jr."],
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "id": "852",
        "shelf": "read"
      },
      {
        "title": "Book 2",
        "authors": ["William E. Shotts, Jr."],
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "id": "741",
        "shelf": "currentlyReading"
      },
      {
        "title": "Book 3",
        "authors": ["William E. Shotts, Jr."],
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "id": "753",
        "shelf": "wantToRead"
      },
      {
        "title": "Book 4",
        "authors": ["William E. Shotts, Jr."],
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "id": "753",
        "shelf": "none"
      }
    ]

    const mockProps = {
      books,
      onBookShelfChange: jest.fn(),
      onSearch: jest.fn()
    }

    const wrapper = mount(
      <MemoryRouter>
        <SearchBooks {...mockProps} />
      </MemoryRouter>);

    wrapper.find("#search-books").simulate("change", { target: { value: "book 3" } });
    expect(mockProps.onSearch).toHaveBeenCalled();
  });

  it('Limpa resultado de pesquisa quando destroi o componente', () => {

    const books = [
      {
        "title": "Book 1",
        "authors": ["William E. Shotts, Jr."],
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "id": "852",
        "shelf": "read"
      },
      {
        "title": "Book 2",
        "authors": ["William E. Shotts, Jr."],
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "id": "741",
        "shelf": "currentlyReading"
      },
      {
        "title": "Book 3",
        "authors": ["William E. Shotts, Jr."],
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "id": "753",
        "shelf": "wantToRead"
      },
      {
        "title": "Book 4",
        "authors": ["William E. Shotts, Jr."],
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "id": "753",
        "shelf": "none"
      }
    ]

    const mockProps = {
      books,
      onBookShelfChange: jest.fn(),
      onSearch: jest.fn()
    }

    const spyComponentWillUnmount = jest.spyOn(SearchBooks.prototype, "componentWillUnmount");
    const wrapper = mount(
      <MemoryRouter>
        <SearchBooks {...mockProps} />
      </MemoryRouter>);
    wrapper.unmount();

    expect(spyComponentWillUnmount).toHaveBeenCalled();
    expect(mockProps.onSearch).toHaveBeenCalled();
  });
});