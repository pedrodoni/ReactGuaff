import {Link} from 'react-router-dom';

function Navbar (){
   
    return(
        <div className="layout">
            <div>
            <a href="#!"><img src="./images/logo4.png"/></a>
            </div>
            <div className="grow3">
                <ul className="ulHeader">
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/cats'}>Cat Store</Link>
                    </li>
                    <li>
                        <Link to={'/dogs'}>Dog Store</Link>
                    </li>                  
                </ul>
            </div>
            
            
        </div>
        
    )
}

export default Navbar;