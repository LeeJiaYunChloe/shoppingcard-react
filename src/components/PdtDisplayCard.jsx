import PdtDisplayCSS from './PdtDisplay.module.css'
import AddToCart from './AddCartBtn';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function PdtDisplayCard({toDisplay, currentCart}) {

    return (
        <div className={PdtDisplayCSS.onePdt}>
            <img src={toDisplay.image} alt='pdtPic'></img>
            <Link to={`/product/${toDisplay.id}`} state={{ thisProduct: toDisplay}}>
                <h4>{toDisplay.title}</h4>
            </Link>
            <h5>Price: ${toDisplay.price}</h5>
            <AddToCart product={{toDisplay}} currentCart={currentCart}/>
        </div>
    ); 
}

PdtDisplayCard.propTypes = {
    toDisplay: PropTypes.object, 
    currentCart: PropTypes.array
}

export default PdtDisplayCard