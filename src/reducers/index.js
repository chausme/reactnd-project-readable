import { combineReducers } from 'redux'
import { fetchCategories, fetchPosts } from '../utils/api'

import {
  ADD_POST,
  REMOVE_POST,
} from '../actions'

import {
  RECEIVE_CATEGORIES,
  RECEIVE_POSTS,
} from '../actions/apiActions'

function categories (state = {}, action) {

  const { categories } = action

  switch (action.type) {
    case RECEIVE_CATEGORIES :
      return categories
    default :
      return state
  }
}

function posts (state = {}, action) {

  const { id, posts } = action

  switch (action.type) {
    case RECEIVE_POSTS :
      return posts
    case ADD_POST :
      return {
        ...state,
        [2]: null,
      }
    case REMOVE_POST :

      console.log(id)
      return {
        ...state,
        [id]: {
        ...state[id],
          deleted: true
        },
      }
    default :
      return state
  }
}

export default combineReducers({
  categories,
  posts,
})
