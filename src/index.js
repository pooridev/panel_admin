import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { AuthProvider } from './providers/auth-context';
import { BrowserRouter as Router } from 'react-router-dom';
// import makeServer from './server';

// if (process.env.NODE_ENV === 'development') {
//   makeServer({ environment: 'development' });
// }

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
