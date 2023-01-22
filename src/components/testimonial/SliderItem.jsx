import styled from 'styled-components/macro';

const SliderItem = ({ name, title, image, description }) => {
  return (
    <SliderItemWrapper>
      <div className="img-container">
        <img src={image} alt={name} />
      </div>

      <div className="stars">⭐⭐⭐⭐⭐</div>
      <h5>{description}</h5>
      <h5 className="name">{name}</h5>
      <p>{title}</p>
    </SliderItemWrapper>
  );
};

const SliderItemWrapper = styled.div`
  min-width: 288px;
  height: clamp(33.625rem, 10vw, 34.6875rem);
  border: 1px solid #949494;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 20px;
  border-radius: 50px;

  .img-container {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
  }

  .stars {
    margin: 24px 0px;
  }

  h5 {
    font-weight: var(--fw-regular);
  }

  .name {
    margin-top: 46px;
  }
`;

export default SliderItem;
