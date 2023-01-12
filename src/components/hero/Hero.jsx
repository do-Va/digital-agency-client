import { useSelector } from 'react-redux';
import { useRef, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Button, Image } from '../_custom';
import { mediaQuery } from '../../utils/styles-values';
import convertHtml from '../../utils/convertHtml';

const Hero = () => {
  const titleRef = useRef(null);
  const { hero, heroLoader } = useSelector(store => store.hero);

  useEffect(() => {
    !heroLoader && (titleRef.current.innerHTML = convertHtml(hero?.title));
  }, [hero, heroLoader]);

  return (
    <HeroWrapper id="hero">
      <div className="max-container">
        <div className="hero-content">
          <h1 ref={titleRef} />

          <Button
            content={hero?.buttonContent}
            minHeight="52px"
            maxHeight="71px"
            minWidth="144px"
            maxWidth="197px"
          />
        </div>

        <Image
          url={hero?.image}
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
