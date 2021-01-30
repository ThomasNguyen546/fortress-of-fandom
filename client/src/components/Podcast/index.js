import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';

function Podcast() {
  return (
    <section>
      <div className="page-container">
        <div id="about-header">
          <div className="section-title" class="vintage__container">
            <h2 class="vintage vintage__top">FoF Podcasts</h2>
            <h2 class="vintage vintage__bot">FoF Podcasts</h2>
          </div>
        </div>
        <div class="space"></div>
        <p>
          <CardDeck>
            <Card class="card">
              <iframe src="https://open.spotify.com/embed-podcast/episode/2FjfquutWHe5pkFYfIpHQD" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              <Card.Body className="cardBodyStyle">
                <Card.Title>Ep.48!! Last of Us 2!! Batwoman!! WW84!! feat. Nathan Johnson!!</Card.Title>
                <Card.Text>
                  What's up all you fabulous FoFers! We are back with a brand new wrap and
                  this time we are talking about The Last of Us 2, CW's Batwoman, Ww84
                  along with soooo many tangents alongside this week's co-host, Nathan!!
                        </Card.Text>
              </Card.Body>
            </Card>
            <Card class="card">
              <iframe src="https://open.spotify.com/embed-podcast/episode/3YD6CUNHD0eKpXryJf332A" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              <Card.Body className="cardBodyStyle">
                <Card.Title>Ep.47!! 2020 July-September movie speculation!! ft. That Guy Ralf!!</Card.Title>
                <Card.Text>
                  2020 is halfway over and with that comes a new quarter with new movies!
                  That Guy Ralf and I discuss some upcoming flicks that you might be
                  interested in seeing.
                        </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
          <CardDeck>  
            <Card class="card">
              <iframe src="https://open.spotify.com/embed-podcast/episode/51P3LAS7ZzJVJ3yGPD0SGC" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              <Card.Body className="cardBodyStyle">
                <Card.Title>Ep.46!! Who you gonna call?? Ghostbusters!! ft. Jazmine</Card.Title>
                <Card.Text>
                  This is an episode of biblical proportions. What do we mean, "biblical"?
                          <br></br>
                          Interesting tidbits, fun facts, rumors, favorite quotes, dogs and cats
                          living togther... mass hysteria!! We talk about all of the Ghostbusters
                          movies (yes, even the 2016 one...) and how they have influenced us. We
                          also spctulate about the upcoming third installment to the originals!
                        </Card.Text>
              </Card.Body>
            </Card>
            <Card class="card">
              <iframe src="https://open.spotify.com/embed-podcast/episode/223gkbLjCr7NdeMgxy2pBD" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              <Card.Body className="cardBodyStyle">
                <Card.Title>Ep.45!! Avatar news!! Bill and Ted!! Fantastic 4 Fancasting!! ft. Ryan Jeffery</Card.Title>
                <Card.Text>
                  Welcome back to the Fortress of Fandom Podcast! In this episode, we are
                  discussing some news about the FOUR Avatar sequels which have resumed
                  filming, the teaser trailer for Bill and Ted Face the Music, and we Fancast
                  Marvel's first family!
                        </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </p>
        <br>
        </br>

      </div>
    </section>
  );
}

export default Podcast;