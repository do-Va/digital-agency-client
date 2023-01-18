import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { mediaQuery } from '../../utils/styles-values';
import ServiceListItem from './ServiceListItem';

const ServiceList = () => {
  const { serviceList } = useSelector(store => store.service);
  let service = [...serviceList];

  return (
    <ServiceListWrapper>
      <div className="right">
        {service.splice(0, Math.floor(service.length / 2)).map((item, idx) => (
          <ServiceListItem key={item._id} {...item} number={'0' + (idx + 1)} />
        ))}
      </div>

      <div className="left">
        {service.splice(0).map((item, idx) => (
          <ServiceListItem
            key={item._id}
            {...item}
            number={'0' + (idx + 1 * (service.length + 2 * 2))}
          />
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
