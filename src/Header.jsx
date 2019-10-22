import React from 'react';
import logo from './assets/hsbc-logo.svg';

const Header = () => (
    <div className="AppHeader">
        <img src={logo} />
        <div className="AppHeaderDescription">HSBC Open Banking</div>
    </div>
);

export default Header;
