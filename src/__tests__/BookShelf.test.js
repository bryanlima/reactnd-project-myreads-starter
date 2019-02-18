import React from 'react';
import { shallow } from 'enzyme';
import BookShelf from '../components/BookShelf';

describe('', () => {
  it('Render <BookShelf /> component', () => {

    const book = {
      "title": "The Linux Command Line",
      "authors": ["William E. Shotts, Jr."],
      "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      },
      "id": "nggnmAEACAAJ",
      "shelf": "currentlyReading"
    };

    const mockProps = {
      shelf: book.shelf,
      onBookShelfChange: jest.fn(),
      books: [book]
    }

    const wrapper = shallow(<BookShelf {...mockProps} />);
    expect(wrapper.find(book.id));
  });
});