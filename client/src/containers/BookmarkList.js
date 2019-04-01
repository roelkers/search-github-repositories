import React from 'react';
import { connect } from 'react-redux';
import BookmarkedRepository from '../components/BookmarkedRepository';
import { deleteBookmark } from "../actions";

export function BookmarkList({ repositories, onDeleteBookmark}) {

  const repositoriesJsx = repositories
  .filter(repository => repository.bookmark)
  .map(repository => {
    return (
      <BookmarkedRepository repository={repository} onDeleteBookmark={onDeleteBookmark} key={repository.id} />
    );
  })
  return ( 
    <div>
      {repositoriesJsx.length>0? <h2 className='listHeading'>Bookmarks: </h2> : ''}
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
    onDeleteBookmark: id => {
      dispatch(deleteBookmark(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarkList);