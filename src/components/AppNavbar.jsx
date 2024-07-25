import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import UserContext from '../context/UserContext';
import '../style.css';



export default function AppNavbar() {
    const { user } = useContext(UserContext);



    return (
        <Navbar expand="lg" className="logo">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
                    </Nav>
                    <Nav>
                        {user.id !== null && user.id !== undefined ? (
                            user.isAdmin ? (
                                <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                            ) : (
                                <>
                                    <Nav.Link as={NavLink} to="/cart">Cart</Nav.Link>
                                    <Nav.Link as={NavLink} to="/order">Orders</Nav.Link>
                                    <Nav.Link as={NavLink} to="/logout">Logout</Nav.Link>
                                </>
                            )
                        ) : (
                            <>
                                <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                                <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}
