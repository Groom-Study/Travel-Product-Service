import React, { useState } from 'react';

interface ProductsProps {
  name: string;
  imagePath: string;
  updateItemCount: (itemName: string, newItemCount: number) => void;
}

function Products({ name, imagePath, updateItemCount }: ProductsProps) {
  const [count, setCount] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const nextCount = value === '' ? 0 : parseInt(value);
    const validatedCount = Math.max(0, nextCount);
    
    setCount(validatedCount);
    updateItemCount(name, validatedCount);
  };

  const handleIncrement = () => {
    const nextCount = count + 1;
    setCount(nextCount);
    updateItemCount(name, nextCount);
  };

  const handleDecrement = () => {
    const nextCount = Math.max(0, count - 1);
    setCount(nextCount);
    updateItemCount(name, nextCount);
  };

  return (
    <div className="product-item">
      <img
        className="product-image"
        src={`${window.location.origin}${imagePath}`}
        alt={`${name} product`}
      />
      <form className="quantity-control">
        <label htmlFor={name}>{name}</label>
        <button type="button" className="quantity-btn" onClick={handleDecrement}>-</button>
        <input
          id={name}
          type="number"
          name="quantity"
          min="0"
          value={count}
          onChange={handleChange}
        />
        <button type="button" className="quantity-btn" onClick={handleIncrement}>+</button>
      </form>
    </div>
  );
}

export default Products;
