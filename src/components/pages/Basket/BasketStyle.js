import styled from 'styled-components';

const BasketStyle = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    margin: 10px;
  }
`;

export default BasketStyle;
