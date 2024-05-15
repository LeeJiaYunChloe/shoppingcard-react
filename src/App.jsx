import { useState, useEffect } from 'react'
// import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import genericbanner from './assets/genericbanner.jpg'
import PdtDisplayCSS from './components/PdtDisplay.module.css';
import PdtDisplayCard from './components/PdtDisplayCard';

function App() {

  const fakestoreURL = 'https://fakestoreapi.com/products'
  const [products, setProducts] = useState([]); 
  const [apiFetch, setApiFetch] = useState(false); 
  const [cart, setCart] = useState([]); 
  

  useEffect( () => {
  fetch(fakestoreURL)
    .then((response) => {
      return response.json(); 
    })
    .then((data) => {
      setProducts(data);
      setApiFetch(true); 
    })
  },[]); 

  useEffect( () => {
    console.log(products); 
  }, [products]); 

  return (
    <>
        <Navbar currentCart={cart}/>
        <div className='mainpage'>
          <div className='mainHero'>
            <img className='hero' src={genericbanner} alt='image'></img>
          </div>
          <div className='pdtTitle'>
            <h1>View Our Products</h1>
          </div>
          <div className={PdtDisplayCSS.pdtList}>
            { apiFetch ?
              products.map((product) => {
                return (
                  <PdtDisplayCard key={product.id} toDisplay={product} currentCart={cart}/>
                )
              }) 
                : (
                    <p>Please Wait... </p>
                ) 

              }
          </div>
        </div>
    </>
  )
}

export default App
