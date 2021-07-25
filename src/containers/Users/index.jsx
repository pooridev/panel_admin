import { useEffect, useState } from 'react';
import User from '../../components/User/index';
import styles from './Users.module.css';
import { Redirect } from 'react-router-dom';

const Users = () => {
  const [fetchedUsers, setFetchedUsers] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        'https://reqres.in/api/users?page=1&per_page=12'
      );
      const { data } = await response.json();
      setFetchedUsers(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  let users = null;

  if (fetchedUsers) {
    users = fetchedUsers.map(user => (
      <User
        key={user.id}
        email={user.email}
        avatar={user.avatar}
        fName={user.first_name}
        lName={user.last_name}
      />
    ));
  }

  useEffect(() => fetchUsers(), []);

  // Will redirect user to the login page if he/she was not logged in
  const loggedInUser = localStorage.getItem('user');
  if (!loggedInUser) return <Redirect to='/login' />;

  return <main className={styles.Users}>{users}</main>;
};

export default Users;
