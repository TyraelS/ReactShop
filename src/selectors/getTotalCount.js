import { createSelector } from 'reselect';

const getTotalCount = createSelector(
  state => state.get('basketProducts'),
  basketProducts => {
    if (basketProducts.size === 0) return 0;
    return basketProducts.reduce((accum, value) => {
      return accum + value.get('count');
    }, 0);
  }
);

export default getTotalCount;
