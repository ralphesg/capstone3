import { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UpdateProduct from '../components/UpdateProduct';
import ArchiveProduct from '../components/ArchiveProduct';

export default function AdminView({ productsData, fetchData }) {


    const [products, setProducts] = useState([])

    useEffect(() => {

        const productsArr = productsData.map(product => {
            return (
                <tr key={product._id}>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td className={product.isActive ? "text-success" : "text-danger"}>
                        {product.isActive ? "Available" : "Unavailable"}
                    </td>
                    <td className="text-center">
                        <UpdateProduct product={product._id} fetchData={fetchData}/>

                    </td>
                </tr>
                )
        })

        setProducts(productsArr)

    }, [productsData])


    return(
        <>
            <h1 className="text-center my-4"> Admin Dashboard</h1>
               <div className="d-flex justify-content-center align-items-center mb-4">
            <Link to={`/addProduct`} className ="btn btn-primary me-2">Add Product</Link>
            <Link to={`/`} className = "btn btn-success">Show Orders</Link>
             </div>
            
            <Table striped bordered hover responsive>
                <thead>
                    <tr className="text-center table-dark">
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Availability</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {products}
                </tbody>
            </Table>    
        </>

        )
}