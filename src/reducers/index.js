import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

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
  CREATE_COMMENT,
  UPDATE_COMMENT,
  FETCH_COMMENT,
  REMOVE_COMMENT,
  VOTE_COMMENT,
  SORT_COMMENTS
} from '../actions'

function general (state = {redirect: false}, action) {

  const { post, comment, category } = action

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
      case CREATE_COMMENT :
        return {
          ...state,
          redirect: category + '/' + comment.parentId
        }
      case UPDATE_COMMENT :
        return {
          ...state,
          redirect: category + '/' + comment.parentId
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

  const { posts, post, id, sort, comment } = action

  switch (action.type) {
    case FETCH_POSTS :
      return {
        ...state,
        posts: posts
      }
    case REMOVE_POST :
      return {
        ...state,
        posts: {
          ...state.posts,
          [id]: {
            ...state.posts[id],
            deleted: true
          },
        }
      }
    case CREATE_POST :
      return {
        ...state,
        posts: {
          ...state.posts,
          [post.id]: post
        }
      }
    case UPDATE_POST :
      return {
        ...state,
        posts: {
          ...state.posts,
          [post.id]: {
            ...state.posts[post.id],
            title: post.title,
            body: post.body,
          }
        }
      }
    case VOTE_POST :
      return {
        ...state,
        posts: {
          ...state.posts,
          [post.id]: {
            ...state.posts[post.id],
            voteScore: post.voteScore,
          }
        }
      }
    case SORT_POSTS :
      return {
        ...state,
        sort: sort
      }
    case CREATE_COMMENT :
      return {
        ...state,
        posts: {
          ...state.posts,
          [comment.parentId]: {
            ...state.posts[comment.parentId],
            commentCount: state.posts[comment.parentId].commentCount + 1
          }
        }
      }
    case REMOVE_COMMENT :
      return {
        ...state,
        posts: {
          ...state.posts,
          [comment.parentId]: {
            ...state.posts[comment.parentId],
            commentCount: state.posts[comment.parentId].commentCount - 1
          }
        }
      }
    default :
      return state
  }
}

function post (state = {post}, action) {

  const { post } = action

  switch (action.type) {
    case FETCH_POST :
      return {
        ...state,
        post: post
      }
    case VOTE_POST :
      return {
        ...state,
        post: {
          ...state.post,
          voteScore: post.voteScore
        }
      }
    case REMOVE_COMMENT :
      return {
        ...state,
        post: {
          ...state.post,
          commentCount: state.post.commentCount - 1
        }
      }
    default :
      return state
  }

}

function comments (state = {sort: 'sortByVotes', comments}, action) {

  const { comments, comment, sort } = action

  switch (action.type) {
    case FETCH_COMMENTS :
      return {
        ...state,
        comments: comments
      }
    case CREATE_COMMENT :
      return {
        ...state,
        comments: {
          ...state.comments,
          [comment.id]: comment
        }
      }
    case UPDATE_COMMENT :
      return {
        ...state,
        comments: {
          ...state,
          [comment.id]: {
            ...state[comment.id],
            body: comment.body,
            timestamp: comment.timestamp
          }
        }
      }
    case REMOVE_COMMENT :
      return {
        ...state,
        comments: {
          ...state.comments,
          [comment.id]: {
            ...state.comments[comment.id],
            deleted: comment.deleted
          }
        }
      }
    case VOTE_COMMENT :
      return {
        ...state,
        comments: {
          ...state.comments,
          [comment.id]: {
            ...state.comments[comment.id],
            voteScore: comment.voteScore
          }
        }
      }
    case SORT_COMMENTS :
      return {
        ...state,
        sort: sort
      }
    default :
      return state
  }

}

function comment (state = {}, action) {

  const { comment } = action

  switch (action.type) {
    case FETCH_COMMENT :
      return {
        ...state,
        comment: comment
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
  comments,
  comment,
  form: formReducer
})
