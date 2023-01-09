import styled from 'styled-components/macro';
import { Title } from '../_custom';
import Slider from './Slider';

const Testimonial = () => {
  return (
    <TestimonialWrapper>
      <Title text="Testimonial" align="center" />
      <p className="sub-title">Over 18,000 happy clients.</p>

      <Slider />
    </TestimonialWrapper>
  );
};

const TestimonialWrapper = styled.section`
  padding: 100px 0px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .sub-title {
    font-size: clamp(var(--fs-md), 5vw, var(--fs-lg));
  }
`;

export default Testimonial;
