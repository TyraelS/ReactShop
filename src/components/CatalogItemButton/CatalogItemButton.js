import styled from 'styled-components';

const CatalogButton = styled.button.attrs({
  type: 'button'
})`
  background-color: #fff;
  width: 100px;
  height: 75px;
  font-size: 30px;
  line-height: 75px;
  font-weight: bold;
  border: 1px solid #cecece;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
`;

export default CatalogButton;
