import {
  CREATE_POST,
  FETCH_POST,
  UPDATE_POST
} from '../actions/posts'

import {
  CREATE_COMMENT,
  UPDATE_COMMENT
} from '../actions/comments'

export default function general (state = {redirect: false}, action) {

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
