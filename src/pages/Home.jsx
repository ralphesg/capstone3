import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {


    return (
        <Row>
            <Col className="text-center mx-auto">
                <h1>Welcome to E-Commerce App</h1>
                <p>Shop your favorite items here</p>
                <Link className="btn btn-primary" to={"/products"}>See all products</Link>
            </Col>
        </Row>
    )
}