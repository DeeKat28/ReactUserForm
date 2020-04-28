import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="fixed-header">
            <h1>Platform</h1>
            <div className="panel">
                <nav className="nav-container">
                    <h1><Link to="/">Home</Link></h1>
                    <h1><Link to="/MyForm">Test Eligibility</Link></h1>
                    <h1><Link to="/About">About Us</Link></h1>
                </nav>
            </div>
        </div>
    );
}

export default Header;