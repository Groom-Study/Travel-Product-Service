import React from 'react';
import styled from 'styled-components';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  img {
    width: 100px;
    height: 60px;
    object-fit: cover;
    border-radius: 4px;
  }
`;

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <CartContainer>
      <h2>🛒 내 장바구니</h2>
      {cartItems.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p>장바구니가 비어 있습니다. 멋진 여행지를 추가해보세요!</p>
          <button onClick={() => navigate('/')}>홈으로 가기</button>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={`/assets/${item.image}`} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.price.toLocaleString()}원</p>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} style={{ color: 'red' }}>삭제</button>
            </CartItem>
          ))}
          <div style={{ marginTop: '2rem', textAlign: 'right', borderTop: '2px solid #333', paddingTop: '1rem' }}>
            <h3>총 결제 금액: {totalPrice.toLocaleString()}원</h3>
            <div style={{ gap: '10px', display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={() => navigate('/')}>쇼핑 계속하기</button>
              <button 
                onClick={() => {
                  alert('주문이 완료되었습니다! 구름 트립을 이용해주셔서 감사합니다.');
                  clearCart();
                  navigate('/');
                }}
                style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                결제하기
              </button>
            </div>
          </div>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;