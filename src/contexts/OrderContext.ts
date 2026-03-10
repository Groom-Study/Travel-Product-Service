import React, { createContext, useState, useMemo, useContext, type ReactNode } from 'react';

type OrderCounts = {
  products: Map<string, number>;
  options: Map<string, number>;
};

type Totals = {
  products: number;
  options: number;
  total: number;
};

type OrderContextValue = [
  OrderCounts & { totals: Totals },
  (itemName: string, newItemCount: string, orderType: 'products' | 'options') => void,
  () => void,
];

export type OrderType = 'products' | 'options';

export const OrderContext = createContext<OrderContextValue | null>(null);

export function useOrderDetails() {
  const contextValue = useContext(OrderContext);

  if (!contextValue) {
    throw new Error('useOrderDetails must be called from within an OrderDetailsProvider');
  }

  return contextValue;
}

const pricePerItem = {
  products: 1000,
  options: 500,
};

function calculateSubtotal(
  orderType: OrderType,
  orderCounts: { products: Map<string, number>; options: Map<string, number> },
) {
  let optionCount = 0;
  for (const count of orderCounts[orderType].values()) {
    optionCount += count;
  }

  return optionCount * (pricePerItem[orderType] as number);
}

export function OrderContextProvider(props: { children: ReactNode }) {
  const [orderCounts, setOrderCounts] = useState({
    products: new Map(),
    options: new Map(),
  });

  const totals = useMemo(() => {
    const productsTotal = calculateSubtotal('products', orderCounts);
    const optionsTotal = calculateSubtotal('options', orderCounts);

    return { products: productsTotal, options: optionsTotal, total: productsTotal + optionsTotal };
  }, [orderCounts]);

  const value = useMemo(() => {
    function updateItemCount(itemName: string, newItemCount: string, orderType: OrderType) {
      const newOrderCounts = { ...orderCounts };

      const orderCountsMap = orderCounts[orderType];
      orderCountsMap.set(itemName, parseInt(newItemCount));

      setOrderCounts(newOrderCounts);
    }
    const resetOrderDatas = () => {
      setOrderCounts({
        products: new Map<string, number>(),
        options: new Map<string, number>(),
      });
    };

    return [{ ...orderCounts, totals }, updateItemCount, resetOrderDatas] as OrderContextValue;
  }, [orderCounts, totals]);
  return React.createElement(OrderContext.Provider, { value, ...props });
}
