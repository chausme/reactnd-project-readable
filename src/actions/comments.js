import * as Api from '../utils/api';

const uuidv4 = require('uuid/v4');

export const FETCH_COMMENTS = "FETCH_COMMENTS";

export const fetchCommentsAction = comments => ({
  type: FETCH_COMMENTS,
  comments
});

export const fetchComments = (id) => dispatch => (
  Api.fetchComments(id)
  .then(response => response.json()).then((comments => {

    let commentsObject = comments.reduce((comments, comment) => {
      comments[comment.id] = comment;
      return comments;
    },{})

    return dispatch(fetchCommentsAction(commentsObject))

  }))
);

export const CREATE_COMMENT = "CREATE_COMMENT";

export const createCommentAction = ({comment, category}) => ({
  type: CREATE_COMMENT,
  comment,
  category
});

export const createComment = (comment) => dispatch => {

  comment.id = uuidv4()
  comment.timestamp = + new Date()
  let category = comment.category

  return Api.createComment(comment)
  .then(response => response.json()).then((comment => dispatch(createCommentAction({comment, category}))))

}

export const FETCH_COMMENT = "FETCH_COMMENT";

export const fetchCommentAction = comment => ({
  type: FETCH_COMMENT,
  comment
});

export const fetchComment = (id) => dispatch => (
  Api.fetchComment(id)
  .then(response => response.json()).then((comment => dispatch(fetchCommentAction(comment))))
);

export const UPDATE_COMMENT = 'UPDATE_COMMENT'

export const updateCommentAction = ({comment, category}) => ({
  type: UPDATE_COMMENT,
  comment,
  category
});

export const updateComment = (comment) => dispatch => {

  comment.timestamp = + new Date()
  let category = comment.category

  return Api.updateComment(comment)
  .then(response => response.json()).then((comment => dispatch(updateCommentAction({comment, category}))))

}

export const REMOVE_COMMENT = 'REMOVE_COMMENT'

export const removeCommentAction = (comment) => ({
  type: REMOVE_COMMENT,
  comment
});

export const removeComment = ({id}) => dispatch => (
  Api.removeComment({id})
  .then(response => response.json()).then((comment => dispatch(removeCommentAction(comment))))
);

export const VOTE_COMMENT = 'VOTE_COMMENT'

export const voteCommentAction = comment => ({
  type: VOTE_COMMENT,
  comment
});

export const voteComment = ({id, vote}) => dispatch => {

  return Api.voteComment({id, vote})
  .then(response => response.json()).then((comment => dispatch(voteCommentAction(comment))))
}

export const SORT_COMMENTS = 'SORT_COMMENTS'

export const sortCommentsAction = sort => ({
  type: SORT_COMMENTS,
  sort
});

export const sortComments = (sort) => dispatch => {

  return dispatch(sortCommentsAction(sort))

}
