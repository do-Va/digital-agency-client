import styled from 'styled-components/macro';
import { mediaQuery } from '../../utils/styles-values';
import ServiceListItem from './ServiceListItem';

const ServiceList = () => {
  const services = [
    {
      id: 1,
      number: '01',
      title: 'Digital Illustration',
      desc: 'But I must explain to you how all this mistaken idea of denouncing pleasure',
    },
    {
      id: 2,
      number: '02',
      title: 'Website design & development',
      desc: 'But I must explain to you how all this mistaken idea of denouncing pleasure',
    },
    {
      id: 3,
      number: '03',
      title: 'Social media management',
      desc: 'But I must explain to you how all this mistaken idea of denouncing pleasure',
    },
    {
      id: 4,
      number: '04',
      title: 'Content writing',
      desc: 'But I must explain to you how all this mistaken idea of denouncing pleasure',
    },
    {
      id: 5,
      number: '05',
      title: 'Video Production',
      desc: 'But I must explain to you how all this mistaken idea of denouncing pleasure',
    },
    {
      id: 6,
      number: '06',
      title: 'Social media marketing',
      desc: 'But I must explain to you how all this mistaken idea of denouncing pleasure',
    },
  ];

  return (
    <ServiceListWrapper>
      <div className="right">
        {services.splice(0, Math.floor(services.length / 2)).map(item => (
          <ServiceListItem key={item.id} {...item} />
        ))}
      </div>

      <div className="left">
        {services.splice(0).map(item => (
          <ServiceListItem key={item.id} {...item} />
        ))}
      </div>
    </ServiceListWrapper>
  );
};

const ServiceListWrapper = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 40px;

  .right,
  .left {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  @media ${mediaQuery.lg} {
    width: 100%;
    margin-top: 0px;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: stretch;

    .right {
      margin-top: -100px;
    }
  }
`;

export default ServiceList;
