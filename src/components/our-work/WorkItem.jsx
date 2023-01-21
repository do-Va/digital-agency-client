import styled from 'styled-components/macro';
import { mediaQuery } from '../../utils/styles-values';

const WorkItem = ({ image, alt }) => {
  return (
    <WorkItemWrapper>
      <img src={image} alt={alt} />
    </WorkItemWrapper>
  );
};

const WorkItemWrapper = styled.div`
  display: flex;

  @media ${mediaQuery.md} {
    &:nth-child(1) {
      grid-column: 1 / 2;
      grid-row: 1 / 4;
    }

    &:nth-child(2) {
      grid-column: 1 / 2;
      grid-row: 4 / 7;
    }

    &:nth-child(3) {
      grid-column: 2 / 3;
      grid-row: 1 / 5;
    }

    &:nth-child(4) {
      grid-column: 2 / -1;
      grid-row: 5 / 7;
    }

    &:nth-child(5) {
      grid-row: 1 / 3;
    }

    &:nth-child(6) {
      grid-row: 3 / 5;
    }

    img {
      flex: 1;
    }
  }
`;

export default WorkItem;
