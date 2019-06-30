import { compose, setDisplayName, withHandlers, withProps, setPropTypes } from 'recompose';
import PropTypes from 'prop-types';
import CatalogItemButton from './CatalogItemButton';

const enhance = compose(
  setDisplayName('CatalogItemButtonContainer'),
  setPropTypes({
    id: PropTypes.number.isRequired,
    onAdd: PropTypes.func.isRequired
  }),
  withProps({
    text: 'Hello'
  }),
  withHandlers({
    handleAdd: ({ id, onAdd }) => () => {
      onAdd(id);
    }
  })
);
export default enhance(CatalogItemButton);
