import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px; 
  z-index: 1000;
  transition: background-color 0.4s ease;
  background-color: ${props => props.$isScrolled ? '#141414' : 'rgba(0,0,0,0.5)'};
  box-sizing: border-box; 
`;

const LogoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  img {
    height: 30px;
    cursor: pointer;
  }
`;

const MenuGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 20px; 
`;

const NavButton = styled.button<{ $primary?: boolean }>`
  background-color: ${props => props.$primary ? '#e50914' : 'transparent'};
  color: white;
  border: ${props => props.$primary ? 'none' : '1px solid #ffffff'};
  padding: 6px 15px;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.$primary ? '#b9090b' : 'rgba(255,255,255,0.1)'};
  }
`;

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav $isScrolled={isScrolled}>
      <LogoGroup>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
      </LogoGroup>
      
      <MenuGroup>
        <span style={{ color: '#eee', fontSize: '0.9rem', alignSelf: 'center', marginRight: '10px' }}>
          무제한으로 즐기는 시리즈와 영화
        </span>
        <NavButton $primary>지금 가입하기</NavButton>
        <NavButton>로그인</NavButton>
      </MenuGroup>
    </Nav>
  );
};

export default Header;