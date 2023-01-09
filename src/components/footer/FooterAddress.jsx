import styled from 'styled-components/macro';
import { mediaQuery } from '../../utils/styles-values';

const FooterAddress = () => {
  return (
    <FooterAddressWrapper>
      <h5>Address</h5>
      <p>+123 654 987</p>
      <p>
        877 The Bronx, NY <br /> 14568 USA
      </p>
    </FooterAddressWrapper>
  );
};

const FooterAddressWrapper = styled.div`
  text-align: center;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }

  @media ${mediaQuery.lg} {
    text-align: left;
  }
`;

export default FooterAddress;
