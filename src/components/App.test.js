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