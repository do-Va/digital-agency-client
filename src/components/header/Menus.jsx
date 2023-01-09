import { useState } from 'react';
import styled from 'styled-components/macro';
import { mediaQuery } from '../../utils/styles-values';
import MenuItem from './MenusItem';

const menus = [
  {
    id: 1,
    title: 'home',
    url: '#hero',
  },
  {
    id: 2,
    title: 'about',
    url: '#about',
  },
  {
    id: 3,
    title: 'services',
    url: '#services',
  },
  {
    id: 4,
    title: 'our work',
    url: '#our-work',
  },
  {
    id: 5,
    title: 'contact us',
    url: '#contact-us',
  },
];

const Menus = ({ isShowMenu, setIsShowMenu }) => {
  const [selected, setSelected] = useState('home');

  return (
    <MenusWrapper isShowMenu={isShowMenu}>
      {menus.map(item => (
        <MenuItem
          key={item.id}
          {...item}
          selected={selected}
          setSelected={setSelected}
          isShowMenu={isShowMenu}
          setIsShowMenu={setIsShowMenu}
        />
      ))}
    </MenusWrapper>
  );
};

const MenusWrapper = styled.ul`
  position: ${props => (props.isShowMenu ? 'fixed' : 'static')};
  inset: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: var(--white);
  z-index: 9;
  opacity: ${props => (props.isShowMenu ? '1' : '0')};
  transition: all 0.2s linear;

  @media ${mediaQuery.lg} {
    position: static;
    opacity: 1;
    flex-direction: row;
    gap: 60px;
  }
`;

export default Menus;
