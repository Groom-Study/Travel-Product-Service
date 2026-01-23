import React from 'react';
import styled from 'styled-components';
import type { Movie } from '../data/movieData';

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

const RowContainer = styled.div`
  padding: 20px 40px;
  background-color: transparent;
`;

const CategoryTitle = styled.h2`
  font-size: 1.4rem;
  color: #e5e5e5;
  margin-bottom: 20px;
  font-weight: 600;
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 15px 10px;
  width: 100%;
`;

const Card = styled.div`
  width: 100%;
  transition: transform 0.3s ease;
  cursor: pointer;
  
  img {
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 4px;
    object-fit: cover;
    display: block;
  }

  &:hover {
    transform: scale(1.05);
    z-index: 2;
  }
`;

const MovieTitle = styled.div`
  margin-top: 10px;
  color: #fff;
  font-size: 0.85rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MovieRow: React.FC<MovieRowProps> = ({ title, movies }) => {
  return (
    <RowContainer>
      <CategoryTitle>{title}</CategoryTitle>
      <MovieGrid>
        {movies?.map((movie: Movie) => (
          <Card key={movie.id}>
            <img src={movie.thumbnail} alt={movie.title} />
            <MovieTitle>{movie.title}</MovieTitle>
          </Card>
        ))}
      </MovieGrid>
    </RowContainer>
  );
};

export default MovieRow;