import {FaReact } from 'react-icons/fa'

function Home() {
    return ( 
        <div className="home right-side-main">
            <h1>A React App to learn how to build a React App</h1>
            <h2>Addressed to people who do not enjoy React (...yet), but want to learn it</h2>
            <section>
                <p>First and foremost, this is a beginner friendly guide and does not want to substitute the official React <a href="https://beta.reactjs.org/"> documentation</a> . It is an extrapolation of it, build by three Junior Web Developers to try and master it themselves.</p>
                <p>We really hope it helps!</p>
            </section>
            <section>
                <h2>What is React?</h2>
                <p>React is a JavaScript Front End Library developed by Facebook (Instagram, Netflix, AirBnb and many others are build on it) to simplify a developer's life on building fast user interfaces for websites and applications using a declarative method. Work smarter, not harder!</p>
                <p>Main concept is the virtual DOM: a tree of small pieces based on JavaScript that mimics a DOM tree with the minimum amount of manipulation of it to keep all the components up to date.</p>
                <p>Extremely light and fast performing with components and concepts "simple" to figure out (we'll do our best to simplify it even more!).</p>
                <p>With no need to ever refresh the page, React is component based, it allows everything to be reused in any part of the project multiple times, thus avoiding and totally skipping extra coding</p>
            </section>
            <h2>Why is it named React?</h2>
            <p>We assume it is based on the logo: multiple small parts create a big reaction!</p>
            <FaReact style={{width: '80px',height: '80px', marginLeft:'60px'}} /> 
        </div>
     );
}

export default Home;