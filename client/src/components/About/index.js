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
                        <h2 class="vintage vintage__top fof">Fortress of Fandom</h2>
                        <h2 class="vintage vintage__bot fof" id="shadow">Fortress of Fandom</h2>
                    </div>
                </div>
                <p id="about-text">
                    Welcome to the Fortress of Fandom Podcast (FoF Pod), where we discuss all things nerdy, geeky, and fandom related! Comics, movies, games, sports, food and so much more! Listen in and enter the Fortress!
                </p>
                <br>
                </br>
            </div>
        </section>
    );
}

export default About;