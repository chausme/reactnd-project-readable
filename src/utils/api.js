export const fetchCategories = () => fetch('http://localhost:5001/categories', { headers: { 'Authorization': 'dmfR05SBzsxn30' }})

export const fetchPosts = () => fetch('http://localhost:5001/posts', { headers: { 'Authorization': 'dmfR05SBzsxn30' }})
