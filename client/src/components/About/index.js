import React from 'react';
import logoImg from '../../assets/logo.png'


function About() {
    return (
        <section>
            <div className="page-container">
                <div id="about-header">
                    <img src={logoImg} width="250" height="300" alt="Fortress of fandom logo" />
                    <br></br>
                    <div className="section-title" class="vintage__container">
                        <h2 class="vintage vintage__top">Fortress of Fandom</h2>
                        <h2 class="vintage vintage__bot">Fortress of Fandom</h2>
                    </div>
                </div>
                <p id="about-text">
                    Welcome to the Fortress of Fandom Podcast (FoF Pod), where we discuss all things nerdy, geeky, and fandom related! Comics, movies, games, sports, food and so much more! Listen in and enter the Fortress!
                </p>
                <br>
                </br>
                <p id="about-text">
                    Here in The Fortress of Fandom, the host, Garrett, and his many cohorts of co-hosts and guests discuss the many fandoms found throughout the galaxies and multi-verses! From Marvel, to DC, to Star Wars, to Star Trek, to Middle Earth, to Fuchsia City, to Cybertron and so much more!!
                </p>
                <p id="about-text">
                    Fandoms are meant to be talked and discussed about, and ultimately shared with your friends! So tune in, and then let us know what you think! Tell us what other fandoms we should cover, tell your friends about us and keep The Fortress growing strong! Be sure to join us on all the different social-media sites to stay informed and in the know!
                </p>
                <p id="about-text">
                    Because knowing is half the battle!</p>
            </div>
        </section>
    );
}

export default About;