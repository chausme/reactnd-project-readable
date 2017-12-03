import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { fetchCategories, fetchPosts, createPost, removePost, fetchPost, updatePost, votePost, sortPosts, fetchComments } from '../actions'

import {
  FETCH_CATEGORIES,
  FETCH_POSTS,
  CREATE_POST,
  REMOVE_POST,
  FETCH_POST,
  UPDATE_POST,
  VOTE_POST,
  SORT_POSTS,
  FETCH_COMMENTS,
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

function posts (state = {sort: 'sortByVotes', posts}, action) {

  const { posts, post, id, sort } = action

  switch (action.type) {
    case FETCH_POSTS :
      return {
        ...state,
        posts: posts
      }
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
    case SORT_POSTS :
      return {
        ...state,
        sort: sort
      }
    default :
      return state
  }
}

function post (state = {post, comments: 'comments will be here'}, action) {

  const { post, comments } = action

  switch (action.type) {
    case FETCH_POST :
      return {
        ...state,
        post: post
      }
    case FETCH_COMMENTS :
      return {
        ...state,
        post: {
          ...state,
          comments: comments
        }

      }
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
