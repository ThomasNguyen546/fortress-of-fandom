import React from 'react';
import logoImg from '../../assets/logo.png'

function About() {
    return (
        <section>
            <div className="page-container">
                <div id="about-header">
                    <img src={logoImg} width="250" height="300" alt="Fortress of fandom logo" />
                    <div className="section-title">
                        <h2>Fortress of Fandom</h2>
                    </div>
                </div>
                <p id="about-text">
                    Welcome to the Fortress of Fandom Podcast (FoF Pod), where we discuss all things nerdy, geeky, and fandom related! Comics, movies, games, sports, food and so much more! Listen in and enter the Fortress!
                    <br></br>
                    Embedded video of podcast?
                    <br></br>
                    Hero images
                    <br></br>
                    Icon for links at footer (include store link)
                    <div class="space"></div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
                <br>
                </br>
                <p id="about-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </section>
    );
}

export default About;