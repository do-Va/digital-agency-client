import styled from 'styled-components/macro';
import works from '../../temporary/works';
import { mediaQuery } from '../../utils/styles-values';
import WorkItem from './WorkItem';

const Works = ({ selectedCategory }) => {
  const array =
    selectedCategory !== 'All'
      ? works.filter(item => item.category === selectedCategory)
      : works.slice(0, 6);

  return (
    <WorksWrapper>
      {array.map((item, idx) => (
        <WorkItem key={item.id} {...item} idx={idx} />
      ))}
    </WorksWrapper>
  );
};

const WorksWrapper = styled.div`
  margin-top: 60px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;

  @media ${mediaQuery.md} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(6, 1fr);
    max-height: 1000px;
  }
`;

export default Works;
