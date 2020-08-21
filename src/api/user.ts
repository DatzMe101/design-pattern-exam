import httpRequest from './httpRequest';
import { IPost } from './post';
const USER_URL = '/users';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface IUserWithPost extends IUser {
  posts: IPost[];
}

export default class User extends httpRequest {
  constructor() {
    super(USER_URL);

    if (User._instance) {
      throw new Error('User already initialized. Use User instance instead.');
    }
    User._instance = this;
  }
  private static _instance: User = new User();

  public static get instance(): User {
    return User._instance;
  }
}
