import styled from 'styled-components/macro';
import { mediaQuery } from '../../utils/styles-values';

const Hamburger = ({ isShowMenu, setIsShowMenu }) => {
  return (
    <HamburgerWrapper
      onClick={() => setIsShowMenu(!isShowMenu)}
      isShowMenu={isShowMenu}
    >
      <div className="first" />
      <div className="second" />
    </HamburgerWrapper>
  );
};

const HamburgerWrapper = styled.div`
  position: relative;
  z-index: 10;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  div {
    width: 22.5px;
    height: 3px;
    background-color: var(--red);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

    &.first {
      transform-origin: 100% 0%;
      transform: ${props =>
        props.isShowMenu
          ? 'rotate(-45deg) translate(0px, -1px)'
          : 'rotate(0deg) translate(0, 0)'};
    }

    &.second {
      transform-origin: 100% 100%;
      transform: ${props =>
        props.isShowMenu
          ? 'rotate(45deg) translate(0px, 2px)'
          : 'rotate(0deg) translate(0, 0)'};
    }
  }

  @media ${mediaQuery.lg} {
    display: none;
  }
`;

export default Hamburger;
