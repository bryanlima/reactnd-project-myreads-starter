import React from 'react';
import { shallow, mount } from 'enzyme';
import ListBooks from '../components/ListBooks';

describe('ListBooks component', () => {
  it('Render <ListBooks /> component', () => {

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
      onBookShelfChange: jest.fn()
    }

    const wrapper = mount(<ListBooks {...mockProps} />);
    expect(wrapper.find(".bookshelf-title").length).toEqual(3);
  })
});