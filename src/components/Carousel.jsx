import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style.css';
import watch2 from '../images/watch2.jpg';
import phone1 from '../images/phone1.jfif';
import skin8 from '../images/skin8.jpg';

function CarouselPage() {
    return (
        <div className="full-width-container">
            <Carousel id="carouselHome" controls indicators>
                <Carousel.Item className="carousel-item">
                    <img src={watch2} className="d-block w-100 carousel-image" alt="First slide" />
                    <div className="carousel-caption d-none d-md-block">
                       <h1 className="carousel-header">Get 5% discount on your first purchase</h1>
                       <Link className="btn btn-carousel btn-warning" to="/products">SHOP NOW</Link>
                    </div>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img src={skin8} className="d-block w-100 carousel-image" alt="Second slide" />
                    <div className="carousel-caption d-none d-md-block">
                       <h1 className="carousel-header">Enjoy free-shipping on selected items</h1>
                       <Link className="btn btn-carousel btn-warning" to="/products">SHOP NOW</Link>
                    </div>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <img src={phone1} className="d-block w-100 carousel-image" alt="Third slide" />
                    <div className="carousel-caption d-none d-md-block">
                       <h1 className="carousel-header">Get your favorite items here</h1>
                       <Link className="btn btn-carousel btn-warning" to="/products">SHOP NOW</Link>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselPage;
