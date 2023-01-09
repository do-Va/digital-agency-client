import styled from 'styled-components/macro';
import { mediaQuery } from '../../utils/styles-values';
import { Title } from '../_custom';
import { ServiceList, ServiceContentContainer } from '.';

const Services = () => {
  return (
    <ServicesWrapper id="services">
      <div className="max-container">
        <Title text="<span>Things We Enjoy</span>" align="center" />

        <ServiceList />

        <ServiceContentContainer />
      </div>
    </ServicesWrapper>
  );
};

const ServicesWrapper = styled.section`
  padding: 100px 0px;
  min-height: 100vh;
  display: flex;

  .max-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${mediaQuery.lg} {
    .max-container {
      align-items: flex-start;
      justify-content: space-between;
      gap: 93px;
    }
  }
`;

export default Services;
