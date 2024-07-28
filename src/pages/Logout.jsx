import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import Swal from 'sweetalert2';
import UserContext from '../context/UserContext';

export default function Logout() {
    const { setUser, unsetUser } = useContext(UserContext);
    const navigate = useNavigate(); 

    useEffect(() => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You are about to log out!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, log out',
            cancelButtonText: 'No, cancel',
            customClass: {
                confirmButton: 'sweet-confirm',
                cancelButton: 'sweet-cancel'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                unsetUser();
                setUser({
                    id: null,
                    isAdmin: null,
                });
                localStorage.clear(); 
                navigate('/login'); 
            } else if (result.isDismissed) {
                
                navigate('/'); 
            }
        });
    }, [setUser, unsetUser, navigate]); 


    return null;
}
