import { useState } from 'react';
import styled from 'styled-components/macro';
import { Logo } from '../_custom';
import { Menus, Hamburger } from '.';

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <HeaderWrapper>
      <div className="max-container">
        <Logo />
        <Menus setIsShowMenu={setIsShowMenu} isShowMenu={isShowMenu} />
        <Hamburger setIsShowMenu={setIsShowMenu} isShowMenu={isShowMenu} />
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  box-shadow: 0px 8px 20px 5px rgba(0, 0, 0, 0.08);
  z-index: 100;
  background-color: var(--white);

  .max-container {
    height: clamp(4.625rem, 10vw + 2.17rem, 5.25rem);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default Header;
