import fragments1 from '../../images/fragments1.png'
import fragments2 from '../../images/fragments2.png'


function FragmentsSection() {

    return ( 
        <section className="fragments">
            <h3>Fragments</h3>
            <p>Fragments are two ways of using them and they are JSX used to wrap multiple elements in a component without adding any type of HTML syntax to the DOM.</p>
            <p>Translation:</p>
            <p>they are used following the rule of returning only ONE element, but they allows to don't create anything to show in our <code>index.html</code> show</p>
            <p>The two syntaxes:</p>
            <p>In this one you are not allowed to add keys or any type of JS to it, but just a fragment</p>
            <div>
                <img src={fragments1} alt="<></>" />
            </div>
            <p>In this one you are</p>
            <div>
                <img src={fragments2} alt="Fragment" />
            </div>
        </section>
     );
}

export default FragmentsSection;