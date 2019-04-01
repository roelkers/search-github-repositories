import React from 'react';

export default ({ repository: { id, name, owner, forks, stars }, onDeleteBookmark }) => {
  return (
    <div className='repository'>
      <h2>{name}</h2>
      <p>Id: {id}</p>
      <p>Owner: {owner}</p>
      <p>Forks: {forks}</p>
      <p>Stars: {stars}</p>
      <button type="button" onClick={() => onDeleteBookmark(id)}>
        Remove Bookmark
      </button>
    </div>
  );
};