import styled from 'styled-components';

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background-color: #f0f0f0;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = ({ src, alt }) => {
  return (
    <ImageWrapper>
      <StyledImg src={src} alt={alt} loading="lazy" />
    </ImageWrapper>
  );
};

// !!!!!! 다른 컴포넌트에서 사용할 수 있도록 내보내는것 !!!!!!
export default ProductImage; 