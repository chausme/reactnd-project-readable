import { combineReducers } from 'redux'

import {
  ADD_POST,
  REMOVE_POST,
} from '../actions'

const categoriesInitialState = {
  'react': {
    name: 'react',
    path: 'react'
  },
  'redux': {
    name: 'redux',
    path: 'redux'
  },
  'udacity': {
    name: 'udacity',
    path: 'udacity'
  }
}

function categories (state = categoriesInitialState, action) {
  switch (action.type) {
    default :
      return state
  }
}

const postsInitialState = {
  '8xf0y6ziyjabvozdd253nd' : {
      'author' : 'thingtwo',
      'body' : 'Everyone says so after all.',
      'category' : 'react',
      'deleted' : false,
      'id' : '8xf0y6ziyjabvozdd253nd',
      'timestamp' : 1467166872634,
      'title' : 'Udacity is the best place to learn React',
      'voteScore' : 6,
  },
  '6ni6ok3ym7mf1p33lnez': {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'redux',
    voteScore: -5,
    deleted: false
  }
}

function posts (state = postsInitialState, action) {

  const { id } = action

  switch (action.type) {
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
