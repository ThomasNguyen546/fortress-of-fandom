import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';

// images for Footer
import spotifyImage from "../../assets/spotify.png"
import applePodcastImage from "../../assets/apple_podcast.png"
import youtubeImage from "../../assets/youtubeIcon.png"
import facebookImage from "../../assets/facebookIcon.png"
import instagramImage from "../../assets/InstragramIcon.jpg"
import twitterImage from "../../assets/twitter.jpg"
import shopImage from "../../assets/shop-icon.png"

function Footer() {

    return (
        <footer>
            <div className="social-links">
            <a href="https://www.facebook.com/thefofpod/" target="_blank" rel="noopener noreferrer">
                <img class="footerImage" src={facebookImage} alt="facebook-logo" />
            </a>
            <a href="https://www.instagram.com/thefofpod/" target="_blank" rel="noopener noreferrer">
                <img class="footerImage" src={instagramImage} alt="instagram-logo"/>
            </a>
            <a href="https://www.youtube.com/channel/UC_VpQUhi0_WgT9wYNZRj79w" target="_blank" class="footerImage" rel="noopener noreferrer">
                <img class="footerImage" src={youtubeImage} alt="youtube-logo"/>
            </a>
            <a href="https://podcasts.apple.com/us/podcast/fortress-of-fandom/id1432187277" target="_blank" class="footerImage" rel="noopener noreferrer">
                <img class="footerImage" src={applePodcastImage} alt="applepodcast-logo"/>
            </a>
            <a href="https://open.spotify.com/show/604nILqjUfpUi3zVVXXNUT?si=5T--tY_zR2KSOvVOBVRzMw" target="_blank" class="footerImage" rel="noopener noreferrer">
                <img class="footerImage" src={spotifyImage} alt="spotify-logo"/>
            </a>
            <a href="https://twitter.com/theFoFpod" target="_blank" class="footerImage" rel="noopener noreferrer">
                <img class="footerImage" src={twitterImage} alt="spotify-logo"/>
            </a>
            <a href="https://storefrontier.com/thefofpod" target="_blank" class="footerImage" rel="noopener noreferrer">
                <img class="footerImage" src={shopImage} alt="shop-logo"/>
            </a>
            </div>
        </footer>
    )
}

export default Footer

// function Footer() {

//     return (
//         <footer class="social-footer">
//             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
//             <div class="social-footer-icons">
//                 <ul>
//                     <li>
//                         <a href="https://www.facebook.com/thefofpod/"><i class="fa fa-facebook" aria-hidden="true"></i></a>
//                     </li>
//                     <li>       
//                         <a href="https://www.instagram.com/thefofpod/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
//                     </li>
//                     <li>     
//                         <a href="https://www.youtube.com/channel/UC_VpQUhi0_WgT9wYNZRj79w"><i class="fa fa-youtube" aria-hidden="true"></i></a>
//                     </li>
//                 </ul>    
//             </div>
//         </footer>
//     );
// }

// export default Footer;