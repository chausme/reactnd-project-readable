import * as Api from '../utils/api';
import { normalize, schema } from 'normalizr';

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

export const CREATE_POST = "CREATE_POST";

export const createPost = ({ title, body, author, category, voteScore }) => ({
    type: CREATE_POST,
    id: 'somehardcodedid',
    title,
    body,
    author,
    category,
    voteScore
});

// let fetchData = {
//     method: 'POST',
//     body: {id: 'aaaever', author: 'newauthor'},
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'dmfR05SBzsxn30'
//     }
// }

export const createPostCall = () => dispatch => (
  Api.createPostCall()
  .then(response => response.json()).then((posts => dispatch(receivePosts(
    normalize(posts, postsListSchema).entities.posts
  ))))
);

export const REMOVE_POST = 'REMOVE_POST'

export const removePostAction = ({id}) => ({
  type: REMOVE_POST,
  id
});

// deletePost = (e, post) => {
//
//   fetch('http://localhost:5001/posts/' + post.id, { method: 'DELETE', headers: { 'Authorization': 'dmfR05SBzsxn30' } }).then((data) => {
//     data.text().then((data) => {
//       console.log('post deleted!');
//     })
//   })
//
//   e.preventDefault();
//
// }

export const removePost = ({id}) => dispatch => (
  Api.removePost({id})
  .then(response => response.json()).then((post => dispatch(removePostAction({id}))))
);
