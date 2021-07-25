import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  useState
} from 'react';
import Swal from 'sweetalert2';
import { AUTH_FAIL, AUTH_START, AUTH_SUCCESS, LOG_OUT } from './actions';

export const AuthContext = createContext({
  loading: false,
  authMode: '',

  emailChangeHandler: () => {},
  passwordChangeHandler: () => {},
  authHanlder: () => {},
  logoutHandler: () => {}
});

const initialState = {
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

    case LOG_OUT:
      localStorage.removeItem('user');
      return {
        ...state,
        userData: null
      };

    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  // Reducer for handling HTTP requests
  const [state, dispatch] = useReducer(authReducer, initialState);
  const { loading, userData } = state;

  // state of the Auth form
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

  const showErrorAlert = message => {
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
  // login & register handler
  const authHandler = useCallback(async () => {
    dispatch({ type: AUTH_START });

    // if user didn't fill the inputs with correct values
    if (!areInputsValid()) {
      dispatch({ type: AUTH_FAIL });
      showErrorAlert('enter a valid email and password');
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

      // if the entered info by user was correct (so we got a token from server)
      if ('token' in data) {
        dispatch({
          type: AUTH_SUCCESS,
          userData: { email: userData.email, token: data.token }
        });
      } else {
        showErrorAlert('Wrong Password or Email');
        dispatch({ type: AUTH_FAIL, error: data.message });
      }
    } catch (err) {
      showErrorAlert(err.message);
      dispatch({ type: AUTH_FAIL, error: err.message });
    }
  }, [authMode, areInputsValid, emailValue, passwordValue]);

  const logoutHandler = () => dispatch({ type: LOG_OUT });

  const contextValue = useMemo(
    () => ({
      loading,
      authMode,
      userData,

      logoutHandler,
      switchAuthModeHandler,
      authHandler,
      emailChangeHandler,
      passwordChangeHandler
    }),
    [switchAuthModeHandler, authHandler, loading, authMode, userData]
  );
  return <AuthContext.Provider value={contextValue} children={children} />;
};

export const useAuth = () => useContext(AuthContext);
