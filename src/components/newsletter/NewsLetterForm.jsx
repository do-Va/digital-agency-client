import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import {
  createNewsLetterMember,
  changeNewsLetterState,
  resetValue,
} from '../../redux/home/newsLetterSlice';
import { mediaQuery } from '../../utils/styles-values';
import { InputGroup, Button } from '../_custom';

const NewsLetterForm = () => {
  const dispatch = useDispatch();
  const { newsName, newsEmail } = useSelector(store => store.newsLetter);

  const handleSubmit = () => {
    dispatch(
      createNewsLetterMember({
        url: '/newsletter/list',
        value: { name: newsName, email: newsEmail },
      })
    );

    dispatch(resetValue());
  };

  return (
    <NewsLetterFormWrapper>
      <InputGroup
        name="newsName"
        title="Name"
        value={newsName}
        method={changeNewsLetterState}
      />
      <InputGroup
        name="newsEmail"
        title="Email"
        value={newsEmail}
        method={changeNewsLetterState}
      />

      <Button
        content="Send"
        minHeight="55px"
        maxHeight="71px"
        minWidth="165px"
        maxWidth="205px"
        method={handleSubmit}
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
