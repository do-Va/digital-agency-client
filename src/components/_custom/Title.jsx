import { useRef, useEffect } from 'react';
import styled from 'styled-components/macro';
import { mediaQuery } from '../../utils/styles-values';

const Title = ({ text, align }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    titleRef.current.innerHTML = text;
  }, [text]);

  return <TitleWrapper ref={titleRef} style={{ '--align': align }} />;
};

const TitleWrapper = styled.h3`
  color: var(--dark-blue);
  text-align: var(--align);

  span {
    position: relative;
  }

  span::after {
    content: '';
    width: 100%;
    height: 29px;
    position: absolute;
    left: 0;
    bottom: 0px;
    background-color: var(--red);
    z-index: -1;
  }

  @media ${mediaQuery.lg} {
    text-align: left;
  }
`;

export default Title;
