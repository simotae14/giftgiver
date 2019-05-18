import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

configure({adapter: new Adapter()});

// create the group of tests
describe('App', () => {
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

    // scenario: Click the add click button
    describe('when clicking the `add-gift` button', () => {
        beforeEach(() => {
            // find the button and click it
            app.find('.btn-add').simulate('click');
        });
        // reset the state to the default value
        afterEach(() => {
            // reset the state
            app.setState({
                gifts: []
            });
        });
        // update the state when we click the add gift button
        it('adds a new gift to `state`', () => {
            // add a gift into the state
            expect(app.state().gifts).toEqual([{
                id: 1
            }]);
        });

        // render the new gift in the list of gifts
        it('adds a new gift to the rendered list', () => {
            // check if the gift list children are 2
            expect(app.find('.gift-list').children().length).toEqual(1);
        });
    });

});