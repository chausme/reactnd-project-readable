import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

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

  const { id, posts, author } = action

  switch (action.type) {
    case RECEIVE_POSTS :
      return posts ? posts : state
    case REMOVE_POST :
      console.log(`post ${id} removed`)
      return {
        ...state,
        [id]: {
        ...state[id],
          deleted: true
        },
      }
      case CREATE_POST :
        console.log('create post');
        return {
          ...state,
          [id]: {
            id: id,
            title: 1,
            body: 1,
            author: author,
            category: 'react',
            voteScore: 1
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
