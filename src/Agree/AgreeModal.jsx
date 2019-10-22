import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../assets/hsbc-logo.svg';

const AgreeModal = (props) => {
    if (!props.permissions) return null;

    const {
        permissions: {
            name,
            endpoints,
        }
    } = props;

    return (
        <div className="AgreeModal">
            <div className="AgreeModaInner">
                <img className="AgreeModalImage" src={logo}/>
                <div className="AgreeModalTitle"><b>{name}</b> is requesting the following permissions.</div>
                <li className="AgreeModalList">
                    {endpoints.map(endpoint => (
                        <div className="AgreeModalListOption">{endpoint.permissionDescription}</div>
                    ))}
                </li>
                <Link className="AgreeModalLink" to={`/agree?appId=${props.appId}`}>
                    <button className="AgreeModalButton">Accept ></button>
                </Link>
            </div>
        </div>
    );
};

AgreeModal.propTypes = {
    appId: PropTypes.string,
    permissions: PropTypes.shape({
        name: PropTypes.string,
        endpoints: PropTypes.array,
    }),
};

AgreeModal.defautProps = {
    appId: "",
    permissions: {
        name: "",
        endpoints: [],
    },
};

export default AgreeModal;
