import React, { FC, useState, useEffect } from 'react';
import Posts from './Posts';
import { IPost } from '../../api/post';
import { getPosts } from '../../services/dataService';

const PostContainer: FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    const getData = async () => {
      const data: IPost[] = await getPosts();
      setPosts(data);
    };
    getData();
  }, []);
  return (
    <div>
      <h3>Post</h3>
      <Posts posts={posts} />
    </div>
  );
};

export default PostContainer;
