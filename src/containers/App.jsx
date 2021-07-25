import { Route } from 'react-router-dom';
import Auth from './Auth';
import Layout from './Layout';
import Products from './Products/index';
import Users from './Users';

function App() {
  return (
    <Layout>
      <Route exact path='/users' component={Users} />
      <Route exact path='/login' component={Auth} />
      <Route exact path='/' component={Products} />
    </Layout>
  );
}

export default App;
