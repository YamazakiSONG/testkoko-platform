import { Divider } from 'antd';
import ReactMarkdown from 'react-markdown';
import { eventSenderGA } from '../../tools/tools';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import GoToHomeButton from '../test/GoToHomeButton';
import { memo, useCallback } from 'react';

const BlogContainer = styled.div`
  max-width: 100%;
  padding: 0 1.5rem;
  margin: 2rem auto;

  @media (max-width: 768px) {
    padding: 0 1rem;
    margin: 1.5rem auto;
  }
`;

const BlogTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  word-break: keep-all;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }
`;

const BlogContent = styled.div`
  text-align: left;
  line-height: 1.8;
  font-size: 1.1rem;
  word-break: keep-all;

  p {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.7;

    p {
      margin-bottom: 1.2rem;
    }
  }
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  50% {
    transform: scale(1.02);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const glowAnimation = keyframes`
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

const EndTextButton = styled.button`
  width: 100%;
  padding: 1.5rem 2rem;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  color: white;
  background: linear-gradient(45deg, #6B73FF, #000DFF, #4169E1, #00BFFF);
  background-size: 300% 300%;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  margin: 2rem 0;
  transition: all 0.3s ease;
  animation: ${glowAnimation} 8s ease infinite;
  position: relative;
  overflow: hidden;
  word-break: keep-all;
  line-height: 1.4;

  &:hover {
    animation: ${pulseAnimation} 2s infinite;
    transform: translateY(-2px);
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(45deg);
    transition: all 0.3s ease;
    pointer-events: none;
  }

  &:hover::before {
    transform: rotate(45deg) translate(50%, 50%);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 1.2rem 1.5rem;
    margin: 1.5rem 0;
    border-radius: 12px;
  }
`;

const BlogImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  margin: 1rem 0;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    border-radius: 8px;
    margin: 0.8rem 0;
  }
`;

const StyledDivider = styled(Divider)`
  margin: 2rem 0;

  @media (max-width: 768px) {
    margin: 1.5rem 0;
  }
`;

function BlogRenderer({content}) {
  const onTestThumbnailClick = useCallback(() => {
    eventSenderGA("Paging", "Click Blog Bottom Test Thumbnail", "Blog");
  }, []);

  const onEndTextClick = useCallback(() => {
    eventSenderGA("Paging", "Click Blog End Text Button", "Blog");
  }, []);

  if (!content) return null;

  return (
    <BlogContainer>
      <BlogTitle>{content.title}</BlogTitle>
      <BlogContent>
        <ReactMarkdown>{content.texts}</ReactMarkdown>
      </BlogContent>
      <StyledDivider />
      <Link to={`/${content.testUrl}`} onClick={onEndTextClick}>
        <EndTextButton>
          {content.endText}
        </EndTextButton>
      </Link>
      <Link to={`/${content.testUrl}`} onClick={onTestThumbnailClick}>
        <BlogImage
          src={content.testImg}
          alt={content.testUrl}
        />
      </Link>
      
      <GoToHomeButton page="Blog"/>
    </BlogContainer>
  )
}

export default memo(BlogRenderer);