import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import faker from 'faker';
import { IUser } from '../../api/user';

interface IProps {
  user: IUser;
}

const UserItem: FC<IProps> = ({ user }) => {
  const avatarUrl = faker.image.avatar();
  return (
    <div className='item'>
      <img className='ui avatar image' src={avatarUrl} alt='avatar' />
      <div className='content'>
        <Link to={`/users/${user.id}`} className='header'>
          {user.name}
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
