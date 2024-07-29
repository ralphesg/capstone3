import { useState, useEffect, useContext } from 'react';
import AdminView from '../components/AdminView';
import UserView from '../components/UserView';
import UserContext from '../context/UserContext';


export default function ProductsCatalog() {

    const [products, setProducts] = useState([]);
    const {user} = useContext(UserContext);

    const fetchData = () => {
        let fetchUrl = user.isAdmin === true ? "https://capstone2-weuf.onrender.com/b2/products/all" : "https://capstone2-weuf.onrender.com/b2/products/active"

        fetch(fetchUrl, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {         
            
            if(data.message === "No product found"){
                setProducts([])
            } else {
                setProducts(data.products);
            }
        });
    }

   useEffect(() => {

        fetchData();

    }, [user]);

    return(
       
        (user.isAdmin === true)
        ?
            <AdminView productsData={products} fetchData={fetchData}/>
        :
            <UserView productsData={products} fetchData={fetchData}/>
            
    )
}