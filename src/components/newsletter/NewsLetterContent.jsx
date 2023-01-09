import styled from 'styled-components/macro';
import { Title } from '../_custom';
import NewsLetterForm from './NewsLetterForm';

const NewsLetterContent = () => {
  return (
    <NewsLetterContentWrapper>
      <Title
        text="Join Our NewsLetters<br/> & get <span>Coffee Formula!</span>"
        align="center"
      />

      <NewsLetterForm />
    </NewsLetterContentWrapper>
  );
};

const NewsLetterContentWrapper = styled.div`
  margin-top: 100px;
`;

export default NewsLetterContent;
