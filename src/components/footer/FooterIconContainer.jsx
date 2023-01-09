import styled from 'styled-components/macro';
import FooterIcon from './FooterIcon';
import icons from '../../temporary/icons';

const FooterIconContainer = () => {
  return (
    <FooterIconContainerWrapper>
      {icons.map(item => (
        <FooterIcon key={item.id} {...item} />
      ))}
    </FooterIconContainerWrapper>
  );
};

const FooterIconContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default FooterIconContainer;
