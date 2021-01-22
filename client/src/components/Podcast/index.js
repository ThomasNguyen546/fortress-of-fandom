import React from 'react';

function Podcast() {
    return (
        <section>
            <div className="page-container">
                <div id="about-header">
                    <div className="section-title">
                        <h2>Fortress of Fandom</h2>
                    </div>
                </div>
                <p id="about-text">
                    This is where we will embed our youtube links for the podcasts. Below is kind of an example where we can put the youtube video in here, and format it into a grid that users 
                    can click on.
                    <br></br>
                    Separate cards with videos in it (implement bootstrap)
                    <br></br>
                    Look into apis that we can update videos dynamically
                    <br></br>
                </p>
                <div class="space"></div>
                <p>
                <iframe class="youtube" width="853" height="480" src="https://www.youtube.com/embed/y73_RpazLVw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

export default Podcast;