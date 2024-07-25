import { useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

export default function Logout(){

	const { setUser, unsetUser } = useContext(UserContext);

	unsetUser();

	// Placing the "setUser" function inside of a useEffect is necessary because a state of another component cannot be updated while trying to render a different component
	// By adding the useEffect, this will allow the Logout page to render first before triggering the useEffect which changes the state of our user
	useEffect(() => {
		setUser({
			id: null,
			isAdmin: null,
			email: null
		})
	})
	// The "localStorage.clear()" method allows us to clear the information in the localStorage ensuring that there are no information stored in our browser
	// localStorage.clear();
	// Redirect back to login
	return (
		<Navigate to='/login' />
	)
}