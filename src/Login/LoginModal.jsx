import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../assets/hsbc-logo.svg';

const SignInModal = (props) => (
  <div className="SignInModal">
      <div className="SignInModalInner">
          <img className="SignInModalImage"  alt="HSBC Logo" src={logo} />
          <div className="SignInModalTitle">Login with your HSBC account.</div>
          <div className="SignInModalList">
              <input className="SignInModalListInput" placeholder="your name" onBlur={(e) => props.setName(e.target.value)} />
              <input type="email" className="SignInModalListInput" placeholder="email" onBlur={(e) => props.setEmail(e.target.value)} />
              <input type="password" className="SignInModalListInput" placeholder="password" onBlur={(e) => props.setPassword(e.target.value)} />
          </div>
          <Link className="SignInModalLink" to={`/agree?appId=${props.appId}`}><button className="SignInModalButton">Continue ></button></Link>
      </div>
  </div>
);

SignInModal.propTypes = {
    appId: PropTypes.string,
    setEmail: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
};

SignInModal.defautProps = {
    appId: ""
};

export default SignInModal;
