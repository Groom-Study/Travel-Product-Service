import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Products from './Products';
import Options from './Options';
import ErrorBanner from '../../components/ErrorBanner';
import { OrderContext } from '../../contexts/OrderContext';
import type { OrderType } from '../../contexts/OrderContext';

interface Item {
  name: string;
  imagePath: string;
}

interface TypeProps {
  orderType: OrderType;
}

function Type({ orderType }: TypeProps) {
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState(false);
  const context = useContext(OrderContext);

  const [orderDatas, updateItemCount] = context || [
    { products: new Map(), options: new Map(), totals: { products: 0, options: 0, total: 0 } },
    () => {},
  ];

  useEffect(() => {
    const loadItems = async (orderType: string) => {
      try {
        const response = await axios.get(`http://localhost:3300/${orderType}`);
        setItems(response.data);
      } catch {
        setError(true);
      }
    };

    void loadItems(orderType);
  }, [orderType]);

  if (error) {
    console.error(error);
    return <ErrorBanner message="오류가 발생했습니다." />;
  }

  if (!context) return null;

  const ItemComponents = orderType === 'products' ? Products : Options;

  const optionItems = items.map((item) => (
    <ItemComponents
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName: string, newItemCount: number) =>
        (updateItemCount as (itemName: string, newItemCount: number, orderType: string) => void)(
          itemName,
          newItemCount,
          orderType,
        )
      }
    />
  ));

  const orderTypeKorean = orderType === 'products' ? '여행 상품' : '옵션';
  return (
    <>
      <h2>{orderTypeKorean}</h2>
      <p>{orderType === 'products' ? '₩3,000,000' : '₩50,000'}</p>
      <p>
        {orderTypeKorean} 총 가격: ₩{orderDatas.totals[orderType].toLocaleString('ko-KR')}
      </p>
      <div className={orderType === 'options' ? 'options-list' : 'products-list'}>
        {optionItems}
      </div>
    </>
  );
}

export default Type;
