import { useState } from 'react';
import OrderPage from './pages/OrderPage/OrderPage';
import SummaryPage from './pages/SummaryPage/SummaryPage';
import CompletePage from './pages/CompletePage/CompletePage';
import { OrderContextProvider } from './contexts/OrderContext';
function App() {
  const [step, setStep] = useState<number>(0);
  return (
    <div className="app-container">
      <OrderContextProvider>
        {step === 0 && <OrderPage setStep={setStep} />}
        {step === 1 && <SummaryPage setStep={setStep} />}
        {step === 2 && <CompletePage setStep={setStep} />}
      </OrderContextProvider>
    </div>
  );
}

export default App;
