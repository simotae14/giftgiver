import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// create the shallow rendering
const app = shallow(<App />);

// 1st unit test, renders correctly App
it('renders correctly', () => {
    expect(app).toMatchSnapshot();
});