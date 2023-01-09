import styled from 'styled-components/macro';
import CategoryItem from './CategoryItem';

const categories = [
  { id: 1, name: 'All' },
  { id: 2, name: 'Illustration' },
  { id: 3, name: 'App' },
  { id: 4, name: 'Branding' },
];

const Categories = ({ setSelectedCategory, selectedCategory }) => {
  return (
    <CategoriesWrapper>
      {categories.map(item => (
        <CategoryItem
          key={item.id}
          {...item}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      ))}
    </CategoriesWrapper>
  );
};

const CategoriesWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 0;
  margin-top: 60px;
`;

export default Categories;
