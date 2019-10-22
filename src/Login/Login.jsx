import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import SignInModal from './LoginModal.jsx';

const Login = (props) => {
    console.log('loginprop', props);
    return (
        <div className="Home">
            <SignInModal
                appId={props.appId}
                setName={props.setName}
                setEmail={props.setEmail}
                setPassword={props.setPassword}
            />
        </div>
    );
};

Login.propTypes = {
    appId: PropTypes.string,
    setEmail: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
};

Login.defautProps = {
    appId: ""
};

export default Login;
