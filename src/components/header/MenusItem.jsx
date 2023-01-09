import styled from 'styled-components/macro';
import { mediaQuery } from '../../utils/styles-values';

const MenuItem = ({
  title,
  url,
  selected,
  setSelected,
  isShowMenu,
  setIsShowMenu,
}) => {
  const handleClick = evn => {
    setIsShowMenu(!isShowMenu);
    setSelected(evn.target.text);
  };

  return (
    <MenuItemWrapper selected={selected} title={title} isShowMenu={isShowMenu}>
      <a href={url} onClick={handleClick}>
        {title}
      </a>
    </MenuItemWrapper>
  );
};

const MenuItemWrapper = styled.li`
  position: relative;
  text-transform: uppercase;
  width: max-content;
  transition: ${props =>
    props.isShowMenu ? 'opacity 0.2s 0.4s linear' : 'opacity 0 linear'};
  opacity: ${props => (props.isShowMenu ? '1' : '0')};
  display: ${props => (props.isShowMenu ? 'block' : 'none')};

  &:last-child a {
    display: grid;
    place-content: center;

    width: 185px;
    height: 68px;
    background-color: var(--dark-blue);
    color: var(--white);
    cursor: pointer;
  }

  &:not(:last-child)::after {
    content: '';
    width: 100%;
    height: 4px;
    background-color: var(--red);
    position: absolute;
    bottom: -4px;
    left: 0;
    transform: ${props =>
      props.selected === props.title ? 'scale(1)' : 'scale(0)'};
    transition: transform 0.2s linear;
  }

  &:hover:not(:last-child)::after {
    transform: scale(1);
  }

  @media ${mediaQuery.lg} {
    opacity: 1;
    display: block;
  }
`;

export default MenuItem;
