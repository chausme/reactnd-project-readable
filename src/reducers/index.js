import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import general from './general'
import categories from './categories'
import posts from './posts'
import post from './post'
import comments from './comments'
import comment from './comment'

export default combineReducers({
  general,
  categories,
  posts,
  post,
  comments,
  comment,
  form: formReducer
})
