import { useState, type SyntheticEvent } from 'react';
import { useOrderDetails } from '../../contexts/OrderContext';

interface SummaryPageProps {
  setStep: (step: number) => void;
}

const SummaryPage = ({ setStep }: SummaryPageProps) => {
  const [orderDatas] = useOrderDetails();
  const [checked, setChecked] = useState(false);

  const productArray = Array.from(orderDatas.products);
  const productList = productArray.map(([key, value]) => (
    <li key={key}>
      {key} x{value}
    </li>
  ));

  const hasOptions = orderDatas.options.size > 0;
  let optionsRender = null;
  if (hasOptions) {
    const optionsArray = Array.from(orderDatas.options.keys());
    const optionList = optionsArray.map((key) => <li key={key}>{key}</li>);
    optionsRender = (
      <>
        <h2>옵션 가격: ₩{orderDatas.totals.options.toLocaleString('ko-KR')}</h2>
        <ul>{optionList}</ul>
      </>
    );
  }

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStep(2);
  };

  return (
    <div>
      <h1>주문 확인</h1>
      <h2>여행 상품 가격: ₩{orderDatas.totals.products.toLocaleString('ko-KR')}</h2>
      <ul>{productList}</ul>
      {optionsRender}
      <form onSubmit={handleSubmit}>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          id="confirm-checkbox"
        />
        <label htmlFor="confirm-checkbox">주문 내역을 확인하셨습니까?</label>
        <p />
        <button disabled={!checked} type="submit">
          주문 확인
        </button>
      </form>
    </div>
  );
};

export default SummaryPage;
