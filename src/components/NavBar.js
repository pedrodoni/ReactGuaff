import {Link} from 'react-router-dom';
import CartWidget from './CartWidget/CartWidget';

function Navbar (){
   
    return(
        <div className="layout">
            <div>
            <Link to={'/'}><img src="../images/logo4.png"/></Link>
            </div>
            <div className="grow3">
                <ul className="ulHeader">
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/item/Cats'}>Cat Store</Link>
                    </li>
                    <li>
                        <Link to={'/item/Dogs'}>Dog Store</Link>
                    </li>   
                    <li>
                        <Link to={'/item'}>All Products</Link>
                    </li>                 
                </ul>
            </div>
            
            <CartWidget/> 
        </div>
        
    )
}

export default Navbar;