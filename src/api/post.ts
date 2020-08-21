import httpRequest from './httpRequest';
import { IUser } from './user';
const POST_URL = '/posts';

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPostWithUser extends IPost {
  user: IUser;
}

export default class Post extends httpRequest {
  constructor() {
    super(POST_URL);

    if (Post._instance) {
      throw new Error('Post already initialized. Use post instance instead.');
    }
    Post._instance = this;
  }

  private static _instance: Post = new Post();

  public static get instance(): Post {
    return Post._instance;
  }
}
