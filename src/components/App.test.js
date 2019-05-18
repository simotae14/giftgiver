import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

configure({adapter: new Adapter()});

// create the shallow rendering
const app = shallow(<App />);

// 1st unit test, renders correctly App
it('renders correctly', () => {
    expect(toJson(app)).toMatchSnapshot();
});

// 2nd unit test, initialize component state with an empty list of gifts
it('initializes the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
});

// update the state when we click the add gift button
it('adds a new gift to `state` when clicking the `add gift` button', () => {
    // find the button and click it
    app.find('.btn-add').simulate('click');

    // add a gift into the state
    expect(app.state().gifts).toEqual([{
        id: 1
    }]);
});

// render the new gift in the list of gifts
it('adds a new gift to the rendered list when clicking the `add gift` button', () => {
    // simulate click on the button
    app.find('.btn-add').simulate('click');

    // check if the gift list children are 2
    expect(app.find('.gift-list').children().length).toEqual(2);
});