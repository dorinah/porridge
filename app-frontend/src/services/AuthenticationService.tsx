import axios from "axios";
// import UserService from "./UserService";

const API_URL = "http://localhost:8741/api/";

class AuthenticationService {
  login(username: any, password: any) {
    return axios
      .post(API_URL + "login_check", {
        username,
        password
      });
  }

  logout() {
    localStorage.removeItem("user");
    window.location.replace("/login");
  }

  register(username: any, email: any, password: any) {
    return axios.post(API_URL + "register", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    // const authed = UserService.refreshToken();
    let user = localStorage.getItem('user');
    if(user === "undefined") {
      return false;
    }
    if(user) {
      return JSON.parse(user);
    }
    return false;
  }
  
}
const authServiceInstance = new AuthenticationService();

export default authServiceInstance;