import {
  FETCH_CATEGORIES
} from '../actions/categories'

export default function categories (state = {}, action) {

  const { categories } = action

  switch (action.type) {
    case FETCH_CATEGORIES :
      return categories ? categories : state
    default :
      return state
  }
}
