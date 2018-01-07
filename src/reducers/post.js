import {
  FETCH_POST,
  VOTE_POST
} from '../actions/posts'

import {
  REMOVE_COMMENT
} from '../actions/comments'

export default function post (state = {post}, action) {

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
