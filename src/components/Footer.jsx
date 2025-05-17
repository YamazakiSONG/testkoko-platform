import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: #f8f9fa;
  padding: 2rem 1rem;
  margin-top: 3rem;

  h5 {
    margin-bottom: 1rem;
    color: #495057;
  }

  p {
    color: #6c757d;
    margin: 0.5rem 0;
    font-size: 0.9rem;
  }

  a {
    color: #6c757d;
    text-decoration: none;
    font-size: 0.9rem;
    
    &:hover {
      color: #495057;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    margin-top: 2rem;
  }
`;

function Footer(){
  return (
    <FooterContainer>
      <h5>
        광고 및 후원 문의
        <br />
        Advertising and Sponsorshop Contact
      </h5>
      <p>testkoko88@gmail.com</p>
      <p>
        Disclaimer:<br/>All content is provided for fun and entertainment purposes only
      </p>
      <p>TEST-KOKO All rights reserved. 2025</p>
      <div>
        <a href="/privacy">개인정보 처리방침</a>
      </div>
    </FooterContainer>
  )
}

export default Footer;