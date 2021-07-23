import { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from './Auth';
import Layout from './Layout';
import Products from './Products/index';

function App() {
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (!loggedInUser) {
      return <Redirect to='/login' />;
    }
  }, []);

  return (
    <Layout>
      <Route exact path='/login' component={Auth} />
      <Route exact path='/' component={Products} />
    </Layout>
  );
}

export default App;
