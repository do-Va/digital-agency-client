import styled from 'styled-components/macro';

const FooterIcon = ({ img, url }) => {
  return (
    <FooterIconWrapper href={url}>
      <img src={img} alt="" />
    </FooterIconWrapper>
  );
};

const FooterIconWrapper = styled.a`
  width: 34px;
`;

export default FooterIcon;
