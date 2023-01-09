import styled from 'styled-components/macro';
import { Title } from '../_custom';
import ContactForm from './ContactForm';

const ContactUsContent = () => {
  return (
    <ContactUsContentWrapper>
      <Title
        text="Need Help Making<br/> Coffee? <span>Contact Us</span>"
        align="center"
      />

      <ContactForm />
    </ContactUsContentWrapper>
  );
};

const ContactUsContentWrapper = styled.div``;

export default ContactUsContent;
