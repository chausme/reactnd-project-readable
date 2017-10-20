import * as Api from '../utils/api';
import { normalize, schema } from 'normalizr';

const uuidv4 = require('uuid/v4');

const postsSchema = new schema.Entity('posts');
const postsListSchema = [ postsSchema ];

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

export const fetchCategoriesAction = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});

export const fetchCategories = () => dispatch => (
  Api.fetchCategories()
  .then(response => response.json()).then((categories => dispatch(fetchCategoriesAction(categories.categories))))
);

export const RECEIVE_POSTS = "RECEIVE_POSTS";

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const fetchPosts = () => dispatch => (
  Api.fetchPosts()
  .then(response => response.json()).then((posts => dispatch(receivePosts(
    normalize(posts, postsListSchema).entities.posts
  ))))
);

export const FETCH_SINGLE_POST = "FETCH_SINGLE_POST";

export const fetchSinglePostAction = post => ({
  type: FETCH_SINGLE_POST,
  post
});

export const fetchSinglePost = (id) => dispatch => (
  Api.fetchSinglePost(id)
  .then(response => response.json()).then((post => dispatch(fetchSinglePostAction(post))))
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
