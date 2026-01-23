import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  max-width: 1000px;
  margin: 0 auto;
  padding: 80px 40px 30px;
  color: #808080;
`;

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-bottom: 30px;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const LinkItem = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.div`
  font-size: 0.7rem;
  margin-top: 20px;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div style={{ marginBottom: '30px' }}>질문이 있으신가요? 고객 센터에 문의하세요.</div>
      <FooterLinks>
        <LinkItem href="#">자주 묻는 질문</LinkItem>
        <LinkItem href="#">고객 센터</LinkItem>
        <LinkItem href="#">이용 약관</LinkItem>
        <LinkItem href="#">개인정보 처리방침</LinkItem>
        <LinkItem href="#">쿠키 설정</LinkItem>
        <LinkItem href="#">회사 정보</LinkItem>
        <LinkItem href="#">Portfolio</LinkItem>
      </FooterLinks>
      <Copyright>
        © 1997-2026 Netflix Clone Project. Built by [Groom FullStack 19th 배윤상]
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;