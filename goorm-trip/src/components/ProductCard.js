import React from 'react';
import styled from 'styled-components';
import ProductImage from './ProductImage'; 
import { useCart } from '../context/CartContext'; // 1. 전역 상태 훅 가져오기

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  }
`;

const ProductCard = ({ product }) => {
  // 2. 장바구니 담기 함수 꺼내기
  const { addToCart } = useCart();

  // 3. public 폴더 내 assets 경로 (process.env.PUBLIC_URL 추가가 안전합니다)
  const imagePath = `${process.env.PUBLIC_URL}/assets/${product.image}`;

  return (
    <Card>
      <ProductImage src={imagePath} alt={product.title} />
      
      <div style={{ padding: '15px' }}>
        <h4 style={{ margin: '0 0 10px 0' }}>{product.title}</h4>
        <p style={{ color: '#666', fontWeight: 'bold' }}>{product.price.toLocaleString()}원</p>
        
        {/* 4. 버튼에 클릭 이벤트 연결 */}
        <button 
          onClick={() => {
            addToCart(product);
            alert(`${product.title} 상품이 장바구니에 담겼습니다!`);
          }}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          장바구니 담기
        </button>
      </div>
    </Card>
  );
};

export default ProductCard;