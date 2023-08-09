import AuthenticationService from "./AuthenticationService";
export default function AuthenticationHeader() {
    const user = AuthenticationService.getCurrentUser();
    if (user && user.token) {
      return { Authorization: 'Bearer ' + user.token };
    } else {
      return {};
    }
  }