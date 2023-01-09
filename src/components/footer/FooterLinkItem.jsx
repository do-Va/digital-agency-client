import styled from 'styled-components/macro';

const FooterLinkItem = ({ name }) => {
  return (
    <FooterLinkItemWrapper className="text_small">{name}</FooterLinkItemWrapper>
  );
};

const FooterLinkItemWrapper = styled.li``;

export default FooterLinkItem;
