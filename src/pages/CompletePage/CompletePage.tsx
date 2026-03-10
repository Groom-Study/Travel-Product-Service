import axios from 'axios';
import { useEffect, useContext, useState } from 'react';
import ErrorBanner from '../../components/ErrorBanner';
import { OrderContext } from '../../contexts/OrderContext';

function CompletePage({ setStep }: { setStep: (step: number) => void }) {
  const context = useContext(OrderContext);

  const [orderHistory, setOrderHistory] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [OrderDatas, , resetOrderDatas] = context || [
    { products: new Map(), options: new Map(), totals: { products: 0, options: 0, total: 0 } },
    () => {},
    () => {},
  ];

  interface OrderData {
    products: Map<string, unknown>;
    options: Map<string, unknown>;
    totals: {
      products: number;
      options: number;
      total: number;
    };
  }

  interface OrderItem {
    orderNumber: string;
    price: number;
  }

  useEffect(() => {
    const orderCompleted = async (OrderDatas: OrderData): Promise<void> => {
      try {
        const response = await axios.post<OrderItem[]>('http://localhost:3300/order', OrderDatas);
        setOrderHistory(response.data);
        setLoading(false);
      } catch {
        setError(true);
        setLoading(false);
      }
    };

    if (OrderDatas) {
      void orderCompleted(OrderDatas);
    }
  }, [OrderDatas]);

  if (!context) {
    return null;
  }

  if (error) {
    return <ErrorBanner message="에러가 발생했습니다." />;
  }

  const orderTable = orderHistory.map((item) => (
    <tr key={item.orderNumber}>
      <td>{item.orderNumber}</td>
      <td>₩{item.price.toLocaleString('ko-KR')}</td>
    </tr>
  ));

  const handleClick = () => {
    resetOrderDatas();
    setStep(0);
  };

  if (loading) {
    return <div>loading</div>;
  } else {
    return (
      <div className="centered-container">
        <h2>주문이 성공했습니다.</h2>
        <h3>지금까지 모든 주문</h3>
        <table className="centered-table">
          <tbody>
            <tr>
              <th>주문 번호</th>
              <th>주문 가격</th>
            </tr>
            {orderTable}
          </tbody>
        </table>
        <p />
        <button onClick={handleClick}>첫페이지로</button>
      </div>
    );
  }
}

export default CompletePage;
