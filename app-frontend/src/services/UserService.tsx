import axios from 'axios';
import AuthenticationHeader from './AuthenticationHeader';

const API_URL = 'http://localhost:8741/api/user';

class UserService {
  async getProfile() {
    return await axios.get(API_URL + '/profile', { headers: AuthenticationHeader()});
  }

  async saveProfile(data: any) {
    return await axios.post(API_URL + '/profile/save', {data: data}, { headers: AuthenticationHeader()});
  }
  // async refreshToken() {
  //   console.log( "====refreshing token=====", AuthenticationHeader());
  //   //return await axios.get(API_URL + '/refresh-token', { headers: AuthenticationHeader()});
  // }
}

export default new UserService();