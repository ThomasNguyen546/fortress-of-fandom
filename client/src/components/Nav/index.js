import React from 'react';
import { Link } from "react-router-dom";

function Nav(props) {

    return (
        <div class="dropdown">
            <div class="dropbtn">Menu</div>
            <div class="dropdown-content">
                <a href="/about">Homepage</a>
                <a href="/podcast">Podcast</a>
                <a href="/discussion">Discussion</a>
                <a href="/shop">Shop</a>
                {/* <a href="/login">Login</a> */}
            </div>
        </div>


        // <nav class="dropdown">
        //     <ul className="flex-row" class="dropdown">
        //         <div class="dropbtn">Menu</div>
        //         <li className="mx-2" class="dropdown-content">
        //             <Link to="/about">Homepage</Link>
        //         </li>
        //         <li className="mx-2" class="dropdown-content">
        //             <Link to="/podcast">Podcast</Link>
        //         </li>
        //         <li className="mx-2" class="dropdown-content">
        //             <Link to="/discussion">Discussion</Link>
        //         </li>
        //         <li className="mx-2" class="dropdown-content">
        //             <Link to="/shop">Shop</Link>
        //         </li>
        //         <li className="mx-2" class="dropdown-content">
        //             <Link to="/login">Login</Link>
        //         </li>
        //     </ul>
        // </nav>

    );
}

export default Nav;