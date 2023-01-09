import styled from 'styled-components/macro';
import { mediaQuery } from '../../utils/styles-values';
import { Image } from '../_custom';
import imageUrl from '../../assets/contact-us.png';
import ContactUsContent from './ContactUsContent';

const ContactUs = () => {
  return (
    <ContactUsWrapper id="contact-us">
      <div className="max-container">
        <Image
          url={imageUrl}
          minWidth="203px"
          maxWidth="508px"
          margin="60px 0px 0px"
        />

        <ContactUsContent />
      </div>
    </ContactUsWrapper>
  );
};

const ContactUsWrapper = styled.section`
  padding: 100px 0px;
  min-height: 100vh;
  display: flex;
  align-items: center;

  .max-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
  }

  @media ${mediaQuery.lg} {
    .max-container {
      flex-direction: row;
      justify-content: space-between;
      gap: 135px;
    }
  }
`;

export default ContactUs;
