import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Gift from './Gift';

configure({adapter: new Adapter()});

describe('Gift', () => {
    // mock of the remove function
    const mockRemove = jest.fn();
    const id = 1;
    // create the props
    const props = {
        gift: {
            id
        },
        removeGift: mockRemove
    };
    // create the shallow rendering
    const gift = shallow(<Gift {...props} />);

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
    // check the removal of a gift
    describe('when clicking the `Remove Gift` button', () => {
        beforeEach(() => {
            gift.find('.btn-remove').simulate('click');
        });
        it('calls the removeGift callback', () => {
            expect(mockRemove).toHaveBeenCalledWith(id);
        });
    });
});