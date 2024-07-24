import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import AppNavbar from './components/AppNavbar';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import ProductsCatalog from './pages/ProductsCatalog'
import ProductView from './pages/ProductView'

function App() {
  const [user, setUser] = useState({
    id: null,
    isAdmin: null
  });

  function unsetUser() {
    setUser({
      id: null,
      isAdmin: null
    });
    localStorage.clear();
  }

  useEffect(() => {
    fetch('http://localhost:4002/b2/users/details', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      if (data && data._id) {
        setUser({
          id: data._id,
          isAdmin: data.isAdmin
        });
      } else {
        setUser({
          id: null,
          isAdmin: null
        });
      }
    });
  }, []);

  useEffect(() => {
    console.log(user);
    console.log(localStorage);
  }, [user]);

  return (
    <UserProvider value={{ user, setUser, unsetUser }}>
      <Router>
        <AppNavbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/products" element={<ProductsCatalog />}/>
            <Route path="/products/:productId" element={<ProductView />}/>
          </Routes>
        </Container>
      </Router>
    </UserProvider>
  );
}

export default App;

