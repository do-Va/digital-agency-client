import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { mediaQuery } from '../../utils/styles-values';
import { Title } from '../_custom';
import { ServiceList, ServiceContentContainer } from '.';

const Services = () => {
  const { service } = useSelector(store => store.service);

  return (
    <ServicesWrapper id="services">
      <div className="max-container">
        <Title text={service.title} align="center" />

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
