import PropTypes from 'prop-types';

function AddToCart({product, currentCart}) {

    function click() {
        currentCart.push(product); 
        console.log(currentCart); 
    }

    // console.log(product); 

    return (
        <>
            <button onClick={click} className='addtocart'>Add To Cart!</button>
        </>
    )
}

AddToCart.propTypes = {
    product: PropTypes.object, 
    currentCart: PropTypes.array, 
    // click: PropTypes.func
}

export default AddToCart