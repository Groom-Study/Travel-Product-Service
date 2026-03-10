import axios from 'axios';
import productsData from './products.json';

// 실제 배포 시에는 AWS Lambda 주소가 들어갈 자리입니다.
// 지금은 로컬 환경이므로 mock 데이터를 반환하도록 설정합니다.
export const fetchProducts = async () => {
  // 실제 API 통신을 흉내내기 위해 비동기 처리를 합니다.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsData);
    }, 500); // 0.5초 뒤 데이터 반환
  });
};