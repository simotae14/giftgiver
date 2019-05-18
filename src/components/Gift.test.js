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
});