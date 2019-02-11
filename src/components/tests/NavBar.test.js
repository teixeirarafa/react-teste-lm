import * as React  from 'react';
import { shallow } from './enzyme';

import NavBar from '../NavBar';

describe('NavBar component tests', () => {

    it('renderiza o NavBar', () => {        
        const wrapper = shallow(<NavBar />);        
        expect(wrapper)
    });
    
});