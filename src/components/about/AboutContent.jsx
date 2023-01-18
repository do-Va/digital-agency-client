import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import convertHtml from '../../utils/convertHtml';
import { mediaQuery } from '../../utils/styles-values';
import { Title, Button } from '../_custom';

const AboutContent = () => {
  const { about, aboutLoader } = useSelector(store => store.about);

  const textRef = useRef(null);
  useEffect(() => {
    !aboutLoader &&
      (textRef.current.innerHTML = convertHtml(about?.description));
  }, [about.description, aboutLoader]);

  return (
    <AboutContentWrapper>
      <Title text={about?.title} align="center" />

      <div className="content-text" ref={textRef} />

      <Button
        content={about?.buttonContent}
        minHeight="52px"
        maxHeight="71px"
        minWidth="133px"
        maxWidth="185px"
      />
    </AboutContentWrapper>
  );
};

const AboutContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 517px;

  .content-text {
    text-align: center;

    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 40px 0px 60px;
  }

  @media ${mediaQuery.lg} {
    align-items: flex-start;

    .content-text {
      text-align: left;
    }
  }
`;

export default AboutContent;
