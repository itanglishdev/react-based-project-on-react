import BrowseRouterSetup from'../../images/BrowserRouterSetup.png'
import routesRoute from '../../images/RoutesRouteSetup.png'

function SetUp() {
    return ( 
      <>
          <section className="set-up">
            <h2>Set up your Router</h2>
            <p>Nothing simpler than setting it all up: go to your terminal and add it to your project in the folder and go!</p>
            <code>npm i react-router-dom</code>
            <p>Then head to the main <code>index.js</code> .</p>
            <code>import {"{"} BrowserRouter {"}"} from 'react-router-dom</code>
            <p>at the top of your file and wrap your App with it.</p>
            <div>
                <img className='outlet__image' src={BrowseRouterSetup} alt="setup" />
            </div>
        </section>
        <section>
            <h2>Add Routes and Route</h2>
            <p>Head to your App component, import <code>Routes Route</code> , wrap your <code>Route</code>  with <code>Routes</code> .(That's another mouthful!)</p>
            <p>Each single <code>Route</code> will be the path (connection) to your component. In this case we have  <code>Home About Contact</code> .</p>
            <div>
                <img className='outlet__image' src={routesRoute} alt="" />
            </div>
        </section>
      </>
     );
}

export default SetUp;