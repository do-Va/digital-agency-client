import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { Title } from '../_custom';
import ContactForm from './ContactForm';

const ContactUsContent = () => {
  const { contactUs } = useSelector(store => store.contactUs);

  return (
    <ContactUsContentWrapper>
      <Title text={contactUs?.title} align="center" />

      <ContactForm />
    </ContactUsContentWrapper>
  );
};

const ContactUsContentWrapper = styled.div``;

export default ContactUsContent;
