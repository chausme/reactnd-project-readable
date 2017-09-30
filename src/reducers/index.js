import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { removePost, fetchCategories, fetchPosts, createPost } from '../actions'

import {
  REMOVE_POST,
  RECEIVE_CATEGORIES,
  RECEIVE_POSTS,
  CREATE_POST
} from '../actions'

function categories (state = {}, action) {

  const { categories } = action

  switch (action.type) {
    case RECEIVE_CATEGORIES :
      return categories ? categories : state
    default :
      return state
  }
}

function posts (state = {}, action) {

  const { posts, post } = action

  switch (action.type) {
    case RECEIVE_POSTS :
      return posts
    case REMOVE_POST :
      console.log(`post ${post.id} removed`)
      return {
        ...state,
        [post.id]: {
        ...state[post.id],
          deleted: true
        },
      }
      case CREATE_POST :
        return {
          ...state,
          [post.id]: {
            post
          }
        }
    default :
      return state
  }
}

export default combineReducers({
  categories,
  posts,
  form: formReducer
})
