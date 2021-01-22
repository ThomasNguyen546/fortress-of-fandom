import React from 'react';
import { Link } from "react-router-dom";

function Nav(props) {

    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <Link to="/about">Homepage</Link>
                </li>
                <li className="mx-2">
                    <Link to="/podcast">Podcast</Link>
                </li>
                <li className="mx-2">
                    <Link to="/discussion">Discussion</Link>
                </li>
                <li className="mx-2">
                    <Link to="/shop">Shop</Link>
                </li>
            </ul>
        </nav>

    );
}

export default Nav;