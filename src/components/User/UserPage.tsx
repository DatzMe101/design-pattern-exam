import React, { FC, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import UserItem from './UserItem';
import { IUser, IUserWithPost } from '../../api/user';
import { IPost } from '../../api/post';
import Posts from '../Post/Posts';
import { getUser } from '../../services/dataService';

const UserPage: FC = () => {
  const { id } = useParams();
  const [user, setUser] = useState<IUser | null>(null);
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    const getData = async () => {
      const data: IUserWithPost = await getUser(id);
      const { posts: postData, ...userData } = data;
      setUser(userData);
      setPosts(postData);
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
        <span className='section active'>User</span>
      </div>
      <h3>User Info</h3>
      {user && <UserItem key={user.id} user={user} />}
      <h4>User Posts</h4>
      <Posts posts={posts} />
    </div>
  );
};

export default UserPage;
