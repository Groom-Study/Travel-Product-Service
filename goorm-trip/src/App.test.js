import { render, screen } from '@testing-library/react';
import App from './App';

test('메인 페이지에 구름 트립 제목이 보이는지 확인', () => {
  render(<App />);
  const titleElement = screen.getByText(/구름 트립/i);
  expect(titleElement).toBeInTheDocument();
});