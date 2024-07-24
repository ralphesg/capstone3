import { useState, useEffect, useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';
import CartToProduct from '../components/CartToProduct'


export default function CartView() {

    const [cart, setCart] = useState([]);
    const [cartUser, setCartUser] = useState([]);
    const {user} = useContext(UserContext);

    const fetchCart = () => {
        let fetchUrl = "http://localhost:4002/b2/cart/get-cart"

        fetch(fetchUrl, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {         

            if(data.message === "No product found"){
                setCart([])
            } else {
                setCart(data.cart.cartItems);
            }
        });
    }

   useEffect(() => {

        fetchCart();

    }, [user]);

       useEffect(() => {

        const cartArr = cart.map(cartItem => {
            return (

                <tr key={cartItem._id}>
                	<CartToProduct cartProductId={cartItem.productId}/>
                    <td>{cartItem.quantity}</td>
                    <td>{'₱'+cartItem.subtotal}</td>
                    
                {/*    <td className="text-center">
                        <UpdateProduct product={product._id} fetchData={fetchData}/>
                        <ArchiveProduct product={product._id} isActive={product.isActive} fetchData={fetchData}/>
                    </td>*/}
                </tr>
                )
        })

        setCartUser(cartArr)

    }, [cart])

    return(
        <>
            <h1 className="text-center my-4">Your Shopping Cart</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr className="text-center table-dark">
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th colSpan="2"></th>
                    </tr>
                </thead>

                <tbody>
                    {cartUser}
                </tbody>
            </Table>    
        </>

        )
}