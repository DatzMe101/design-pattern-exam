import React, { FC } from 'react';
import Users from './User/Users';
import PostContainer from './Post/PostContainer';

const Main: FC = () => {
  return (
    <div className='ui grid'>
      <div className='eight wide column'>
        <Users />
      </div>
      <div className='eight wide column'>
        <PostContainer />
      </div>
    </div>
  );
};

export default Main;
