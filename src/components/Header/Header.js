import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { Button , Form, Nav, Navbar, FormControl ,Logo} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import Product from '../Product/Product';

const Header = () => {
    const [cart, setCart] = useState([]);
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
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