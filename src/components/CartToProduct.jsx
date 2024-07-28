import { useState, useEffect, useContext } from 'react';
import { Container, Card, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

export default function CartToProduct({cartProductId, keyOrder, productQuantity}) { 

	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);

useEffect(() => {
		
		fetch(`http://ec2-13-59-17-101.us-east-2.compute.amazonaws.com/b2/products/${cartProductId}`)
		.then(res => res.json())
		.then(data => {

			setName(data.product.name);
			setPrice(data.product.price);
			
		})

	}, [cartProductId]);

return(
	(keyOrder === "key")
     ?
    <ListGroupItem>{name} - Quantity: {productQuantity}</ListGroupItem>
     :
	<>
  	<td>{name}</td>
  	<td>₱{price}</td>
  	</>
    )
}