import styled from 'styled-components/macro';

const CategoryItem = ({ name, selectedCategory, setSelectedCategory }) => {
  return (
    <CategoryItemWrapper
      onClick={() => setSelectedCategory(name)}
      selected={name === selectedCategory}
    >
      {name}
    </CategoryItemWrapper>
  );
};

const CategoryItemWrapper = styled.li`
  font-size: 1.5rem;
  cursor: pointer;
  background-color: ${props => (props.selected ? 'var(--red)' : 'transparent')};
  color: ${props => (props.selected ? 'var(--white)' : 'var(--dark-blue)')};
  text-transform: uppercase;
  padding: 4px;
  transition: all 0.2s linear;

  &:hover {
    background-color: var(--red);
    color: var(--white);
  }
`;

export default CategoryItem;
