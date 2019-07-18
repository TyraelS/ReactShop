import styled from 'styled-components';

const BasketItemStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 200px;
  border: 1px solid gray;
  box-shadow: 1px 3px 1px #9e9e9e;
  border-radius: 10px;
  & div {
    margin: 0 20px;
  }
`;

export default BasketItemStyle;
