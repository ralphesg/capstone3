import { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../context/UserContext';
import '../style.css';

export default function Login() {

    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate(); 

    // State hooks to store the values of the input fields
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // State to determine whether submit button is enabled or not
    const [isActive, setIsActive] = useState(true);


    function authenticate(e) {

        // Prevents page redirection via form submission
        e.preventDefault();
        fetch('http://localhost:4002/b2/users/login', {
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

                console.log(data.access);
                // Set the token of the authenticated user in the local storage
                /*
                Syntax:
                    localStorage.setItem('propertyName', value)
                */
                // allows us to manipulate the browser's localStorage property to store information indefinitely to help demonstrate conditional rendering and the login and logout features
                localStorage.setItem('token', data.access);
                retrieveUserDetails(data.access);
                // Clear input fields after submission
                setEmail('');
                setPassword('');

                Swal.fire({
                    title: "Login Successful",
                    icon: "success",
                    text: "You are now logged in."
                }).then(() => {
                    navigate('/');
                });
            
            } else if (data.message == "Incorrect email or password") {

                Swal.fire({
                    title: "Login Failed",
                    icon: "error",
                    text: "Incorrect email or password."
                })

            } else {

                Swal.fire({
                    title: "User Not Found",
                    icon: "error",
                    text: `${email} does not exist.`
                })    

            }

        })

    }

    function retrieveUserDetails(token){

        // The token will be sent as part of the request's header information
        // We put "Bearer" in front of the token to follow implementation standards for JWTs
        fetch('http://localhost:4002/b2/users/details', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            // Changes the global "user" state to store the "id" and the "isAdmin" property of the user which will be used for validation across the whole application
            setUser({
                id: data._id,
                isAdmin: data.isAdmin
            });
        })
    }

    useEffect(() => {

        // Validation to enable submit button when all fields are populated and both passwords match
        if(email !== '' && password !== ''){
            setIsActive(true);
        }else{
            setIsActive(false);
        }

    }, [email, password]);

    return (    
            (user.id !== null && user.id !== undefined) ?
            <Navigate to="/" />
            :
            <div className="register-container">
            <Form onSubmit={(e) => authenticate(e)} className="register-form">
                <h1 className="my-5 text-center">Login</h1>
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
                    <Button variant="primary" type="submit" id="loginBtn">
                        Login
                    </Button>
                    : 
                    <Button variant="danger" type="submit" id="loginBtn" disabled>
                        Login
                    </Button>
                }
            </Form>       
            </div>
    )
}