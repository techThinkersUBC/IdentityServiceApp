import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../assets/hsbc-logo.svg';

const SignInModal = (props) => (
  <div className="SignInModal">
      <div className="SignInModalInner">
          <img className="SignInModalImage" src={logo} />
          <div className="SignInModalTitle">Login with your HSBC account.</div>
          <div className="SignInModalList">
              <input type="email" className="SignInModalListInput" placeholder="email" />
              <input type="password" className="SignInModalListInput" placeholder="password" />
          </div>
          <Link className="SignInModalLink" to={`/agree?appId=${props.appId}`}><button className="SignInModalButton">Continue ></button></Link>
      </div>
  </div>
);

SignInModal.propTypes = {
    appId: PropTypes.string,
};

SignInModal.defautProps = {
    appId: ""
};

export default SignInModal;
