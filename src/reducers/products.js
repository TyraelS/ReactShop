import { List, Map, fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import { ActionType } from 'redux-promise-middleware';
import fetchProducts from '../actions/fetchProducts';

export const initialProductsState = List([Map({ id: 1, title: 'Ball', text: 'Some text', price: 1, image: 'no' })]);

export const products = handleActions(
  {
    [`${fetchProducts}_${ActionType.Fulfilled}`]: (state, { payload: { data } }) => fromJS(data)
  },
  initialProductsState
);
