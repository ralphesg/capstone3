import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
import '../style.css';

export default function ClearCart({ fetchCart }) {

    const clearCart = async () => {
        try {
            const response = await fetch('http://localhost:4002/b2/cart/clear-cart', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);

            if (data.message === "Cart cleared successfully") {
                Swal.fire({
                    title: 'Success',
                    icon: 'success',
                    text: 'Cart cleared successfully',
                    customClass: {
                        confirmButton: 'sweet-warning'
                    }
                });
                fetchCart(); // Refresh the cart data
            } else {
                Swal.fire({
                    title: 'Something Went Wrong',
                    icon: 'error',
                    text: 'Please try again',
                    customClass: {
                        confirmButton: 'sweet-warning'
                    }
                });
            }

        } catch (error) {
            console.error("Error:", error);
            Swal.fire({
                title: 'Error',
                icon: 'error',
                text: 'Failed to clear cart. Please try again later.',
                customClass: {
                    confirmButton: 'sweet-warning'
                }
            });
        }
    }

    return (
        <>
        <Container className="d-flex">
            <Row>
                <Col>
                <Button className="btn" variant="danger" size="sm" onClick={clearCart}>Clear Cart</Button>
                </Col>
            </Row>
        </Container>
        </>
    )
}
