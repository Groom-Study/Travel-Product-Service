import React, { createContext, useState, useContext } from 'react';

// 1. Context 생성
const CartContext = createContext();

// 2. Provider 컴포넌트 구현
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // 장바구니 추가 함수
  const addToCart = (product) => {
    setCartItems((prev) => {
      // 이미 담긴 상품인지 확인
      const isExist = prev.find((item) => item.id === product.id);
      if (isExist) {
        alert("이미 장바구니에 담긴 상품입니다.");
        return prev;
      }
      return [...prev, product];
    });
  };

  // 장바구니 삭제 함수
  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  // 장바구니 비우기 (주문 완료 후 사용)
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// 3. 커스텀 훅 (다른 컴포넌트에서 편하게 쓰기 위함)
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
