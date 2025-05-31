import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { RiMenu3Line } from 'react-icons/ri';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const glowAnimation = keyframes`
  0% {
    text-shadow: 0 0 10px rgba(135, 206, 235, 0.8),
                 0 0 20px rgba(0, 191, 255, 0.8);
  }
  50% {
    text-shadow: 0 0 20px rgba(135, 206, 235, 0.9),
                 0 0 30px rgba(0, 191, 255, 0.9),
                 0 0 40px rgba(30, 144, 255, 0.7);
  }
  100% {
    text-shadow: 0 0 10px rgba(135, 206, 235, 0.8),
                 0 0 20px rgba(0, 191, 255, 0.8);
  }
`;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  transition: all 0.3s ease;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.8rem;
  font-weight: 800;
  cursor: pointer;
  
  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

  span {
    background: linear-gradient(
      45deg,
      #87CEEB,
      #00BFFF,
      #1E90FF,
      #4169E1
    );
    background-size: 300% 300%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: ${gradientAnimation} 5s ease infinite;
    letter-spacing: 2px;
  }
  
  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    
    img {
      width: 32px;
      height: 32px;
    }
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 1.8rem;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  
  &:hover {
    opacity: 0.8;
  }
`;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <Logo>
        <img src="/testkoko.png" alt="TestKoko Logo" />
        <span>TESTKOKO</span>
      </Logo>
    </HeaderContainer>
  );
} 