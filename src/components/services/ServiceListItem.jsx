import styled from 'styled-components/macro';
import { mediaQuery } from '../../utils/styles-values';

const ServiceListItem = ({ number, title, description }) => {
  return (
    <ServiceListItemWrapper>
      <p className="number">{number}</p>

      <div className="content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </ServiceListItemWrapper>
  );
};

const ServiceListItemWrapper = styled.div`
  width: clamp(18rem, 40vw + 2.5rem, 34.0625rem);

  .number {
    font-family: var(--ff-londrina);
    font-size: 4rem;
    line-height: 1;
  }

  .content {
    h4 {
      margin-bottom: 20px;
    }
  }

  @media ${mediaQuery.md} {
    display: flex;
    align-items: center;
    gap: 40px;

    .number {
      align-self: baseline;
    }
  }
`;

export default ServiceListItem;
