import useEffectImage1 from "../images/useEffect1.png";

function State() {
  return (
    <section className="hooks">
      <h4>What is a Hook?</h4>
      <p>
        A Hook is a special function that lets you “hook into” React features.
        For example, <em>useState</em> is a Hook that lets you add React state
        to function components.{" "}
      </p>
      <h1 className="use_state_h1">useState</h1>
      <div>
        <p>
          React components will often need dynamic information in order to
          render. For example, imagine a component that displays the score of a
          basketball game. The score of the game might change over time, meaning
          that the score is dynamic. Our component will have to know the score,
          a piece of dynamic information, in order to render in a useful way.
        </p>
        <p>
          There are two ways for a component to get dynamic information:{" "}
          <em>props</em> and <em>state</em>.
        </p>
        <h2 className="use_state_h2">
          Import <em>useState</em>
        </h2>
        <p className="use_state_p">
          When we use <em>useState</em> we need to import it into our component.
        </p>
      </div>
      <div className="use-effect">
        <h2 className="use_effect_h2">useEffect</h2>
        <p>
          The <em>Effect Hook</em> lets you perform side effects in function
          components, using this <em>Hook</em>, you tell <em>React</em> that
          your component needs to do something after render.
        </p>
        <div className="effect_img">
          <img src={useEffectImage1} alt="" />
        </div>
      </div>
    </section>
  );
}

export default State;
