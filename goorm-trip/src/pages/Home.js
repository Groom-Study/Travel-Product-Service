import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//import products from '../api/products.json';
import ProductCard from '../components/ProductCard';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 12px 20px;
  margin: 20px 0;
  border: 2px solid #007bff;
  border-radius: 25px;
  font-size: 1rem;
  outline: none;
`;

const FilterBar = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  justify-content: center;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #007bff;
  background: ${props => props.$active ? '#007bff' : 'white'};
  color: ${props => props.$active ? 'white' : '#007bff'};
  border-radius: 20px;
  cursor: pointer;
  &:hover { background: #007bff; color: white; }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  margin-top: 30px;
`;

const Home = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('전체');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const API_URL = 'https://f4edgdt16h.execute-api.ap-northeast-2.amazonaws.com/default/getProducts';

    fetch(API_URL)
      .then(response => {
        if (!response.ok) throw new Error('네트워크 응답이 좋지 않습니다.');
        return response.json();
      })
      .then(data => {
        console.log("데이터 수신 성공:", data);
        setProducts(data);
      })
      .catch(error => {
        console.error("데이터를 가져오는 중 오류 발생:", error);
      });
  }, []);

  const filtered = products.filter(p => {
    const matchCategory = category === '전체' || p.category === category;
    const matchSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <Container>
      <h1>Goorm Trip : 세계 여행 상품</h1>
      
      {/* 검색창 추가 */}
      <SearchInput 
        type="text" 
        placeholder="가고 싶은 도시나 국가를 검색해보세요! (예: 파리, 사막...)" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <FilterBar>
        {['전체', '유럽', '아시아', '북미', '아프리카'].map(cat => (
          <FilterButton 
            key={cat} 
            $active={category === cat}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </FilterButton>
        ))}
      </FilterBar>
      
      <ProductGrid>
        {filtered.length > 0 ? (
          filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p style={{ gridColumn: '1/-1', marginTop: '50px' }}>검색 결과가 없습니다. 😢</p>
        )}
      </ProductGrid>
    </Container>
  );
};

export default Home;