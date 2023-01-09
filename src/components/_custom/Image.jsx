import styled from 'styled-components/macro';
import { mediaQuery } from '../../utils/styles-values';

const Image = ({ url, imageTitle, minWidth, maxWidth, margin }) => {
  return (
    <ImageWrapper
      style={{
        '--min-width': minWidth,
        '--max-width': maxWidth,
        '--margin': margin,
      }}
    >
      <img src={url} alt={imageTitle} />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  flex: 1;
  width: clamp(var(--min-width), 50vw, var(--max-width));
  max-width: max-content;
  margin: var(--margin);

  @media ${mediaQuery.lg} {
    margin: 0;
  }
`;

export default Image;
