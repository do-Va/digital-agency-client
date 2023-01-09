import styled from 'styled-components/macro';
import { mediaQuery } from '../../utils/styles-values';
import { InputGroup, Button } from '../_custom';

const NewsLetterForm = () => {
  return (
    <NewsLetterFormWrapper>
      <InputGroup name="name" title="Name" />
      <InputGroup name="email" title="Email" />

      <Button
        content="Send"
        minHeight="55px"
        maxHeight="71px"
        minWidth="165px"
        maxWidth="205px"
      />
    </NewsLetterFormWrapper>
  );
};

const NewsLetterFormWrapper = styled.form`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media ${mediaQuery.lg} {
    align-items: flex-start;
  }
`;

export default NewsLetterForm;
