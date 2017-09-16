export const fetchCategories = () => fetch('http://localhost:3001/categories', { headers: { 'Authorization': 'dmfR05SBzsxn30' }})

export const fetchPosts = () => fetch('http://localhost:3001/posts', { headers: { 'Authorization': 'dmfR05SBzsxn30' }})
