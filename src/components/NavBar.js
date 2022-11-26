import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
// import ReactLogo1 from "./ReactLogo1";
import reactLogo1 from '../images/reactjs-ar21.svg'


function NavBar() {
    return ( 
        <Fragment>
            <div className="navBar">
                <Link className="navbar-link" to='/'><div  style={{backgroundImage : `url(${reactLogo1})`, height:'50px',width:'110px', paddingBottom:'3px'}}/></Link>
                {/* <Link to='/info'>    INFO</Link> */}
                {/* <Link to='/needToKnow'>    NEED TO KNOW</Link> */}
                <Link className="navbar-link"  to='/basics'>React Basics</Link>
                <Link className="navbar-link" to='/components'>Components</Link>
                <Link className="navbar-link" to='/state'>Hooks</Link>
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