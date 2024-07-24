import { useState, useEffect, useContext } from 'react';

export default function CartToProduct({cartProductId}) { 

	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);

useEffect(() => {
		
		fetch(`http://localhost:4002/b2/products/${cartProductId}`)
		.then(res => res.json())
		.then(data => {

			setName(data.product.name);
			setPrice(data.product.price);
			
		})

	}, [cartProductId]);

return(
	<>
  	<td>{name}</td>
  	<td>₱{price}</td>
  	</>
    )
}