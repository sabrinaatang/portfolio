import React from "react";
import { Link } from "react-router-dom";
import "../styling/Navbar.css";

function Navbar() {
    return (
        <div className="bar">
            <nav>
                <ul>
                    <li><Link to="/">Portfolio</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/photography">Photography</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;