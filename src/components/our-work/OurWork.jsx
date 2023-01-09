import { useState } from 'react';
import styled from 'styled-components/macro';
import { Title } from '../_custom';
import { Categories, Works } from '.';

const OurWork = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <OurWorkWrapper id="our-work">
      <div className="max-container">
        <Title text="Some of Our <span>Previous Work</span" align="center" />

        <Categories
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />

        <Works selectedCategory={selectedCategory} />
      </div>
    </OurWorkWrapper>
  );
};

const OurWorkWrapper = styled.section`
  padding: 100px 0px;
  min-height: 100vh;
  display: flex;

  .max-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default OurWork;
