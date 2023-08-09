import { Logo } from "./logo.tsx";
import { Account } from "./account.tsx";
import styled from 'styled-components';


const StyledHeader = styled.div`
  width: 100%;
  height: 52px;
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  li {
    color: white;
  }
`;

export const Header = () => (
  <StyledHeader>
    <Logo />
    <Account />
  </StyledHeader>
);