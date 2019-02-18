import React from 'react';
import { mount } from 'enzyme';
import BooksApp from '../App';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
  mount(
    <MemoryRouter>
      <BooksApp />
    </MemoryRouter>
  );
});