import React, { FC, useState, useEffect } from 'react';
import UserItem from './UserItem';
import { IUser } from '../../api/user';
import { getUsers } from '../../services/dataService';

const Users: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    const getUserData = async () => {
      const data: IUser[] = await getUsers();
      setUsers(data);
    };
    getUserData();
  }, []);
  return (
    <div>
      <h3>Users</h3>
      <div className='ui very relaxed list'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
