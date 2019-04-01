import {addBookmark, deleteBookmark, fetchRepositories} from './index';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {ADD_BOOKMARK, DELETE_BOOKMARK, ERROR, FETCH_REPOSITORIES} from './types'
import fetchMock from 'fetch-mock'
import expect from 'expect' 

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('fetch repositories action', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates FETCH_REPOSITORIES when fetching repositories has been done', () => {
    fetchMock.getOnce('/api/repositories/search/',
        [{id: 1, name : "example_repo"}],
    )

    const expectedActions = [
      { type: FETCH_REPOSITORIES, repositories : [{id: 1, name : "example_repo"}]  }
    ]
    const store = mockStore({ repositories : [] })

    return store.dispatch(fetchRepositories('')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

describe('add bookmark action', () => {
    afterEach(() => {
      fetchMock.restore()
    })
  
    it('creates ADD_BOOKMARK when adding bookmark has been done', () => {
      fetchMock.putOnce('/api/bookmarks',
          [{id: 1, name : "example_repo"}],
      )
  
      const expectedActions = [
        { type: ADD_BOOKMARK, repository : [{id: 1, name : "example_repo"}]  }
      ]
      const store = mockStore({ repositories : [] })
  
      return store.dispatch(addBookmark(1)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })


describe('delete bookmark action', () => {
    afterEach(() => {
      fetchMock.restore()
    })
  
    it('creates DELETE_BOOKMARK when deleting bookmark has been done', () => {
      fetchMock.deleteOnce('/api/bookmarks',
          [{id: 1, name : "example_repo"}],
      )
  
      const expectedActions = [
        { type: DELETE_BOOKMARK, repository : [{id: 1, name : "example_repo"}]  }
      ]
      const store = mockStore({ repositories : [] })
  
      return store.dispatch(deleteBookmark(1)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })