import React from 'react';
import BookmarkedRepository from './BookmarkedRepository';
import renderer from 'react-test-renderer';

describe('BookmarkedRepository', () => {
    const repository = {
        id : 1,
        name : "test",
        owner : "test_owner",
        stars : 2,
        forks : 3
    };
    it('should match the snapshot', () => {
        const component = renderer.create(<BookmarkedRepository repository={repository} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
});