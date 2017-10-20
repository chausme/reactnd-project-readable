import * as Api from '../utils/api';
import { normalize, schema } from 'normalizr';

const uuidv4 = require('uuid/v4');

const postsSchema = new schema.Entity('posts');
const postsListSchema = [ postsSchema ];

export const FETCH_CATEGORIES = "FETCH_CATEGORIES";

export const fetchCategoriesAction = categories => ({
  type: FETCH_CATEGORIES,
  categories
});

export const fetchCategories = () => dispatch => (
  Api.fetchCategories()
  .then(response => response.json()).then((categories => dispatch(fetchCategoriesAction(categories.categories))))
);

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

export const FETCH_POST = "FETCH_SINGLE_POST";

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
