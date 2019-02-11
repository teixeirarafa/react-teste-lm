import * as React  from 'react';
import { shallow } from './enzyme';

import NavBar from '../NavBar';

describe('NavBar component tests', () => {

    it('renderiza o NavBar', () => {
        const updateQuery = jest.fn();
        const props = {
            'query': '',
            'updateQuery': updateQuery
        }
        const wrapper = shallow(<NavBar {...props} />);
        expect(wrapper)
    });
    
    it('simula o evento onChange do elemento input', () => {
        const updateQuery = jest.fn();
        const props = {
            'query': '',
            'updateQuery': updateQuery
        }
        const wrapper = shallow(<NavBar {...props} />);
        wrapper.find('input').simulate('change', {target: {value: 'none'}});
        expect(updateQuery).toBeCalledTimes(1);
    });
});