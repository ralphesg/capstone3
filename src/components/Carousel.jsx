// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Carousel } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import '../style.css';
// import watch2 from '../images/watch2.jpg';
// import phone1 from '../images/phone1.jfif';
// import skin8 from '../images/skin8.jpg';

// function CarouselPage() {
//     return (
        // <div className="full-width-container">
        //     <Carousel id="carouselHome" controls indicators>
        //         <Carousel.Item className="carousel-item">
        //             <img src={watch2} className="d-block w-100 carousel-image" alt="First slide" />
        //             <div className="carousel-caption d-none d-md-block">
        //                <h1 className="carousel-header">Get 5% discount on your first purchase</h1>
        //                <Link className="btn btn-carousel btn-warning" to="/products">SHOP NOW</Link>
        //             </div>
        //         </Carousel.Item>
        //         <Carousel.Item className="carousel-item">
        //             <img src={skin8} className="d-block w-100 carousel-image" alt="Second slide" />
        //             <div className="carousel-caption d-none d-md-block">
        //                <h1 className="carousel-header">Enjoy free-shipping on selected items</h1>
        //                <Link className="btn btn-carousel btn-warning" to="/products">SHOP NOW</Link>
        //             </div>
        //         </Carousel.Item>
        //         <Carousel.Item className="carousel-item">
        //             <img src={phone1} className="d-block w-100 carousel-image" alt="Third slide" />
        //             <div className="carousel-caption d-none d-md-block">
        //                <h1 className="carousel-header">Get your favorite items here</h1>
        //                <Link className="btn btn-carousel btn-warning" to="/products">SHOP NOW</Link>
        //             </div>
        //         </Carousel.Item>
        //     </Carousel>
        // </div>


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style.css';
import watch2 from '../images/watch2.jpg';
import phone1 from '../images/phone1.avif';
import skin8 from '../images/skin8.jpg';

function CarouselPage() {
    return (
        <div className="slide-wrapper">
            <Carousel id="homepage-feature">
                <Carousel.Item className="carousel-item">
                <img src={phone1} className="d-block carousel-image" alt="First slide" />
                    <Carousel.Caption>
                        <h1 className="carousel-header">Get 5% discount on your first purchase</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                <img src={skin8} className="d-block carousel-image" alt="Second slide" />
                    <Carousel.Caption>
                        <h1 className="carousel-header">Enjoy free-shipping on selected items</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                <img src={watch2} className="d-block carousel-image" alt="Third slide" />
                    <Carousel.Caption>
                        <h1 className="carousel-header">Shop your favorite items here</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="red">
                <div className="red-content">
                    <h2 className="py-4"><a href="/products">New Arrivals ></a></h2>
                    <h2 className="py-4"><a href="/products">Top Brands ></a></h2>
                    <h2 className="py-4"><a href="/products">Latest Promos ></a></h2>
                </div>
            </div>

            <div className="my-4 d-flex justify-content-center">
                <Link className="btn btn-carousel btn-warning" to="/products">SHOP NOW</Link>
            </div>
        </div>
    );
}

export default CarouselPage;

