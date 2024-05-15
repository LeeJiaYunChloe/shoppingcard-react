import Navbar from "./Navbar"
import { useLocation } from 'react-router-dom';
import PdtDisplayCSS from './PdtDisplay.module.css'
// import AddToCart from "./AddCartBtn";
import { Link } from 'react-router-dom';


function SinglePdt() {
    const location = useLocation();
    const thisProduct = location.state?.thisProduct;
    // console.log({thisProduct}); 

    return (
        <>
            <Navbar/>
            <div className={PdtDisplayCSS.layoutOne}>
                <div>
                    <img src={thisProduct.image} alt='pdtImg'></img>
                </div>
                <div className={PdtDisplayCSS.info}>
                    <h2>{thisProduct.title}</h2>
                    <h5>${thisProduct.price}</h5>
                    <p>{thisProduct.description}</p>
                    {/* <AddToCart product={{thisProduct}} /> */}
                    <Link to='/'>Go Back</Link>
                </div>
            </div>
        </>
    )
}

export default SinglePdt