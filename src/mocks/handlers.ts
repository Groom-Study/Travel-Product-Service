import { http, delay, HttpResponse } from 'msw';

export const handlers = [
  http.get('http://localhost:3300/products', () => {
    return HttpResponse.json([
      {
        name: '미국',
        imagePath: '/images/america.jpg',
      },
      {
        name: '영국',
        imagePath: '/images/england.avif',
      },
    ]);
  }),
  http.get('http://localhost:3300/options', () => {
    return HttpResponse.json([
      {
        name: '보험',
      },
      {
        name: '조식',
      },
    ]);
  }),
  http.post('http://localhost:3300/order', async () => {
    const dummyData = [{ orderNumber: 2131234324, price: 2000 }];
    await delay(100);
    return HttpResponse.json(dummyData);
  }),
];
