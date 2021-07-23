import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  useState
} from 'react';
import Swal from 'sweetalert2';
import { AUTH_FAIL, AUTH_START, AUTH_SUCCESS } from './actions';

export const AuthContext = createContext({
  loading: false,
  authMode: '',

  dispatch: () => {},
  emailChangeHandler: () => {},
  passwordChangeHandler: () => {},
  authHanlder: () => {}
});

const initialState = {
  token: null,
  error: null,
  loading: false,
  userData: JSON.parse(localStorage.getItem('user')) || null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        loading: true,
        error: false
      };

    case AUTH_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.userData));
      console.log(action.userData);
      return {
        userData: action.userData,
        loading: false,
        error: false
      };

    case AUTH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  // Reducer for handling HTTP requests
  const [state, dispatch] = useReducer(authReducer, initialState);
  const { error, loading, token, userData } = state;

  // states
  const [authMode, setAuthMode] = useState('Sign in');

  // input values
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  // input value handlers
  const emailChangeHandler = email => setEmailValue(email);
  const passwordChangeHandler = password => setPasswordValue(password);

  const areInputsValid = useCallback(() => {
    const emailPattern = /^\S+@\S+\.\S+$/;

    return emailPattern.test(emailValue) && passwordValue.length > 6;
  }, [emailValue, passwordValue]);

  const switchAuthModeHandler = useCallback(() => {
    authMode === 'Sign in' ? setAuthMode('Sign up') : setAuthMode('Sign in');
  }, [authMode]);

  const showErrorAler = message => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: toast => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });

    Toast.fire({
      icon: 'error',
      title: message
    });
  };

  const authHandler = useCallback(async () => {
    dispatch({ type: AUTH_START });
    if (!areInputsValid()) {
      dispatch({ type: AUTH_FAIL });
      showErrorAler('enter a valid email and password ');
      return;
    }
    // in case if all inputs were valid
    const userData = {
      email: emailValue,
      password: passwordValue
    };

    let url = 'https://reqres.in/api/login';
    if (authMode === 'Sign up') {
      url = 'https://reqres.in/api/register';
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      dispatch({
        type: AUTH_SUCCESS,
        userData: { email: userData.email, token: data.token }
      });
    } catch (err) {
      showErrorAler(err.message);
      dispatch({ type: AUTH_FAIL, error: err.message });
    }
  }, [authMode, areInputsValid, emailValue, passwordValue]);

  const contextValue = useMemo(
    () => ({
      error,
      loading,
      token,
      authMode,
      userData,

      switchAuthModeHandler,
      authHandler,
      emailChangeHandler,
      passwordChangeHandler,
      dispatch: dispatch
    }),
    [
      switchAuthModeHandler,
      authHandler,
      error,
      loading,
      token,
      authMode,
      userData
    ]
  );
  return <AuthContext.Provider value={contextValue} children={children} />;
};

export const useAuth = () => useContext(AuthContext);
