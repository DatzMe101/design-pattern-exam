import React, { FC } from 'react';
import PostItem from './PostItem';
import { IPost } from '../../api/post';

interface IProps {
  posts: IPost[];
}

const Posts: FC<IProps> = ({ posts }) => {
  return (
    <div className='ui relaxed divided list'>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
