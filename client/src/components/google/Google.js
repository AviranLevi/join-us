import React from 'react';
import GoogleLogin from 'react-google-login';
import { google } from '../../config';
import GoogleLogo from '../../assets/images/btn_google_light_normal_ios.svg';

const Google = () => (
  <GoogleLogin
    clientId={google.clientId}
    render={(renderProps) => (
      <button
        className='google-btn slide-from-bottom'
        onClick={renderProps.onClick}
        disabled={renderProps.disabled}
      >
        <img src={GoogleLogo} alt='google-logo ' />
      </button>
    )}
    onSuccess={(res) => console.log(res)}
    onFailure={(err) => console.log(err)}
    cookiePolicy={'single_host_origin'}
  />
);

export default Google;
