import styled from 'styled-components/macro';
import { FooterContact, FooterLinks } from '.';
import { mediaQuery } from '../../utils/styles-values';

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="max-container">
        <FooterContact />
        <FooterLinks />
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  padding: 100px 0px 60px;

  .max-container {
    display: flex;
    flex-direction: column;
    gap: 120px;

    @media ${mediaQuery.lg} {
      flex-direction: row;
      gap: 57px;
    }

    @media ${mediaQuery.xl} {
      gap: 150px;
    }
  }
`;

export default Footer;
