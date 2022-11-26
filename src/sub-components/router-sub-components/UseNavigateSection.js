import useNavigateImage from '../../images/useNavigateImage.png'

function UseNavigateSection() {
    return ( 
        <section className="use-navigate">
            <h2>Use useNavigate to redirect yourself</h2>
            <p>A bit like <code>Link</code> but with a different purpose: it can be used on <code>Next Page</code> or <code>Previous Page</code> buttons to go into a specific component. There are more use to this but we'll mention a non advanced use of it.</p>
            <p>Here is a very simple example</p>
            <div>
                <img className='outlet__image' src={useNavigateImage} alt="" />
            </div>
        </section>
     );
}

export default UseNavigateSection;