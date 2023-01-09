import styled from 'styled-components/macro';
import rightButton from '../../assets/RightButton.svg';
import leftButton from '../../assets/LeftButton.svg';

const SliderButtons = ({ sliderScrollRight, sliderScrollLeft }) => {
  return (
    <SliderButtonsWrapper>
      <div className="left" onClick={sliderScrollLeft}>
        <img src={leftButton} alt="" />
      </div>

      <div className="right" onClick={sliderScrollRight}>
        <img src={rightButton} alt="" />
      </div>
    </SliderButtonsWrapper>
  );
};

const SliderButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 100px;

  .left,
  .right {
    cursor: pointer;
  }
`;

export default SliderButtons;
