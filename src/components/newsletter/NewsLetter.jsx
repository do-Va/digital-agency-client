import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { mediaQuery } from '../../utils/styles-values';
import { Image } from '../_custom';
import NewsLetterContent from './NewsLetterContent';

const NewsLetter = () => {
  const { newsLetter } = useSelector(store => store.newsLetter);

  return (
    <NewsLetterWrapper>
      <div className="max-container">
        <Image
          url={newsLetter?.image}
          minWidth="203px"
          maxWidth="508px"
          margin="60px 0px 0px"
        />

        <NewsLetterContent />
      </div>
    </NewsLetterWrapper>
  );
};

const NewsLetterWrapper = styled.section`
  padding: 100px 0px;
  min-height: 100vh;
  display: flex;
  align-items: center;

  .max-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${mediaQuery.lg} {
    .max-container {
      flex-direction: row-reverse;
      justify-content: space-between;
      gap: 135px;
    }
  }
`;

export default NewsLetter;
