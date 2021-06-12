import React, { useContext, useState } from 'react';
import logo from '../../images/logo.png';
import { Button , Form, Nav, Navbar, FormControl ,Logo} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';

const Header = () => {
    const [cart, setCart] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    return ( 
        <div className="header">
          <h4>{loggedInUser.email}</h4>
            <img src={logo} alt=""/>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory Here</Link>
                <button onClick={ () => setLoggedInUser({}) }>Sign Out</button>
            </nav>
            <>
  <Navbar bg="dark" variant="dark">
    <Form inline className="ml-5">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
    <b class="text-white ml-5">  <FontAwesomeIcon icon={faShoppingCart} /></b>
  </Navbar>
  <br />
</>
      </div>
    );
};

export default Header;