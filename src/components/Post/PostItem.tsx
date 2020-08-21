import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IPost } from '../../api/post';

interface IProps {
  post: IPost;
}

const PostItem: FC<IProps> = ({ post }) => {
  return (
    <Link to={`/posts/${post.id}`} className='item'>
      <div className='content'>
        <div className='header'>{post.title}</div>
        {post.body}
      </div>
    </Link>
  );
};

export default PostItem;
