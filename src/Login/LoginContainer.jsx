import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './Login.jsx';
import { setEmail, setName, setPassword } from "../actions/login.js";
import { useLocation } from "react-router-dom";

const LoginContainer = (props) => {
    let query = new URLSearchParams(useLocation().search);

    return (
        <Login
            appId={query.get("appId") || "1"}
            setEmail={props.setEmail}
            setPassword={props.setPassword}
            setName={props.setName}
        />
    );
};

const mapStateToProps = (state) => {
    return {
        name: state.login.name,
        email: state.login.email,
        password: state.login.password,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setEmail,
        setPassword,
        setName,
    }, dispatch);
};

LoginContainer.propTypes = {
    appId: PropTypes.string,
    setEmail: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
};

LoginContainer.defautProps = {
    appId: ""
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
