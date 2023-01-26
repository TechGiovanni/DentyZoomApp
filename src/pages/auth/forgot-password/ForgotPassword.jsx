import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

// components
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button';

// assets
import backgroundImage from '../../../assets/images/background.jpg';

// stylesheet
import './ForgotPassword.styles.scss';

const ForgotPassword = () => {
  return (
    <div className="container-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="environment">DEV</div>
      <div className="container-wrapper-auth">
        <div className="tabs forgot-password-tabs">
          <div className="tabs-auth">
            <ul className="tab-group">
              <li className="tab">
                <div className="login forgot-password">Forgot Password</div>
              </li>
            </ul>

            <div className="tab-item">
              <div className="auth-inner">
                <div className="alerts alert-error" role="alert">
                  Error message
                </div>
                <form className="auth-form">
                  <div className="form-input-container">
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      defaultValue="my password"
                      label="Password"
                      placeholder="Enter Password"
                      className={``}
                      onChange={() => {}}
                    />
                    {/* password field */}
                    <label className="checkmark-container" htmlFor="checkbox">
                      <Input id="checkbox" type="checkbox" name="checkbox" defaultValue={false} onChange={() => {}} />
                      Keep me signed in
                    </label>
                  </div>
                  {/* button component */}
                  <Link to="/">
                    <span className="forgot-password">
                      <FaArrowLeft className="arrow-left" /> Back to login
                    </span>
                  </Link>
                  <Button label={'FORGOT PASSWORD'} className="auth-button button" disabled={true}></Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
