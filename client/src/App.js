import React, { Component } from 'react';
import SearchRepository from './containers/SearchRepository';
import RepositoryList from './containers/RepositoryList';
import BookmarkList from './containers/BookmarkList';
import './index.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className='listHeading'>Search Repository App</h1>
        <SearchRepository />
        <div className="main">
          <RepositoryList />
          <BookmarkList />
        </div>
      </div>
    );
  }
}

export default App;