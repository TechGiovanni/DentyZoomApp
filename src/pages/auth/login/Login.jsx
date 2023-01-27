import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

// components
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button';

// stylesheet
import './Login.scss';
import { authService } from '../../../services/api/auth/auth.service';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [hasError, setHasError] = useState(false);
  const [user, setUser] = useState(null);

  const OnSubmitHandleLoginUser = async (event) => {
    setLoading(true);
    event.preventDefault();

    try {
      // Post request to signup endpoint
      const result = await authService.signIn({
        username,
        password
      });
      setKeepLoggedIn(keepLoggedIn);

      setUser(result.data.user);
      setHasError(false);
      setAlertType('alert-success'); // dynamically set css alert color
    } catch (error) {
      setLoading(false);
      setHasError(true);
      setAlertType('alert-error'); // css color for the error alert
      setErrorMessage(error?.response?.data.message);
    }
  };

  useEffect(() => {
    // if it's still loading and there is no user, return don't do further
    if (loading && !user) return;

    // if there is a user, signup is sucessfull redirect to main page
    if (user) {
      console.log('navigate to streams page');
      setLoading(false);
    }
  }, [setLoading, loading, user]);

  return (
    <div className="auth-inner">
      {hasError && errorMessage && (
        <div className={`alerts ${alertType}`} role="alert">
          Error message
        </div>
      )}
      <form className="auth-form" onSubmit={OnSubmitHandleLoginUser}>
        <div className="form-input-container">
          <Input
            id="username"
            name="username"
            type="text"
            value={username}
            label="Username"
            placeholder="Enter Username"
            className={``}
            handleChange={(event) => setUsername(event.target.value)}
          />
          <Input
            id="password"
            name="password"
            type="password"
            value={password}
            label="Password"
            placeholder="Enter Password"
            className={``}
            style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
            handleChange={(event) => setPassword(event.target.value)}
          />
          {/* password field */}
          <label className="checkmark-container" htmlFor="checkbox">
            <Input
              id="checkbox"
              type="checkbox"
              name="checkbox"
              value={keepLoggedIn}
              style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
              handleChange={(event) => setKeepLoggedIn(!keepLoggedIn)}
            />
            Keep me signed in
          </label>
        </div>
        {/* button component */}
        <Button
          label={`${loading ? 'SIGNIN IN PROGRESS...' : 'SIGNIN'}`}
          className="auth-button button"
          disabled={!username || !password}
        ></Button>
        <Link to="/forgot-password">
          <span className="forgot-password">
            Forgot password? <FaArrowRight className="arrow-right" />
          </span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
