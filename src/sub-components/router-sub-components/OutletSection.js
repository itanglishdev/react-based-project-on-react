import Outlet1 from '../../images/Outlet1.png'
import Outlet2 from '../../images/Outlet2.png'
import Outlet3 from '../../images/Outlet3.png'
import Outlet4 from '../../images/Outlet4.png'

function OutletSection() {
    return ( 
        <section className="outlet">
            <h2>What is <code>Outlet</code> ?</h2>
            <p>It is nothing but a place holder that allows child Routes components to be rendered. Not like <code>children</code>, it is used only for this scope.</p>
            <div>
                <img src={Outlet1} alt="Outlet1" />
            </div>
            <p>Don't forget to import from <code>react-router-dom</code>.</p>

            <div>
                <img src={Outlet2} alt="Outlet2" />
            </div>
            <div>
                <img src={Outlet3} alt="Outlet3" />
            </div>
            <div>
                <img src={Outlet4} alt="Outlet4" />
            </div>
        </section>
     );
}

export default OutletSection;