export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'

export function addPost ({ id }) {
  return {
    type: ADD_POST,
    id
  }
}

export function removePost ({ id }) {
  return {
    type: REMOVE_POST,
    id
  }
}
