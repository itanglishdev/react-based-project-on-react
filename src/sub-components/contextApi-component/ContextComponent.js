import context1 from '../../images/context1.png'
import context2 from '../../images/context2.png'
import context3 from '../../images/context3.png'


function ContextComponent() {

    return (
        <section className="context">
            <h3>Context</h3>
            <p>To avoid passing props down and more than two levels (props drilling) and through sibling components, we do have to add context and useContext to our arsenal. </p>
            <p>We use it manage global data, global state, theme, settings, authentication and more. Basically what we would like to reuse in other parts of our app</p>
            <p>Using context in <code>react</code> rquires <em>creating</em>, <em>providing</em> and <em>consuming</em> the context</p>
            <p>Let's create it: we are creating the context instance</p>
            <div>
                <img src={context1} alt="" />
            </div>
            <p>Let's provide it: we provide it as context to it's child components</p>
            <div>
                <img src={context2} alt="" />
            </div>
            <p>Let's consume it: be bring our context where we want to supply it</p>
            <div>
                <img src={context3} alt="" />
            </div>
        </section>
      );
}

export default ContextComponent;