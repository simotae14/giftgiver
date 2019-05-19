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
        const id = 1;
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
                id
            }]);
        });

        // render the new gift in the list of gifts
        it('adds a new gift to the rendered list', () => {
            // check if the gift list children are 2
            expect(app.find('.gift-list').children().length).toEqual(1);
        });

        // check if App creates a Gift Component
        it('creates a Gift component', () => {
            expect(app.find('Gift').exists()).toEqual(true);
        });

        // test removal of the added gift
        describe('and the user wants to remove the added gift', () => {
            beforeEach(() => {
                app.instance().removeGift(id);
            });
            // check if it removes the gift from the list
            it('removes the gift from `state`', () => {
                expect(app.state().gifts).toEqual([]);
            });
        });
    });
});