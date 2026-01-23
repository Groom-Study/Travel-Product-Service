import styled from 'styled-components';
import Header from './components/Header';
import MovieRow from './components/MovieRow';
import Footer from './components/Footer';
import { NETFLIX_MOVIES } from './data/movieData';

const MainWrapper = styled.div`
  background-color: #141414;
  min-height: 100vh;
  color: white;
  overflow-x: hidden;
`;

const ContentHeader = styled.div`
  padding: 150px 40px 20px 40px; 
  
  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 15px;
  }
  
  p {
    max-width: 700px;
    font-size: 1.1rem;
    line-height: 1.6;
    color: #a3a3a3;
  }
`;

const RowSection = styled.div`
  margin-top: 30px;
  padding-bottom: 50px;
`;

function App() {
  return (
    <MainWrapper>
      <Header /> 
      
      <ContentHeader>
        <h1>TV 드라마</h1>
        <p>
          한 편으로는 부족한 이야기가 있다. 장대한 범죄물, 정교한 의학 드라마 
          <br />
          그리고 광활한 세계로 뻗어 나가는 SF까지. 끝을 보기 아쉬워도 멈출 수 없다.
        </p>
      </ContentHeader>

      <RowSection>
        <MovieRow title="한국 시리즈" movies={NETFLIX_MOVIES.slice(0, 6)} />
        <MovieRow title="해외 시리즈" movies={NETFLIX_MOVIES.slice(6, 12)} />
        <MovieRow title="로맨틱한 한국 시리즈" movies={NETFLIX_MOVIES.slice(12, 18)} />
      </RowSection>

      <Footer />
    </MainWrapper>
  );
}

export default App;