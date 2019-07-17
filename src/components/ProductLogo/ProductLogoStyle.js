import styled from 'styled-components';

const ProductLogoStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  width: 50%;
`;

const ProductImage = styled.img.attrs(({ image, title }) => ({
  alt: title,
  src: image
}))`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border: 1px solid gray;
`;

export { ProductLogoStyle, ProductImage };
