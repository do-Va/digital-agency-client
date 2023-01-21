import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { mediaQuery } from '../../utils/styles-values';
import WorkItem from './WorkItem';

const Works = ({ selectedCategory }) => {
  const { ourWorks } = useSelector(store => store.ourWork);

  const array =
    selectedCategory !== 'All'
      ? ourWorks?.filter(item => item.category === selectedCategory)
      : ourWorks?.slice(0, 6);

  return (
    <WorksWrapper>
      {array.map((item, idx) => (
        <WorkItem key={item._id} {...item} />
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
