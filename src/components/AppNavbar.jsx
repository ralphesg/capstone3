// import React, { useContext } from 'react';
// import { Navbar, Nav, Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
// import { Link, NavLink } from 'react-router-dom';
// import UserContext from '../context/UserContext';
// import { CgProfile } from "react-icons/cg";
// import { IoHomeOutline } from "react-icons/io5";
// import { PiTShirtDuotone } from "react-icons/pi";
// import { BsCart3 } from "react-icons/bs";
// import { LuLogOut } from "react-icons/lu";
// import { MdOutlineBorderColor } from "react-icons/md";
// import { RiLoginBoxLine } from "react-icons/ri";
// import { LuClipboardList } from "react-icons/lu";
// import logo from '../images/logo.png';
// import '../style.css';

// export default function AppNavbar() {
//     const { user } = useContext(UserContext);

//     const renderTooltip = (text) => (
//         <Tooltip id={`tooltip-${text}`}>
//             {text}
//         </Tooltip>
//     );

//     return (
//         <Navbar expand="lg" className="nav">
//             <Container>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" className="navToggle" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="me-auto">
//                         <OverlayTrigger placement="bottom" overlay={renderTooltip('Home')}>
//                             <Nav.Link className="navlink-home" as={NavLink} to="/"><IoHomeOutline /> Home</Nav.Link>
//                         </OverlayTrigger>
//                         <OverlayTrigger placement="bottom" overlay={renderTooltip('Products')}>
//                             <Nav.Link className="navlink-products" as={NavLink} to="/products"><PiTShirtDuotone /> Products</Nav.Link>
//                         </OverlayTrigger>
//                         <OverlayTrigger placement="bottom" overlay={renderTooltip('Profile')}>
//                             <Nav.Link className="navlink-profile" as={NavLink} to="/profile"><CgProfile /> Profile</Nav.Link>
//                         </OverlayTrigger>

//                         {user && user.id !== null && user.id !== undefined ? (
//                             user.isAdmin ? (
//                                 <OverlayTrigger placement="bottom" overlay={renderTooltip('Logout')}>
//                                     <Nav.Link className="navlink-logout" as={Link} to="/logout"><LuLogOut /> Logout</Nav.Link>
//                                 </OverlayTrigger>
//                             ) : (
//                                 <>
//                                     <OverlayTrigger placement="bottom" overlay={renderTooltip('Cart')}>
//                                         <Nav.Link className="navlink-cart" as={NavLink} to="/cart"><BsCart3 /> Cart</Nav.Link>
//                                     </OverlayTrigger>
//                                     <OverlayTrigger placement="bottom" overlay={renderTooltip('Order')}>
//                                         <Nav.Link className="navlink-order" as={NavLink} to="/order"><LuClipboardList /> Order</Nav.Link>
//                                     </OverlayTrigger>
//                                     <OverlayTrigger placement="bottom" overlay={renderTooltip('Logout')}>
//                                         <Nav.Link className="navlink-logout" as={NavLink} to="/logout"><LuLogOut /> Logout</Nav.Link>
//                                     </OverlayTrigger>
//                                 </>
//                             )
//                         ) : (
//                             <>
//                                 <OverlayTrigger placement="bottom" overlay={renderTooltip('Login')}>
//                                     <Nav.Link className="navlink-login" as={NavLink} to="/login"><RiLoginBoxLine /> Login</Nav.Link>
//                                 </OverlayTrigger>
//                                 <OverlayTrigger placement="bottom" overlay={renderTooltip('Register')}>
//                                     <Nav.Link className="navlink-register" as={NavLink} to="/register"><MdOutlineBorderColor /> Register</Nav.Link>
//                                 </OverlayTrigger>
//                             </>
//                         )}
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// import React, { useContext } from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link, NavLink } from 'react-router-dom';
// import UserContext from '../context/UserContext';
// import { CgProfile } from "react-icons/cg";
// import { IoHomeOutline } from "react-icons/io5";
// import { PiTShirtDuotone } from "react-icons/pi";
// import { BsCart3 } from "react-icons/bs";
// import { LuLogOut } from "react-icons/lu";
// import { MdOutlineBorderColor } from "react-icons/md";
// import { RiLoginBoxLine } from "react-icons/ri";
// import { LuClipboardList } from "react-icons/lu";
// import logo from '../images/logo.png';
// import '../style.css';

// export default function AppNavbar() {
//     const { user } = useContext(UserContext);

//     return (
//         <Navbar expand="lg" className="nav">
//             <Container>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" className="navToggle" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="me-auto">
//                         <Nav.Link as={NavLink} to="/"><IoHomeOutline /> Home</Nav.Link>
//                         <Nav.Link as={NavLink} to="/products"><PiTShirtDuotone /> Products</Nav.Link>

//                         {user && user.id !== null && user.id !== undefined ? (
//                             user.isAdmin ? (       
//                                 <Nav.Link as={Link} to="/logout"><LuLogOut /> Logout</Nav.Link>
//                             ) : (
//                                 <>  
//                                     <Nav.Link as={NavLink} to="/profile"><CgProfile /> Profile</Nav.Link>
//                                     <Nav.Link as={NavLink} to="/cart"><BsCart3 /> Cart</Nav.Link>
//                                     <Nav.Link as={NavLink} to="/order"><LuClipboardList /> Order</Nav.Link>
//                                     <Nav.Link as={NavLink} to="/logout"><LuLogOut /> Logout</Nav.Link>
//                                 </>
//                             )
//                         ) : (
//                             <>
//                                 <Nav.Link as={NavLink} to="/login"><RiLoginBoxLine /> Login</Nav.Link>
//                                 <Nav.Link as={NavLink} to="/register"><MdOutlineBorderColor /> Register</Nav.Link>
//                             </>
//                         )}
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }


import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { CgProfile } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { PiTShirtDuotone } from "react-icons/pi";
import { BsCart3 } from "react-icons/bs";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineBorderColor } from "react-icons/md";
import { RiLoginBoxLine } from "react-icons/ri";
import { LuClipboardList } from "react-icons/lu";
import logo from '../images/logo.png'; 
import '../style.css';

export default function AppNavbar() {
    const { user } = useContext(UserContext);

    return (
        <Navbar expand="lg" className="nav">
            <Container className="container-navbar">
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={logo}
                        width="120"
                        height="28"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navToggle" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/"><IoHomeOutline /> Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/products"><PiTShirtDuotone /> Products</Nav.Link>

                        {user && user.id !== null && user.id !== undefined ? (
                            user.isAdmin ? (       
                                <Nav.Link as={Link} to="/logout"><LuLogOut /> Logout</Nav.Link>
                            ) : (
                                <>  
                                    <Nav.Link as={NavLink} to="/profile"><CgProfile /> Profile</Nav.Link>
                                    <Nav.Link as={NavLink} to="/cart"><BsCart3 /> Cart</Nav.Link>
                                    <Nav.Link as={NavLink} to="/order"><LuClipboardList /> Order</Nav.Link>
                                    <Nav.Link as={NavLink} to="/logout"><LuLogOut /> Logout</Nav.Link>
                                </>
                            )
                        ) : (
                            <>
                                <Nav.Link as={NavLink} to="/login"><RiLoginBoxLine /> Login</Nav.Link>
                                <Nav.Link as={NavLink} to="/register"><MdOutlineBorderColor /> Register</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

