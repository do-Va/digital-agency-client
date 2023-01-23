import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { mediaQuery } from '../../utils/styles-values';
import { Title, Button } from '../_custom';

const ServiceContent = () => {
  const { service } = useSelector(store => store.service);

  const textRef = useRef(null);

  useEffect(() => {
    textRef.current.innerHTML = service.description;
  }, [service.description]);

  return (
    <ServiceContentWrapper>
      <Title text={service?.title2} align="center" />

      <div className="content-text" ref={textRef} />

      <Button
        content="Learn more"
        minHeight="52px"
        maxHeight="71px"
        minWidth="133px"
        maxWidth="185px"
      />
    </ServiceContentWrapper>
  );
};

const ServiceContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .content-text {
    text-align: center;

    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 40px 0px 60px;
  }

  @media ${mediaQuery.lg} {
    align-items: flex-start;
    width: clamp(18rem, 30vw + 9rem, 41.5rem);

    .content-text {
      text-align: left;
    }
  }
`;

export default ServiceContent;
