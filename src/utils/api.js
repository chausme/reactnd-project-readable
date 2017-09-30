export const fetchCategories = () => fetch('http://localhost:3001/categories', { headers: { 'Authorization': 'dmfR05SBzsxn30' }})

export const fetchPosts = () => fetch('http://localhost:3001/posts', { headers: { 'Authorization': 'dmfR05SBzsxn30' }})

export const createPost = (post) => (
  fetch('http://localhost:3001/posts', {
    body: JSON.stringify(post),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'dmfR05SBzsxn30'
    }
  })
)

export const removePost = ({id}) => (
  fetch('http://localhost:3001/posts/' + id, {
    method: 'DELETE',
    headers: {
      'Authorization': 'dmfR05SBzsxn30'
    }
  })
)
