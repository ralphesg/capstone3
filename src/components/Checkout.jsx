import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import '../style.css';

export default function Checkout({fetchCart}) {

	const navigate = useNavigate();

    const checkOut = async (product) => {
        try {
            const response = await fetch(`http://localhost:4002/b2/orders/checkout`, {
                method: 'POST',
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

            if (data.message === "Ordered Successfully") {
                Swal.fire({
                    title: 'Order Success',
                    icon: 'success',
                    customClass: {
                        confirmButton: 'sweet-warning'
                    }
                });

                navigate("/order");

            } else {
                Swal.fire({
                    title: 'Something Went Wrong',
                    icon: 'error',
                    text: 'Please Try again',
                    customClass: {
                        confirmButton: 'sweet-warning'
                    }
                });
            }
          fetchCart();
        } catch (error) {
            console.error("Error:", error);
            Swal.fire({
                title: 'Error',
                icon: 'error',
                text: 'Failed to Order products. Please try again later.',
                    customClass: {
                        confirmButton: 'sweet-warning'
                    }
            });
        }
    }


    return (

                <Button variant="success" size="sm" onClick={() => checkOut()}>Checkout</Button>
                
    )
}
