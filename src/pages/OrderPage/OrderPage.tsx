import { useContext } from 'react';
import { OrderContext } from '../../contexts/OrderContext';
import Type from './Type';

interface OrderPageProps {
  setStep: (step: number) => void;
}

function OrderPage({ setStep }: OrderPageProps) {
  const context = useContext(OrderContext);

  const [orderDatas] = context || [
    { products: new Map(), options: new Map(), totals: { products: 0, options: 0, total: 0 } },
  ];

  return (
    <div>
      <h1>여행 상품</h1>
      <div>
        <Type orderType="products" />
      </div>
      <div className="order-layout">
        <div className="options-col">
          <Type orderType="options" />
        </div>
        <div>
          <h2>총 금액: ₩{orderDatas.totals.total}</h2>
          <p />
          <button onClick={() => setStep(1)} disabled={orderDatas.totals.total === 0}>주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
