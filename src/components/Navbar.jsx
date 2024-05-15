import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faShopLock } from '@fortawesome/free-solid-svg-icons'
import NavbarCSS from './Navbar.module.css'
import { Link } from 'react-router-dom';

function Navbar({currentCart}) {

    return (
        <>
            <div className={NavbarCSS.mainbar}>
                <div className={NavbarCSS.icons}>
                    <Link to='/'>
                        <FontAwesomeIcon icon={faShopLock} />
                    </Link>
                </div>
                <div className={NavbarCSS.icons}>
                    <Link to={{pathname: '/cart', state: {currentCart}}} >
                        <FontAwesomeIcon icon={faCartShopping} />
                    </Link>
                </div>
            </div>
        </>
    )
}

Navbar.propTypes = {
    currentCart: PropTypes.array,
}

export default Navbar