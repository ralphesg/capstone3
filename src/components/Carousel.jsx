import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style.css';
import watch2 from '../images/watch2.jpg';
import phone1 from '../images/phone1.jfif';
import skin8 from '../images/skin8.jpg';
import skin2 from '../images/skin2.jpg';
import watch1 from '../images/watch1.jpg';

function CarouselPage() {
    return (
        <Carousel id="carouselHome">
            <Carousel.Item className="carousel-item active">
                <img src={watch2} style={{height:'90vh'}} className="d-block w-100" alt="First slide" />
                <div class="carousel-caption d-none d-md-block">
                   <h1 className="carousel-header">Shop your favorite items here</h1>
                   <Link className="btn btn-primary" to={"/products"}>See all products</Link>
                </div>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <img src={phone1} style={{height:'90vh'} } className="d-block w-100" alt="Second slide" />
                <div class="carousel-caption d-none d-md-block">
                   <h1 className="carousel-header">Get 5% discount on your first purchase</h1>
                   <Link className="btn btn-primary" to={"/products"}>See all products</Link>
                </div>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <img src={skin8} style={{height:'90vh'}} className="d-block w-100" alt="Third slide" />
                <div class="carousel-caption d-none d-md-block">
                   <h1 className="carousel-header">Enjoy free-shipping on selected items</h1>
                   <Link className="btn btn-primary" to={"/products"}>See all products</Link>
                </div>
            </Carousel.Item>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselHome" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselHome" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
        </Carousel>
    );
}

export default CarouselPage;
