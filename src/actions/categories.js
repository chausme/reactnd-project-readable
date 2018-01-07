import * as Api from '../utils/api';

export const FETCH_CATEGORIES = "FETCH_CATEGORIES";

export const fetchCategoriesAction = categories => ({
  type: FETCH_CATEGORIES,
  categories
});

export const fetchCategories = () => dispatch => (
  Api.fetchCategories()
  .then(response => response.json()).then((categories => dispatch(fetchCategoriesAction(categories.categories))))
);
