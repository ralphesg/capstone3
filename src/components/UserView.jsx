import { useEffect, useState } from 'react';
import { Button, CardGroup, Card, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function UserView({productsData}) {

    return (
    	 (productsData.length < 0 ) ?
            <p>No active products available.</p>
            :
        <Container>
            
            <Row className="mt-4">
            <h1 className="page-title text-center mt-5">Our Products</h1>
            <CardGroup>
                {productsData.map(product => (
                    <Col key={product._id} xs={12} sm={6} md={4} lg={3}>
                        <Card className ="m-3">
                            <Card.Body>
                                <Card.Title className="custom-card-title">{product.name}</Card.Title>
                                <Card.Text className="custom-card-description">{product.description}</Card.Text>
                                <Card.Text className="custom-card-price">₱{product.price}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            	<Link to={`/products/${product._id}`} className="btn btn-primary w-100">Details</Link>
	            				</Card.Footer>
                        </Card>
                      
                    </Col>

                ))}
                </CardGroup>
            </Row>
        </Container>
    );
}