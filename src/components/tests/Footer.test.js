import * as React  from 'react';
import { shallow } from './enzyme';

import Footer from '../Footer';

describe('Footer component tests', () => {

    it('renderiza o Footer', () => {        
        const wrapper = shallow(<Footer />);        
        expect(wrapper)
    });
    
});