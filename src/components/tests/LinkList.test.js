import * as React  from 'react';
import { shallow } from './enzyme';

import LinkList from '../LinkList';

describe('LinkList component tests', () => {

    it('renderiza o LinkList com um link, category: ux_ui', () => {
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

    it('renderiza o LinkList com um link, category: case_study', () => {
        const addUpvotes = jest.fn();
        const props = {
            'link': {
                "meta": {
                  "author": "Danil Ishutin",
                  "title": "Font Size Idea: px at Root, rem for Components, em for Text Elements",
                  "url": "css-tricks.com"
                },
                "category": "case_study",
                "comments": 7,
                "created_at": 1459857600,
                "upvotes": 9
              },
            'addUpvotes': addUpvotes
        }
        const wrapper = shallow(<LinkList {...props} />);        
        expect(wrapper)
    });

    it('renderiza o LinkList com um link, category: product_design', () => {
        const addUpvotes = jest.fn();
        const props = {
            'link': {
                "meta": {
                  "author": "Danil Ishutin",
                  "title": "Font Size Idea: px at Root, rem for Components, em for Text Elements",
                  "url": "css-tricks.com"
                },
                "category": "product_design",
                "comments": 7,
                "created_at": 1459857600,
                "upvotes": 9
              },
            'addUpvotes': addUpvotes
        }
        const wrapper = shallow(<LinkList {...props} />);        
        expect(wrapper)
    });

    it('renderiza o LinkList com um link, category: discussion', () => {
        const addUpvotes = jest.fn();
        const props = {
            'link': {
                "meta": {
                  "author": "Danil Ishutin",
                  "title": "Font Size Idea: px at Root, rem for Components, em for Text Elements",
                  "url": "css-tricks.com"
                },
                "category": "discussion",
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