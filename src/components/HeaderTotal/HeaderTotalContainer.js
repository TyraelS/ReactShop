import { compose, setDisplayName, mapProps } from 'recompose';
import { connect } from 'react-redux';
import HeaderTotal from './HeaderTotal';
import getTotalPrice from '../../selectors/getTotalPrice';

export const enhance = compose(
  setDisplayName('HeaderTotalContainer'),
  connect(
    state => ({
      totalPrice: getTotalPrice(state)
    }),
    null
  ),
  mapProps(props => ({
    ...props,
    totalPrice: props.totalPrice
  }))
);

export default enhance(HeaderTotal);
