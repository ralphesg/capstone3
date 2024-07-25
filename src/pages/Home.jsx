// import { Row, Col, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import CarouselPage from '../components/Carousel';

// export default function Home() {
//     return (
//         <Container fluid className="vh-100">
//             <CarouselPage />
//             <Row className="vh-100 justify-content-center align-items-center">
//                 <Col xs={10} sm={8} md={6} lg={12} className="text-center">
//                     <h1>Welcome to E-Commerce App</h1>
//                     <p>Shop your favorite items here</p>
//                     <Link className="btn btn-primary" to={"/products"}>See all products</Link>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CarouselPage from '../components/Carousel';

export default function Home() {
    return (
        <Container fluid className="vh-100">
            <CarouselPage />
        </Container>
    );
}

