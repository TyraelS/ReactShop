import { compose, lifecycle, setDisplayName, mapProps } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Catalog from './Catalog';
import fetchProducts from '../../../actions/fetchProducts';
import getProducts from '../../../selectors/getProducts';

export const enhance = compose(
  setDisplayName('CatalogContainer'),
  connect(
    state => ({
      products: getProducts(state)
    }),
    dispatch =>
      bindActionCreators(
        {
          dispatchFetchProducts: fetchProducts
        },
        dispatch
      )
  ),
  lifecycle({
    componentDidMount() {
      this.props.dispatchFetchProducts();
    }
  }),
  mapProps(props => ({
    ...props,
    products: props.products.toJS()
  }))
);

export default enhance(Catalog);
