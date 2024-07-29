import { useState, useEffect, useContext } from 'react';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import { useNavigate, Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../context/UserContext';
import '../style.css';

export default function Register() {

    const {user} = useContext(UserContext);
    const navigate = useNavigate(); 

    // State hooks to store the values of the input fields
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNo, setMobileNo] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // State to determine whether submit button is enable or not
    const [isActive, setIsActive] = useState(false);

    function registerUser(e){
        // Prevents the page redirection via form submission
        e.preventDefault();

        fetch("https://capstone2-weuf.onrender.com/b2/users/register", {

            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                mobileNo: mobileNo,
                password: password
            })

        })
        .then(res => res.json())
        .then(data => {

            if(data.message === "Registered Successfully"){
                setFirstName("");
                setLastName("");
                setEmail("");
                setMobileNo("");
                setPassword("");
                setConfirmPassword("");

                Swal.fire({
                    title: "Registration Successful",
                    icon: "success",
                    text: "Thank you for registering!",
                    customClass: {
                        confirmButton: 'sweet-warning'
                    },
                }).then(() => {
                    navigate('/login');
                });

            }else if(data.error === "Email invalid"){
                Swal.fire({
                    title: "Invalid Email Format",
                    icon: "error",
                    text: "Invalid email format.",
                    customClass: {
                        confirmButton: 'sweet-warning'
                    }
                })
            }else if(data.error === "Mobile number invalid"){
                Swal.fire({
                    title: "Mobile Number Invalid",
                    icon: "error",
                    text: "Invalid mobile number.",
                    customClass: {
                        confirmButton: 'sweet-warning'
                    }
                })
            }else if(data.error === "Password must be atleast 8 characters"){
                Swal.fire({
                    title: "Password Invalid",
                    icon: "error",
                    text: "Password must be atleast 8 characters long.",
                    customClass: {
                        confirmButton: 'sweet-warning'
                    }
                })
            }else{
                Swal.fire({
                    title: "Something went wrong.",
                    icon: "error",
                    text: "Please try again later or contact us for assistance.",
                    customClass: {
                        confirmButton: 'sweet-warning'
                    }
                });
            }
        })
    }

    useEffect(() => {
        if((firstName !== "" && lastName !== "" && email !== "" && mobileNo !== "" && password !== "" && confirmPassword !== "") && (password === confirmPassword) && (mobileNo.length === 11)){

            setIsActive(true)

        } else {

            setIsActive(false)

        }
    }, [firstName, lastName, email, mobileNo, password, confirmPassword])

    return (
        (user.id !== null && user.id !== undefined) ?
     <Navigate to="/login" />
     :
     <Container className="register-container d-flex justify-content-center">
         <Row className="w-100">
            <Col sx={3} md={4} lg={5} className="mx-auto">
                 <Form onSubmit={(e) => registerUser(e)} className="register-form">
                     <h2 className="text-center">Register</h2>
                     <p className="text-center">Create your account. It’s free and only takes a minute.</p>
                     <Col className="col mx-3">
                     <Form.Group>
                     <Form.Label>First Name </Form.Label>
                         <Form.Control
                             id="txtFirstName"
                             type="text"
                             required
                             value={firstName}
                             onChange={e => { setFirstName(e.target.value) }}
                         />
                     </Form.Group>
                     <Form.Group>
                     <Form.Label>Last Name </Form.Label>
                         <Form.Control
                             id="txtLastName"
                             type="text"
                             required
                             value={lastName}
                             onChange={e => { setLastName(e.target.value) }}
                         />
                     </Form.Group>
                     <Form.Group>
                     <Form.Label>Email Address </Form.Label>
                         <Form.Control
                             id="txtEmail"
                             type="email"
                             required
                             value={email}
                             onChange={e => { setEmail(e.target.value) }}
                         />
                     </Form.Group>
                     </Col>
                     <Col className="col mx-3">
                     <Form.Group>
                     <Form.Label>Mobile No </Form.Label>
                         <Form.Control
                             id="txtMobileNo"
                             type="number"
                             required
                             value={mobileNo}
                             onChange={e => { setMobileNo(e.target.value) }}
                         />
                     </Form.Group>
                     <Form.Group>
                     <Form.Label>Password </Form.Label>
                         <Form.Control
                             id="txtPassword"
                             type="password"
                             required
                             value={password}
                             onChange={e => { setPassword(e.target.value) }}
                         />
                     </Form.Group>
                     <Form.Group>
                     <Form.Label>Confirm Password </Form.Label>
                         <Form.Control
                             id="txtConfirmPassword"
                             type="password"
                             required
                             value={confirmPassword}
                             onChange={e => { setConfirmPassword(e.target.value) }}
                         />
                     </Form.Group>
                     </Col>

                     {isActive ? 
                       <Button className="btn mt-3" variant="success" type="submit" id="submitBtn">Register Now</Button> 
                       : 
                       <Button className="btn mt-3" variant="danger" type="submit" id="submitBtn" disabled>Register Now</Button>
                     }
                 </Form>
            </Col>
        </Row>
    </Container>
     
    )
}