import User, { IUser, IUserWithPost } from './../api/user';
import Post, { IPost, IPostWithUser } from './../api/post';

const post = Post.instance;
const user = User.instance;

export const getUsers = async (): Promise<IUser[]> => {
  return await user.get<IUser[]>();
};

export const getUser = async (id: number): Promise<IUserWithPost> => {
  const userData = await user.get<IUser>(id);
  const postData = await post.get<IPost[]>(0, { userId: id });
  const userWithPosts = {
    ...userData,
    posts: postData,
  };
  return userWithPosts;
};

export const getPosts = async (): Promise<IPost[]> => {
  return await post.get<IPost[]>();
};

export const getPost = async (id: number): Promise<IPostWithUser> => {
  const postData = await post.get<IPost>(id);
  const userData = await user.get<IUser>(postData.id);
  const postWithUser = {
    ...postData,
    user: userData,
  };
  return postWithUser;
};
