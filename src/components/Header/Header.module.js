import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderBlock = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: var(--color-light);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

export const List = styled.ul`
  display: flex;
  gap: 48px;
  list-style: none;
`;

export const Link = styled(NavLink)`
  position: relative;
  transition: color 250ms ease-out;
  font-size: 18px;
  font-weight: 700;

  &:hover {
    color: var(--color-accent-interact);
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -5px;
    right: 0;
    width: 0;
    height: 2px;
    opacity: 0;
    background-color: var(--color-accent-interact);
    -webkit-transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1),
      left 500ms cubic-bezier(0.4, 0, 0.2, 1), width 500ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), left 500ms cubic-bezier(0.4, 0, 0.2, 1),
      width 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover::before {
    opacity: 1;
    width: 100%;
    left: 0;
  }

  &.active {
    &::after {
      content: "";
      position: absolute;
      top: 40px;
      left: 0;
      height: 6px;
      width: 100%;
      background-color: var(--color-accent);
    }
    &:hover::before {
      opacity: 0;
    }
  }
`;
