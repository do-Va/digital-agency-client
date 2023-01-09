import { useRef } from 'react';
import styled from 'styled-components/macro';
import testimonials from '../../temporary/testimonials';
import { SliderItem, SliderButtons } from '.';

const Slider = () => {
  const sliderRef = useRef(null);
  const imagePadding = 34;
  let scrollAmount = 0;

  const sliderScrollLeft = () => {
    let scrollPerClick =
      sliderRef.current.children[0].clientWidth + imagePadding;

    sliderRef.current.scrollTo({
      top: 0,
      left: (scrollAmount -= scrollPerClick),
      behavior: 'smooth',
    });

    if (scrollAmount < 0) {
      sliderRef.current.scrollTo({
        top: 0,
        left:
          sliderRef.current.scrollWidth - sliderRef.current.clientWidth + 200,
        behavior: 'smooth',
      });
      scrollAmount =
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    }
  };

  const sliderScrollRight = () => {
    let scrollPerClick =
      sliderRef.current.children[0].clientWidth + imagePadding;

    if (
      scrollAmount <=
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth
    ) {
      sliderRef.current.scrollTo({
        top: 0,
        left: (scrollAmount += scrollPerClick),
        behavior: 'smooth',
      });
    } else {
      sliderRef.current.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      scrollAmount = 0;
    }
  };

  return (
    <SliderWrapper>
      <div className="max-container">
        <div className="slider-container" ref={sliderRef}>
          {testimonials.map(item => (
            <SliderItem key={item.id} {...item} />
          ))}
        </div>

        <SliderButtons
          sliderScrollLeft={sliderScrollLeft}
          sliderScrollRight={sliderScrollRight}
        />
      </div>
    </SliderWrapper>
  );
};

const SliderWrapper = styled.div`
  width: 100%;
  margin-top: 100px;

  .max-container {
    display: flex;
    flex-direction: column;

    .slider-container {
      display: flex;
      width: 100%;
      overflow: hidden;
      gap: 32px;
    }
  }
`;

export default Slider;
