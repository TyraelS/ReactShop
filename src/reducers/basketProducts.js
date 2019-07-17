import { List, Map } from 'immutable';
import { handleActions } from 'redux-actions';
import addProduct from '../actions/addProduct';

export const initialBasketProductsState = List();

export const basketProducts = handleActions(
  {
    [addProduct]: (state, action) => {
      const targetMapIdx = state.findIndex(item => item.get('id') === action.payload.id);
      if (targetMapIdx === -1) return state.push(Map({ ...action.payload, count: 1 }));
      return state.setIn([targetMapIdx, 'count'], state.getIn([targetMapIdx, 'count']) + 1);
    }
  },
  initialBasketProductsState
);
