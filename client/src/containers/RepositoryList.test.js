import React from 'react';
import {RepositoryList} from './RepositoryList';
import renderer from 'react-test-renderer';

describe('Repository', () => {
    const repositories = [{
        id : 1,
        name : "test",
        owner : "test_owner",
        stars : 2,
        forks : 3
    }];
    it('should match the snapshot', () => {
        const component = renderer.create(<RepositoryList repositories={repositories} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
});