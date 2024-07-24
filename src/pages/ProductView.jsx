import { useState, useEffect, useContext } from 'react';
import { Container, Card, Button, Row, Col, InputGroup, FormControl  } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';

export default function ProductView(){

	const { productId } = useParams();
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState("");
	const [quantity, setQuantity] = useState(1);


	useEffect(() => {
		

		fetch(`http://localhost:4002/b2/products/${productId}`)
		.then(res => res.json())
		.then(data => {

			setName(data.product.name);
			setPrice(data.product.price);
			setDescription(data.product.description);
		})

	}, [productId]);

	    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
        
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
            
        }
    };

	return(
        <Container className="mt-5">
            <Row>
                <Col>
                    <Card >
                        <Card.Body className="p-0">
                            <Card.Title className="text-center bg-dark text-white p-2">{name}</Card.Title>
                            <Card.Text className="m-2">{description}</Card.Text>
             				<Card.Text>
    							<span className="custom-price ms-2">Price: </span>
    							<span className="custom-card-price">₱{price}</span>
							</Card.Text>
							<Card.Text className="m-2">Quantity</Card.Text>
							   <InputGroup className="ms-3 mb-3">
                                <Button variant="btn btn-dark" onClick={decrementQuantity}>-</Button>
                                <FormControl
                                    aria-label="Quantity"
                                    aria-describedby="basic-addon1"
                                    value={quantity}
                                    readOnly
                                    className="text-center form-control"
                                    style={{ maxWidth: '5em' }}
                                />
                                <Button variant="btn btn-dark" onClick={incrementQuantity}>+</Button>
                            </InputGroup>
                            <Card.Footer>
                            <Button variant="primary" block="true" onClick={() => addToCart(productId)}>Add to Cart</Button>
                            </Card.Footer>
                        </Card.Body>        
                    </Card>
                </Col>
            </Row>
        </Container>
    )

}