import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { fetchCategories, fetchPosts, createPost, removePost, fetchPost } from '../actions'

import {
  FETCH_CATEGORIES,
  FETCH_POSTS,
  CREATE_POST,
  REMOVE_POST,
  FETCH_POST
} from '../actions'

function general (state = {redirect: false}, action) {

  const { post } = action

  switch (action.type) {
      case CREATE_POST :
        return {
          ...state,
          redirect: post.category + '/' + post.id
        }
        case FETCH_POST :
          return {
            ...state,
            redirect: false
          }
    default :
      return state
  }

}

function categories (state = {}, action) {

  const { categories } = action

  switch (action.type) {
    case FETCH_CATEGORIES :
      return categories ? categories : state
    default :
      return state
  }
}

function posts (state = {}, action) {

  const { posts, post, id } = action

  switch (action.type) {
    case FETCH_POSTS :
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
    case FETCH_POST :
      return post ? post : state
    default :
      return state
  }
}

export default combineReducers({
  general,
  categories,
  posts,
  post,
  form: formReducer
})
