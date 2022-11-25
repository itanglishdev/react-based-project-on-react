import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";


function NavBar() {
    return ( 
        <Fragment>
            <div className="navBar">
                <Link className="navbar-link" to='/'>HOME</Link>
                {/* <Link to='/info'>    INFO</Link> */}
                {/* <Link to='/needToKnow'>    NEED TO KNOW</Link> */}
                <Link className="navbar-link"  to='/basics'>     REACT BASICS</Link>
                <Link className="navbar-link" to='/components'>    COMPONENTS</Link>
                <Link className="navbar-link" to='/state'>    State</Link>
                {/* <Link to='/conditionalRendering'>    CONDITIONAL RENDERING</Link> */}
                <Link className="navbar-link" to='/eventListeners'>    EVENT LISTENERS</Link>
                <Link className="navbar-link" to='/routerSection' >    ROUTER SECTION</Link>
                <Link className="navbar-link" to='/contextApi' >    CONTEXT</Link>
                <Link className="navbar-link" to='/useReducer'>    USE REDUCER</Link>
            </div>
            <Outlet/>
        </Fragment>
     );
}

export default NavBar;