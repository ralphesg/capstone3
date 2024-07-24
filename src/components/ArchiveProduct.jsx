import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function ArchiveProduct({ product, isActive, fetchData }) {

    const archiveToggle = async (product) => {
        try {
            const response = await fetch(`http://localhost:4002/b2/products/${product}/archive`, {
                method: 'PATCH',
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

            if (data.message === "Product archived successfully") {
                Swal.fire({
                    title: 'Success',
                    icon: 'success',
                    text: 'Product successfully disabled'
                });
            } else {
                Swal.fire({
                    title: 'Something Went Wrong',
                    icon: 'error',
                    text: 'Please Try again'
                });
            }
            fetchData();
        } catch (error) {
            console.error("Error:", error);
            Swal.fire({
                title: 'Error',
                icon: 'error',
                text: 'Failed to archive product. Please try again later.'
            });
        }
    }

    const activateToggle = async (product) => {
        try {
            const response = await fetch(`http://localhost:4002/b2/products/${product}/activate`, {
                method: 'PATCH',
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

            if (data.message === "Product activated successfully") {
                Swal.fire({
                    title: 'Success',
                    icon: 'success',
                    text: 'Product successfully enabled'
                });
            } else {
                Swal.fire({
                    title: 'Something Went Wrong',
                    icon: 'error',
                    text: 'Please Try again'
                });
            }
            fetchData();
        } catch (error) {
            console.error("Error:", error);
            Swal.fire({
                title: 'Error',
                icon: 'error',
                text: 'Failed to activate product. Please try again later.'
            });
        }
    }

    return (
        <>
            {isActive ?
                <Button variant="danger" size="sm" onClick={() => archiveToggle(product)}>Archive</Button>
                :
                <Button variant="success" size="sm" onClick={() => activateToggle(product)}>Activate</Button>
            }
        </>
    )
}
