import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { Title } from '../_custom';
import NewsLetterForm from './NewsLetterForm';

const NewsLetterContent = () => {
  const { newsLetter } = useSelector(store => store.newsLetter);

  return (
    <NewsLetterContentWrapper>
      <Title text={newsLetter?.title} align="center" />

      <NewsLetterForm />
    </NewsLetterContentWrapper>
  );
};

const NewsLetterContentWrapper = styled.div`
  margin-top: 100px;
`;

export default NewsLetterContent;
