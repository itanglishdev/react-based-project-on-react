import RenderingDataImage from '../../images/RenderingDataImage.png'

function RenderingData() {

    return ( 
        <section className="rendering-data">
            <h3>Rendering data in a component</h3>
            <p>Fortunately and unfortunately, the only way to render/display data in <code>react.js</code> is by <code>map()</code>, <code>filter()</code> and sometimes even <code>reduce()</code> high order functions. That is what <code>JSX</code> allows us.</p>
            <p>Don't ever forget <code>key</code> in your iteration. <em>EVER!</em></p>
            <p>Don't forget also: you can iterate <em>only arrays</em>.</p>
            <div>
                <img src={RenderingDataImage} alt="RenderingData" />
            </div>
        </section>
     );
}

export default RenderingData;