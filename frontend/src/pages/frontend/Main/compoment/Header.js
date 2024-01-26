// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header.css'; // Import the header styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
function Header() {
    return (
        <header>
            <nav>
                <Link to="/">
                    <h1>Your Logo</h1>
                </Link>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <button>Search</button>
                </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/features">Features</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>

                </ul>
                <button className="login-button">
                    <Link to="/login">
                        <FontAwesomeIcon icon={faSignInAlt} />
                        &nbsp;Login
                    </Link>
                </button>
            </nav>
        </header>
    );
}

export default Header;
