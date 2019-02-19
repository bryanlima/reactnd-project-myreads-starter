import React from 'react';
import { mount } from 'enzyme';
import Book from '../components/Book';

describe('<Book />', () => {

  it('Render <Book /> component', () => {

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
      onBookShelfChange: jest.fn(),
      book: book
    }

    const wrapper = mount(<Book {...mockProps} />);
    wrapper.find("#" + book.id).simulate('change', { target: { id: book.id, value: "read" } });
    expect(mockProps.onBookShelfChange).toHaveBeenCalled();
  });

  it('Render <Book /> component with no book authors and book image', () => {

    const book = {
      "title": "The Linux Command Line",
      "id": "nggnmAEACAAJ",
      "shelf": "currentlyReading"
    };

    const mockBookProps = {
      onBookShelfChange: jest.fn(),
      book: book
    }

    const wrapper = mount(<Book {...mockBookProps} />);
    wrapper.find("#" + book.id).simulate('change', { target: { id: book.id, value: "read" } });
    expect(mockBookProps.onBookShelfChange).toHaveBeenCalled();
  });
});