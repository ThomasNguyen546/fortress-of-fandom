import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import tshirtImg from '../../assets/ring-t.png'
import tshirt2Img from '../../assets/classic-t.png'
import coozyImg from '../../assets/can-coozy.png'

function Shop() {
    return (
        <div className="page-container">
            <div className="shopTitle">
                <h2 className="shop-title">Visit Fortress of Fandom Store!</h2>
                <div className="shopButton">
                    <Button className="btn-lg btn-block" href="https://storefrontier.com/thefofpod" target="_blank" variant="success">Visit Store!</Button>
                </div>
                <p>
                    Notes: option to go directly to product, make shop button prominent with colors, good use of header tags, maybe description with price.
                    <br></br>
                    add button in homepage that goes directly to store (call to action). Favicon icon (shopping cart) (fontawesome?)
                </p>
            </div>
            <Carousel class="carousel">
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100" class="carouselImg"
                        src={tshirtImg}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100" class="carouselImg"
                        src={tshirt2Img}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100" class="carouselImg"
                        src={coozyImg}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Shop;