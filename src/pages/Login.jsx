import { useState, useEffect, useContext } from 'react';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import { useNavigate, Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../context/UserContext';
import '../style.css';

export default function Login() {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate(); 

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isActive, setIsActive] = useState(true);

    function authenticate(e) {
        e.preventDefault();
        fetch('https://capstone2-weuf.onrender.com/b2/users/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.access !== undefined){
                localStorage.setItem('token', data.access);
                retrieveUserDetails(data.access);
                setEmail('');
                setPassword('');
                Swal.fire({
                    title: "Login Successful",
                    icon: "success",
                    text: "You are now logged in.",
                    customClass: {
                        confirmButton: 'sweet-warning'
                    },
                });
            } else if (data.error === "Email and password do not match") {
                Swal.fire({
                    title: "Login Failed",
                    icon: "error",
                    text: "Incorrect email or password.",
                    customClass: {
                        confirmButton: 'sweet-warning'
                    }
                });
            } else {
                Swal.fire({
                    title: "User Not Found",
                    icon: "error",
                    text: `${email} does not exist.`,
                    customClass: {
                        confirmButton: 'sweet-warning'
                    }
                });
            }
        });
    }

    function retrieveUserDetails(token){
        fetch('https://capstone2-weuf.onrender.com/b2/users/details', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setUser({
                id: data.user._id,
                isAdmin: data.user.isAdmin
            });
        });
    }

    useEffect(() => {
        if(email !== '' && password !== ''){
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [email, password]);

    return (    
        (user.id !== null && user.id !== undefined) ?
        <Navigate to="/" />
        :
        <div className="login-container">
            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Form onSubmit={(e) => authenticate(e)} className="login-form">
                            <h2 className="text-center">Login</h2>
                            <Form.Group>
                                <Form.Label>Email address </Form.Label>
                                <Form.Control 
                                    id="loginEmail"
                                    type="email" 
                                    placeholder="Enter email" 
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Password </Form.Label>
                                <Form.Control 
                                    id="loginPassword"
                                    type="password" 
                                    placeholder="Password" 
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>

                            { isActive ? 
                                <Button className="btn" variant="primary" type="submit" id="loginBtn">
                                    Login
                                </Button>
                                : 
                                <Button className="btn" variant="danger" type="submit" id="loginBtn" disabled>
                                    Login
                                </Button>
                            }
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
