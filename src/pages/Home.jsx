import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CarouselPage from '../components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (

        // <Container fluid className="vh-100">
        //     <CarouselPage />
        // </Container>

                    <CarouselPage />
    );
}

