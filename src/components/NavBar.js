import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";


function NavBar() {
    return ( 
        <Fragment>
            <div className="navBar">
                <Link className="navbar-link" to='/'>React App</Link>
                {/* <Link to='/info'>    INFO</Link> */}
                {/* <Link to='/needToKnow'>    NEED TO KNOW</Link> */}
                <Link className="navbar-link"  to='/basics'>React Basics</Link>
                <Link className="navbar-link" to='/components'>Components</Link>
                <Link className="navbar-link" to='/state'>State</Link>
                {/* <Link to='/conditionalRendering'>    CONDITIONAL RENDERING</Link> */}
                <Link className="navbar-link" to='/eventListeners'>Event Listeners</Link>
                <Link className="navbar-link" to='/routerSection' >Router</Link>
                <Link className="navbar-link" to='/contextApi' >Context</Link>
                <Link className="navbar-link" to='/useReducer'>Reducer</Link>
            </div>
            <Outlet/>
        </Fragment>
     );
}

export default NavBar;