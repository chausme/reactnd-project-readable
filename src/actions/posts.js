import * as Api from '../utils/api';
import { normalize, schema } from 'normalizr';

const uuidv4 = require('uuid/v4');

const postsSchema = new schema.Entity('posts');
const postsListSchema = [ postsSchema ];

export const FETCH_POSTS = "FETCH_POSTS";

export const receivePosts = posts => ({
  type: FETCH_POSTS,
  posts
});

export const fetchPosts = () => dispatch => (
  Api.fetchPosts()
  .then(response => response.json()).then((posts => dispatch(receivePosts(
    normalize(posts, postsListSchema).entities.posts
  ))))
);

export const FETCH_POST = "FETCH_POST";

export const fetchPostAction = post => ({
  type: FETCH_POST,
  post
});

export const fetchPost = (id) => dispatch => (
  Api.fetchPost(id)
  .then(response => response.json()).then((post => dispatch(fetchPostAction(post))))
);

export const CREATE_POST = "CREATE_POST";

export const createPostAction = post => ({
    type: CREATE_POST,
    post
});

export const createPost = (post) => dispatch => {

  post.id = uuidv4()
  post.timestamp = + new Date()

  return Api.createPost(post)
  .then(response => response.json()).then((post => dispatch(createPostAction(post))))
}

export const REMOVE_POST = 'REMOVE_POST'

export const removePostAction = ({id}) => ({
  type: REMOVE_POST,
  id
});

export const removePost = ({id}) => dispatch => (
  Api.removePost({id})
  .then(response => response.json()).then((post => dispatch(removePostAction({id}))))
);

export const UPDATE_POST = 'UPDATE_POST'

export const updatePostAction = post => ({
  type: UPDATE_POST,
  post
});

export const updatePost = (post) => dispatch => (
  Api.updatePost(post)
  .then(response => response.json()).then((post => dispatch(updatePostAction(post))))
);

export const VOTE_POST = 'VOTE_POST'

export const votePostAction = post => ({
  type: VOTE_POST,
  post
});

export const votePost = ({id, vote}) => dispatch => {

  return Api.votePost({id, vote})
  .then(response => response.json()).then((post => dispatch(votePostAction(post))))
}

export const SORT_POSTS = 'SORT_POSTS'

export const sortPostsAction = sort => ({
  type: SORT_POSTS,
  sort
});

export const sortPosts = (sort) => dispatch => {

  return dispatch(sortPostsAction(sort))

}
