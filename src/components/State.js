import useEffectImage1 from "../images/useEffect1.png";
import useEffectImage2 from "../images/useEffect2.png";
import useEffectImage3 from "../images/useEffect3.png";
import useStateImage1 from "../images/useState.png";
import importState from "../images/importstate.png";
import updateState from "../images/updateState.png";

function State() {
  return (
    <div className="hooks right-side-main">
      <section className="hook">
        <h2>What is a Hook?</h2>
        <p>
          A Hook is a special function that lets you “hook into” React features.
          For example, <em>useState</em> is a Hook that lets you add React state
          to function components.{" "}
        </p>
      </section>
      <section className="useState">
        <h3 className="use_state_h1">useState</h3>
        <div>
          <p>
            React components will often need dynamic information in order to
            render. For example, imagine a component that displays the score of
            a basketball game. The score of the game might change over time,
            meaning that the score is dynamic. Our component will have to know
            the score, a piece of dynamic information, in order to render in a
            useful way.
          </p>
          <p>
            There are two ways for a component to get dynamic information:{" "}
            <em>props</em> and <em>state</em>.
          </p>
          <div className="state_img">
            <img src={useStateImage1} alt="" />
          </div>
          <section className="importState">
            <h3 className="use_state_h2">
              Import <em>useState</em>
            </h3>
            <p className="use_state_p">
              When we use <em>useState</em> we need to import it into our
              component.
            </p>
            <div className="importState_img">
              <img src={importState} alt="" />
            </div>
          </section>
          <section className="updatestate">
            <h3 className="updatestate_h3">Update State</h3>
            <p className="updatestate_p">
              To update our state, we use our state updater function.
            </p>
            <div className="updateState_img">
              <img src={updateState} alt="" />
            </div>
          </section>
        </div>
      </section>
      <section className="use-effect">
        <h3 className="use_effect_h2">useEffect</h3>
        <p>
          The <em>Effect Hook</em> lets you perform side effects in function
          components, using this <em>Hook</em>, you tell <em>React</em> that
          your component needs to do something after render.
        </p>
        <div className="effect_img">
          <img src={useEffectImage1} alt="" />
        </div>
        <div>
          <h4>Runs on every render</h4>
          <div className="effect_img">
            <img src={useEffectImage2} alt="" />
          </div>
        </div>
        <div>
          <h4>Props or state values</h4>
          <div className="effect_img">
            <img src={useEffectImage3} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default State;
