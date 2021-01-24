import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';

function Footer() {

    return (
        <footer class="social-footer">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div class="social-footer-icons">
                <ul>
                    <li>
                        <a href="https://www.facebook.com/thefofpod/"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    </li>
                    <li>       
                        <a href="https://www.instagram.com/thefofpod/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    </li>
                    <li>     
                        <a href="https://www.youtube.com/channel/UC_VpQUhi0_WgT9wYNZRj79w"><i class="fa fa-youtube" aria-hidden="true"></i></a>
                    </li>
                </ul>    
            </div>
        </footer>
    );
}

export default Footer;