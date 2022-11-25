import reduceImage from "../images/reducer-img.png";
import reduceImage1 from "../images/reduce1.png";
import reduceImage2 from "../images/reduce2.png";
import reduceImage3 from "../images/reduce3.png";
import React from "react";

function UseReducer() {
  return (
    <div className="use-reducer right-side-main">
      <h1 className="use_reducer_h1">UseReducer</h1>
      <div className="reduce_img">
        <img src={reduceImage} alt="reducer-img" />
      </div>
      <section>
        <p className="use_reducer_p">
          The <em>useReducer</em> Hook is used to store and update states, just
          like the <em>useState</em> Hook. It accepts a <em>reducer</em>{" "}
          function as its first parameter and the initial state as the second.
        </p>
      </section>
      <section>
        <div className="reduce_img">
          <img src={reduceImage1} alt="" />
        </div>
      </section>
      <section>
        <div>
          <h3 className="use_reducer_h3">The dispatch method</h3>
          <p className="use_reducer_p">
            The dispatch function accepts an object that represents the type of
            action we want to execute when it is called. Basically, it sends the
            type of action to the reducer function to perform its job, which, of
            course, is updating the state. The action to be executed is
            specified in our reducer function, which in turn, is passed to the
            useReducer. The reducer function will then return the updated state.
            The actions that will be dispatched by our components should always
            be represented as one object with the type and payload key, where
            type stands as the identifier of the dispatched action and payload
            is the piece of information that this action will add to the state.
            The dispatch is the second value returned from the useReducer Hook
            and can be used in our JSX to update the state:
          </p>
        </div>
      </section>
      <section>
        <h3 className="use_reducer_h3">The reducer function</h3>
        <p className="use_reducer_p">
          The reducer function itself accepts two parameters and returns one
          value. The first parameter is the current state, and the second is the
          action. The state is the data we are manipulating. The reducer
          function receives an action, which is executed by a dispatch function:
        </p>
        <div className="code-section">
          <img src={reduceImage2} alt="" />
        </div>
      </section>

      <section>
        <p className="use_reducer_p">
          The action is like an instruction you pass to the reducer function.
          Based on the specified action, the reducer function executes the
          necessary state update. If you’ve used a state management library like
          Redux before, then you must have come across this pattern of state
          management.
        </p>
        <div className="reduce_img">
          <img src={reduceImage3} alt="" />
        </div>
      </section>
    </div>
  );
}

export default UseReducer;
