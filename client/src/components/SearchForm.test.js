import React from 'react';
import SearchForm from './SearchForm';
import renderer from 'react-test-renderer';

describe('SearchForm', () => {

    it('should match the snapshot', () => {
        const component = renderer.create(<SearchForm />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
});

//TO DO : form submit test
