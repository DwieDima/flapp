import API from '../Api';
import { Profile } from '../models/profile.model';

export class UserService {
  public getUserProfile(): Promise<Profile> {
    return API.get('/profile');
  }
}

export const userService = new UserService();
