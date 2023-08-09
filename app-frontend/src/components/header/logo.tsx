import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledLogo = styled.div`
  margin-left: 10px;
`;

export const Logo = () => (
  <StyledLogo>
    <Link to="/Dashboard">
    <img id="logo" width="300" height="50" src="https://www.coachesvoice.com/wp-content/themes/cv/assets/images/cv.svg" data-src="https://www.coachesvoice.com/wp-content/themes/cv/assets/images/cv.svg" alt="Coaches' Voice logo" />
    </Link>
  </StyledLogo>
);