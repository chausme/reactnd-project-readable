import {
  FETCH_COMMENT
} from '../actions/comments'

export default function comment (state = {}, action) {

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
