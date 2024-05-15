import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TheCart from './components/TheCart.jsx'
import SubmittedPage from './components/SubmittedPage.jsx'
import SinglePdt from './components/SinglePdt.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  
  }, 
  
  {
    path:"/cart", 
    element: <TheCart />
  }, 

  {
    path: "/ordersubmitted", 
    element: <SubmittedPage />
  }, 

  {
    path:'/product/:id',
    element: <SinglePdt />
  }
]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

// No database, so no login needed 
// Home Page 
// Cart Page
// Fetch store items from external API 
// Navbar permanently at top 
// Once order is submitted, shopping cart resets