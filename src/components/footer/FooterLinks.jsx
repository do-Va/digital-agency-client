import styled from 'styled-components/macro';
import FooterLinkItem from './FooterLinkItem';
import footerLinks from '../../temporary/footerLinks';
import { mediaQuery } from '../../utils/styles-values';

const FooterLinks = () => {
  return (
    <FooterLinksWrapper>
      {footerLinks.map(item => (
        <ul key={item.id}>
          <li className="link">
            <h5>{item.name}</h5>
            <ul>
              {item.subLinks.map(subItem => (
                <FooterLinkItem key={subItem.id} name={subItem.name} />
              ))}
            </ul>
          </li>
        </ul>
      ))}
    </FooterLinksWrapper>
  );
};

const FooterLinksWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 120px;

  ul {
    padding: 0;

    li {
      margin-bottom: 16px;

      h5 {
        margin-bottom: 20px;
      }
    }
  }

  @media ${mediaQuery.lg} {
    flex-direction: row;
    text-align: left;
    gap: 0px;
  }
`;

export default FooterLinks;
