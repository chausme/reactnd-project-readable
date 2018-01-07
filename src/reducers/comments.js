import {
  FETCH_COMMENTS,
  CREATE_COMMENT,
  UPDATE_COMMENT,
  REMOVE_COMMENT,
  VOTE_COMMENT,
  SORT_COMMENTS
} from '../actions/comments'

export default function comments (state = {sort: 'sortByVotes', comments}, action) {

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
