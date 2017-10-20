import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { removePost, fetchCategories, fetchPosts, createPost, fetchSinglePost } from '../actions'

import {
  REMOVE_POST,
  RECEIVE_CATEGORIES,
  RECEIVE_POSTS,
  CREATE_POST,
  FETCH_SINGLE_POST
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

  const { posts, post, id } = action

  switch (action.type) {
    case RECEIVE_POSTS :
      return posts ? posts : state
    case REMOVE_POST :
      console.log('remove post')
      return {
        ...state,
        [id]: {
        ...state[id],
          deleted: true
        },
      }
      case CREATE_POST :
        return {
          ...state,
          [post.id]: post
        }
    default :
      return state
  }
}

function post (state = {}, action) {

  const { post } = action

  switch (action.type) {
    case FETCH_SINGLE_POST :
      return post ? post : state
    default :
      return state
  }
}

export default combineReducers({
  categories,
  posts,
  post,
  form: formReducer
})
