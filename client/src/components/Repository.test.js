import React from 'react';
import Repository from './Repository';
import renderer from 'react-test-renderer';

describe('Repository', () => {
    const repository = {
        id : 1,
        name : "test",
        owner : "test_owner",
        stars : 2,
        forks : 3
    };
    it('should match the snapshot', () => {
        const component = renderer.create(<Repository repository={repository} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
});