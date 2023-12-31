import { NavLink as Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
export const PrimaryNav = styled.nav`
  z-index: 14;
  height: 20px;
  display: flex;
  ${'' /* background: #8bc34a; */}
  justify-content: space-between;
  padding: 0.18rem calc((100vw - 1000px) / 2);
`
export const MenuLink = styled(Link)`
  color: #000;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;
  &.active {
    color: #007BFF;
    font-weight:bold;
  }
`
export const Hamburger = styled(FaBars)`
  display: none;
  color: #000000;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.9rem;
    top: 0;
    right: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 75%);
  }
`
export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -25px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`