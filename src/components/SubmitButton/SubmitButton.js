import styled from 'styled-components';

const SubmitButton = styled.button.attrs(({ type }) => ({ type }))`
  width: 200px;
  height: 50px;
  border: 1px solid #cecece;
  border-radius: 10px;
  text-align: center;
  line-height: 50px;
  color: green;
  background-color: #fff;
  text-decoration: none;
`;

export default SubmitButton;
