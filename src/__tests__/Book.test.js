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
    // expect(Book.prototype.componentDidMount).to.have.property('callCount', 1);
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



// import React from 'react';
// import PropTypes from 'prop-types';
// import sinon from 'sinon';
// import { shallow, mount } from 'enzyme';

// const willMount = sinon.spy();
// const didMount = sinon.spy();
// const willUnmount = sinon.spy();

// class Foo extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   // this.componentWillUnmount = willUnmount;
//   //   // this.componentWillMount = willMount;
//   //   // this.componentDidMount = didMount;
//   // }

//   componentDidMount() {

//   }

//   render() {
//     const { id } = this.props;
//     return (
//       <div className={id}>
//         {id}
//       </div>
//     );
//   }
// }
// Foo.propTypes = {
//   id: PropTypes.string.isRequired,
// };

// // it('Render <Foo /> component', () => {

// //   const spy = jest.spyOn(Foo.prototype, 'componentDidMount');
// //   const wrapper = mount(<Foo id="foo" />);
// //   expect(spy).toHaveBeenCalled();
// // });