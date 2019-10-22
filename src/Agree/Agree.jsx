import React from 'react';
import PropTypes from 'prop-types';
import './Agree.css';
import AgreeModal from './AgreeModal.jsx';

const Agree = (props) => (
    <div className="Agree">
        <AgreeModal permissions={props.permissions} />
    </div>
);

Agree.propTypes = {
    appId: PropTypes.string,
    permissions: PropTypes.shape({
        name: PropTypes.string,
        endpoints: PropTypes.array,
    }),
};

export default Agree;
