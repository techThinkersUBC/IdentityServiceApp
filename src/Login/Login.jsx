import React from 'react';
import {
    useLocation
} from 'react-router-dom';
import './Login.css';
import SignInModal from './LoginModal.jsx';

const Home = () => {
    let query = new URLSearchParams(useLocation().search);
    return (
        <div className="Home">
            <SignInModal appId={query.get("appId") || "1"} />
        </div>
    );
};

export default Home;
