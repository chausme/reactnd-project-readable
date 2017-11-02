import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { fetchCategories, fetchPosts, createPost, removePost, fetchPost, updatePost, votePost } from '../actions'

import {
  FETCH_CATEGORIES,
  FETCH_POSTS,
  CREATE_POST,
  REMOVE_POST,
  FETCH_POST,
  UPDATE_POST,
  VOTE_POST
} from '../actions'

function general (state = {redirect: false}, action) {

  const { post } = action

  switch (action.type) {
      case CREATE_POST :
        return {
          ...state,
          redirect: post.category + '/' + post.id
        }
      case UPDATE_POST :
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
    case UPDATE_POST :
      return {
        ...state,
        [post.id]: {
          ...state[post.id],
          title: post.title,
          body: post.body,
        }
      }
    case VOTE_POST :
      return {
        ...state,
        [post.id]: {
          ...state[post.id],
          voteScore: post.voteScore,
        }
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
    case VOTE_POST :
      return {
          ...state,
          voteScore: post.voteScore,
      }
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
