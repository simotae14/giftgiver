import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Gift from './Gift';

configure({adapter: new Adapter()});

describe('Gift', () => {
    // create the shallow rendering
    const gift = shallow(<Gift />);

    it('renders properly', () => {
        expect(gift).toMatchSnapshot();
    });

    // check if it initializes the state
    it('initializes a person and present in `state`', () => {
        expect(gift.state()).toEqual({
            person: '',
            present: ''
        });
    });

    // check the state update when you type into the input person
    describe('when typing into the person input', () => {
        const person = 'Uncle';
        beforeEach(() => {
            gift.find('.input-person').simulate('change', { target: { value: person } });
        });

        it('updates the person in `state`', () => {
            expect(gift.state().person).toEqual(person);
        });
    });
    // check the state update when you type into the input present
    describe('when typing into the present input', () => {
        const present = 'Golf Clubs';
        beforeEach(() => {
            gift.find('.input-present').simulate('change', { target: { value: present } });
        });

        it('updates the present in `state`', () => {
            expect(gift.state().present).toEqual(present);
        });
    });
});