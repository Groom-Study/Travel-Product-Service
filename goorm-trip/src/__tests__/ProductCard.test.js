import { render, screen } from '@testing-library/react';
import ProductCard from '../components/ProductCard';
import { CartProvider } from '../context/CartContext';

const mockProduct = {
  id: 1,
  title: "오스트리아 할슈타트",
  price: 1250000,
  image: "오스트리아 할 슈 타트.jpg"
};

test('상품 카드가 제목과 포맷팅된 가격을 렌더링해야 함', () => {
  render(
    <CartProvider>
      <ProductCard product={mockProduct} />
    </CartProvider>
  );

  // 제목 확인
  const titleElement = screen.getByText(/오스트리아 할슈타트/i);
  expect(titleElement).toBeInTheDocument();

  // 가격 포맷팅 확인 (1,250,000원)
  const priceElement = screen.getByText(/1,250,000/i);
  expect(priceElement).toBeInTheDocument();
});