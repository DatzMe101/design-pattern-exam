import React, { FC, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IPost, IPostWithUser } from '../../api/post';
import { IUser } from '../../api/user';
import { getPost } from '../../services/dataService';
import PostItem from './PostItem';
import UserItem from '../User/UserItem';

const PostPage: FC = () => {
  const { id } = useParams();
  const [post, setPost] = useState<IPost | null>(null);
  const [user, setUser] = useState<IUser | null>(null);
  useEffect(() => {
    const getData = async () => {
      const data: IPostWithUser = await getPost(id);
      const { user: userData, ...postData } = data;
      setUser(userData);
      setPost(postData);
    };
    getData();
  });
  return (
    <div>
      <div className='ui massive breadcrumb'>
        <Link to='/' className='section'>
          Main
        </Link>
        <i className='right chevron icon divider'></i>
        <span className='section active'>Post</span>
      </div>
      <div className='ui segment'>
        Post
        {post && <PostItem post={post} />}
        User
        {user && <UserItem user={user} />}
      </div>
    </div>
  );
};

export default PostPage;
