import { compose, setDisplayName, mapProps } from 'recompose';
import { connect } from 'react-redux';
import HeaderBasket from './HeaderBasket';
import getTotalCount from '../../selectors/getTotalCount';

export const enhance = compose(
  setDisplayName('HeaderBasketContainer'),
  connect(
    state => ({
      totalCount: getTotalCount(state)
    }),
    null
  ),
  mapProps(props => ({
    ...props,
    totalCount: props.totalCount
  }))
);

export default enhance(HeaderBasket);
