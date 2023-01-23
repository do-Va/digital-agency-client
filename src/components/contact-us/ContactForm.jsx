import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import {
  createContactUsMember,
  resetValue,
  changeContactUsState,
} from '../../redux/home/contactUsSlice';
import { mediaQuery } from '../../utils/styles-values';
import { InputGroup, Button } from '../_custom';

const ContactForm = () => {
  const dispatch = useDispatch();
  const { name, email, message } = useSelector(store => store.contactUs);

  const handleSubmit = () => {
    dispatch(
      createContactUsMember({
        url: '/contact-us/list',
        value: { name, email, message },
      })
    );

    dispatch(resetValue());
  };

  return (
    <ContactFormWrapper>
      <InputGroup
        name="name"
        title="Name"
        method={changeContactUsState}
        value={name}
      />
      <InputGroup
        name="email"
        title="Email"
        method={changeContactUsState}
        value={email}
      />
      <InputGroup
        name="message"
        title="Message"
        textarea={true}
        method={changeContactUsState}
        value={message}
      />

      <Button
        content="Send"
        minHeight="55px"
        maxHeight="71px"
        minWidth="165px"
        maxWidth="205px"
        method={handleSubmit}
      />
    </ContactFormWrapper>
  );
};

const ContactFormWrapper = styled.form`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media ${mediaQuery.lg} {
    align-items: flex-start;
  }
`;

export default ContactForm;
