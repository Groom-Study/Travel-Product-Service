import axios from 'axios';
import productsData from './products.json';

export const fetchProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsData);
    }, 500); // 0.5초 뒤 데이터 반환
  });
};
