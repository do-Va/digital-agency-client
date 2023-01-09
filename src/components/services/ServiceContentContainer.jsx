import styled from 'styled-components/macro';
import { mediaQuery } from '../../utils/styles-values';
import { Image } from '../_custom';
import imageUrl from '../../assets/we-are-hiring.png';
import ServiceContent from './ServicesContent';

const ServiceContentContainer = () => {
  return (
    <ServiceContentContainerWrapper>
      <ServiceContent />

      <Image
        url={imageUrl}
        minWidth="203px"
        maxWidth="508px"
        margin="60px 0px 0px"
      />
    </ServiceContentContainerWrapper>
  );
};

const ServiceContentContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 100px;

  @media ${mediaQuery.lg} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default ServiceContentContainer;
