import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Agree from './Agree.jsx';
import { getPermissions } from "../actions/agree.js";
import { useLocation } from "react-router-dom";

const AgreeContainer = (props) => {
    let query = new URLSearchParams(useLocation().search);
    useEffect(() => {
        props.getPermissions(query.get("appId") || "1");
    }, []);

    console.log('render', props);

    return (
        <Agree appId={props.appId} permissions={props.permissions} />
    );
};

const mapStateToProps = (state) => {
    return {
        permissions: state.agree.permissions,
        loading: state.agree.loading,
        error: state.agree.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getPermissions,
    }, dispatch);
};

AgreeContainer.propTypes = {
    appId: PropTypes.string,
    getPermissions: PropTypes.func.isRequired,
};

AgreeContainer.defautProps = {
    appId: ""
};

export default connect(mapStateToProps, mapDispatchToProps)(AgreeContainer);
