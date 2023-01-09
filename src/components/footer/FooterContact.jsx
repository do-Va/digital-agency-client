import styled from 'styled-components/macro';
import { Logo } from '../_custom';
import { FooterAddress, FooterIconContainer } from '.';
import { mediaQuery } from '../../utils/styles-values';

const FooterContact = () => {
  return (
    <FooterContactWrapper>
      <Logo />
      <FooterIconContainer />
      <FooterAddress />
    </FooterContactWrapper>
  );
};

const FooterContactWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  gap: 33px;
  max-width: 264px;

  @media ${mediaQuery.lg} {
    align-items: flex-start;
    margin: 0;
  }

  @media ${mediaQuery.xl} {
    max-width: 400px;
  }
`;

export default FooterContact;
