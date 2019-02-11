import * as React  from 'react';
import { shallow } from './enzyme';

import LinkList from '../LinkList';

describe('LinkList component tests', () => {

    it('renderiza o LinkList com um link', () => {
        const addUpvotes = jest.fn();
        const props = {
            'link': {
                "meta": {
                  "author": "Danil Ishutin",
                  "title": "Font Size Idea: px at Root, rem for Components, em for Text Elements",
                  "url": "css-tricks.com"
                },
                "category": "ux_ui",
                "comments": 7,
                "created_at": 1459857600,
                "upvotes": 9
              },
            'addUpvotes': addUpvotes
        }
        const wrapper = shallow(<LinkList {...props} />);        
        expect(wrapper)
    });
    
});