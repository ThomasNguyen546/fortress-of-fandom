import React from 'react';
import { Link } from "react-router-dom";

function Nav(props) {

    return (
        // <div class="dropdown">
        //     <button class="dropbtn">Menu</button>
        //     <div class="dropdown-content">
        //         <a href="/about">Homepage</a>
        //         <a href="/podcast">Podcast</a>
        //         <a href="/discussion">Discussion</a>
        //         <a href="/shop">Shop</a>
        //         <a href="/login">Login</a>
        //     </div>
        // </div>


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
                <li className="mx-2">
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>

    );
}

export default Nav;