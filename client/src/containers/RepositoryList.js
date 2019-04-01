import React from 'react';
import { connect } from 'react-redux';
import Repository from '../components/Repository';
import { addBookmark } from "../actions";

export function RepositoryList({ repositories, onAddBookmark }) {
  const repositoriesJsx = repositories.map(repository => {
    return (
      <Repository repository={repository} onAddBookmark={onAddBookmark} key={repository.id} />
    );
  })
  return ( 
    <div>
      {repositoriesJsx.length>0? <h2 className='listHeading'>Repositories: </h2> : ''}
      {repositoriesJsx}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    repositories: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddBookmark: id => {
      dispatch(addBookmark(id));
    },
  };
};



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepositoryList);