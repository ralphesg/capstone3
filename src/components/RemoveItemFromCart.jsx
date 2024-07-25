 import React from 'react';
 import { Button } from 'react-bootstrap';
 import Swal from 'sweetalert2';

 export default function RemoveItemFromCart({ cartProductId, fetchCart }) {

     const removeToggle = async () => {
         try {
             const response = await fetch(`http://localhost:4002/b2/cart/${cartProductId}/remove-from-cart`, {
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

             if (data.message === "Item removed from cart successfully") {
                 Swal.fire({
                     title: 'Success',
                     icon: 'success',
                     text: 'Item removed from cart successfully'
                 });
                 fetchCart();
             } else {
                 Swal.fire({
                     title: 'Something Went Wrong',
                     icon: 'error',
                     text: 'Please Try again'
                 });
             }

         } catch (error) {
             console.error("Error:", error);
             Swal.fire({
                 title: 'Error',
                 icon: 'error',
                 text: 'Failed to remove product. Please try again later.'
             });
         }
     }

     return (
         <Button variant="danger" size="sm" onClick={removeToggle}>Remove</Button>
     )
 }
