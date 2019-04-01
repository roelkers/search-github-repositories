import React from 'react';
import '../index.css';

export default ({ repository: { id, name, owner, forks, stars }, onAddBookmark }) => {
  return (
    <div className='repository'>
      <h2>{name}</h2>
      <p>Id: {id}</p>
      <p>Owner: {owner}</p>
      <p>Forks: {forks}</p>
      <p>Stars: {stars}</p>
      <button type="button" onClick={() => onAddBookmark(id)}>
        Add Bookmark
      </button>
    </div>
  );
};