export const fetchCategories = () => fetch('http://localhost:3001/categories', { headers: { 'Authorization': 'dmfR05SBzsxn30' }})

export const fetchPosts = () => fetch('http://localhost:3001/posts', { headers: { 'Authorization': 'dmfR05SBzsxn30' }})

export const createPostCall = (fetchData) => fetch('http://localhost:3001/posts', fetchData).then(response => {
  return response.json().then(data => {
    if (!response.ok) {
      return Promise.reject({status: response.status, data});
    }
  });
}).catch(error => console.log('error is', error));
