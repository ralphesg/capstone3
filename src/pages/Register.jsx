import { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
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
    const [mobileNo, setMobileNo] = useState(0);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // State to determine whether submit button is enable or not
    const [isActive, setIsActive] = useState(false);

    function registerUser(e){
        // Prevents the page redirection via form submission
        e.preventDefault();

        fetch("http://localhost:4002/b2/users/register", {

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
                    text: "Thank you for registering!"
                }).then(() => {
                    navigate('/login');
                });

            }else if(data.error === "Email invalid"){
                Swal.fire({
                    title: "Invalid Email Format",
                    icon: "error",
                    text: "Invalid email format."
                })
            }else if(data.error === "Mobile number invalid"){
                Swal.fire({
                    title: "Mobile Number Invalid",
                    icon: "error",
                    text: "Invalid mobile number."
                })
            }else if(data.error === "Password must be atleast 8 characters"){
                Swal.fire({
                    title: "Password Invalid",
                    icon: "error",
                    text: "Password must be atleast 8 characters long."
                })
            }else{
                Swal.fire({
                    title: "Something went wrong.",
                    icon: "error",
                    text: "Please try again later or contact us for assistance."
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
     <div className="register-container">
         <Form onSubmit={(e) => registerUser(e)} className="register-form">
             <h1 className="text-center">Register</h1>
             <p className="text-center">Create your account. It’s free and only takes a minute.</p>
             <Form.Group>
             <Form.Label>First Name </Form.Label>
                 <Form.Control
                     id="txtFirstName"
                     type="text"
                     placeholder="John"
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
                     placeholder="Doe"
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
                     placeholder="name@mail.com"
                     required
                     value={email}
                     onChange={e => { setEmail(e.target.value) }}
                 />
             </Form.Group>
             <Form.Group>
             <Form.Label>Mobile No </Form.Label>
                 <Form.Control
                     id="txtMobileNo"
                     type="mobileNo"
                     placeholder="12345678912"
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
                     placeholder="Password"
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
                     placeholder="Confirm Password"
                     required
                     value={confirmPassword}
                     onChange={e => { setConfirmPassword(e.target.value) }}
                 />
             </Form.Group>

             {isActive ?
                 <Button variant="success" type="submit" id="submitBtn">Register Now</Button>
                 :
                 <Button variant="success" type="submit" id="submitBtn" disabled>Register Now</Button>
             }
         </Form>
     </div>
     
    )
}