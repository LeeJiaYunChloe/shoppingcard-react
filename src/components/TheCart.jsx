import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';


function TheCart({currentCart}) {
    const fakestoreURL = 'https://fakestoreapi.com/products'

    useEffect( () => {
        fetch(fakestoreURL)
          .then((response) => {
            return response.json(); 
          })
          .then((data) => {
            return data; 
          })
        },[]); 

        const location = useLocation();
        const findCart = location.state?.currentCart;
        console.log(findCart);
        

    return (
        <>
        <Navbar />
        <h1> You're Welcome, Sweetie </h1>
        <Link to="/">Go Back</Link>
        </>
    )
    
}

TheCart.propTypes = {
    currentCart: PropTypes.array, 
}

export default TheCart