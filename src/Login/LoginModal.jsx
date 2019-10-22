import React from 'react';

const SignInModal = () => (
  <div className="SignInModal">
      <div className="SignInModalInner">
          <div className="SignInModalTitle">Login with HSBC</div>
          <div className="SignInModalList">
              <input type="email" className="SignInModalListInput" placeholder="email" />
              <input type="password" className="SignInModalListInput" placeholder="password" />
          </div>
      </div>
  </div>
);

export default SignInModal;
