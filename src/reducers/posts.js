import {
  FETCH_POSTS,
  CREATE_POST,
  REMOVE_POST,
  UPDATE_POST,
  VOTE_POST,
  SORT_POSTS
} from '../actions/posts'

import {
  CREATE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comments'

export default function posts (state = {sort: 'sortByVotes', posts}, action) {

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
