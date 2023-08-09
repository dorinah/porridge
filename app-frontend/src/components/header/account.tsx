import * as React from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "../../services/AuthenticationService.tsx";
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const StyledAccount = styled.div``;

export const Account = () => {
  const isLoggedIn = AuthenticationService.getCurrentUser();

  return (
    <StyledAccount>
      {!isLoggedIn ? (
        <Link to="/login">
          <Button
            variant="link"
            size="sm"
          >
            Login
          </Button>
        </Link>
      ) : (
        <>
          <Link to="/edit">
            <Button
              variant="link"
              size="sm"
            >
              Edit Profile
            </Button>
          </Link>
          <Button
            onClick={() => AuthenticationService.logout()}
            size="sm"
          >
            Logout
          </Button>
        </> 
      )}
    </StyledAccount>
  );
};
