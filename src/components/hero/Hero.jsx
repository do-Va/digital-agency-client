import styled from 'styled-components/macro';
import { Button, Image } from '../_custom';
import imageUrl from '../../assets/office-desk.png';
import { mediaQuery } from '../../utils/styles-values';

const Hero = () => {
  return (
    <HeroWrapper id="hero">
      <div className="max-container">
        <div className="hero-content">
          <h1>
            We help to <br /> Create <span>Brands</span> <br /> With Coffee
          </h1>

          <Button
            content="See our work"
            minHeight="52px"
            maxHeight="71px"
            minWidth="144px"
            maxWidth="197px"
          />
        </div>

        <Image
          url={imageUrl}
          minWidth="203px"
          maxWidth="508px"
          margin="60px 0px 0px"
        />
      </div>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.section`
  padding: 100px 0px;
  min-height: 100vh;
  display: flex;
  align-items: center;

  .max-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .hero-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;

      h1 {
        text-align: center;
        color: var(--gray);
        margin-bottom: 40px;

        span {
          background-color: var(--red);
          color: var(--white);
          padding: 0px 2px;
        }
      }
    }
  }

  @media ${mediaQuery.lg} {
    .max-container {
      flex-direction: row;
      gap: clamp(7.5625rem, 10vw, 30rem);

      .hero-content {
        align-items: flex-start;

        h1 {
          text-align: left;
        }
      }
    }
  }
`;

export default Hero;
