import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../context/UserContext';
import '../style.css';

export default function AppNavbar() {
    const { user } = useContext(UserContext);

    return (
        <Navbar expand="lg" className="logo">
            <Container>
                    <Nav className="nav-bar">
                        <Nav.Link as={NavLink} to="/" exact="true">Home</Nav.Link>
                        {(user.id !== null && user.id !== undefined) ? 
                            user.isAdmin 
                                ?
                                <>
                                    <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                                </>
                                :
                                <>
                                    <Nav.Link as={NavLink} to="/profile" exact="true">Profile</Nav.Link>
                                    <Nav.Link as={NavLink} to="/logout" exact="true">Logout</Nav.Link>
                                </>
                            :
                            <>
                                <Nav.Link as={NavLink} to="/login" exact="true">Login</Nav.Link>
                                <Nav.Link as={NavLink} to="/register" exact="true">Register</Nav.Link>
                            </>
                        }
                    </Nav>
            </Container>
        </Navbar>
    )
}
