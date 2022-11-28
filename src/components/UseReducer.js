import reduceImage from "../images/reducer-img.png";
import React from "react";

function UseReducer() {

  return (
    <div className="use-reducer  right-side-main">
      <h1 className="use_reducer_h1">UseReducer</h1>
      
      <section>
        <p className="use_reducer_p">
          The <em>useReducer</em> Hook is used to store and update states, just
          like the <em>useState</em> Hook. It accepts a <em>reducer</em>{" "}
          function as its first parameter and the initial state as the second.
        </p>
        <div className="code-section">
          {" "}
          <code>
            const [state, dispatch] = useReducer(reducer, initialState)
          </code>{" "}
        </div>
        <div className="reduce_img">
        <img src={reduceImage} alt="reducer-img" />
      </div>
        <div>
          <h3 className="use_reducer_h3">The dispatch method</h3>
          <p className="use_reducer_p">
            The dispatch function accepts an object that represents the type of
            action we want to execute when it is called. Basically, it sends the
            type of action to the reducer function to perform its job, which, of
            course, is updating the state. The action to be executed is
            specified in our reducer function, which in turn, is passed to the
            useReducer. 
          </p>
          <p>The reducer function will then return the updated state.
            The actions that will be dispatched by our components should always
            be represented as one object with the type and payload key, where
            type stands as the identifier of the dispatched action and payload
            is the piece of information that this action will add to the state.
            The dispatch is the second value returned from the useReducer Hook
            and can be used in our JSX to update the state:</p>
          <div className="code-section">
            <code></code>
          </div>
        </div>

        <div>
          <h3 className="use_reducer_h3">The reducer function</h3>
          <p className="use_reducer_p">
            The reducer function itself accepts two parameters and returns one
            value. The first parameter is the current state, and the second is
            the action. The state is the data we are manipulating. The reducer
            function receives an action, which is executed by a dispatch
            function:
          </p>
          <div className="code-section">
            <code>
              function reducer(state, action) {`{`} {`}`} {``}
              dispatch({`{`} type: 'increment' {`}`})
            </code>
            <p className="use_reducer_p">
              The action is like an instruction you pass to the reducer
              function. Based on the specified action, the reducer function
              executes the necessary state update. If you’ve used a state
              management library like Redux before, then you must have come
              across this pattern of state management.
            </p>
          </div>
          <div className="code-section">
            <code>
              import {"{"}useReducer{"}"}
              from 'react';
            </code>
          </div>
          <br />
          <div className="code-section">
            <code>
              function reducer(state, action)
              {
                // ...
              }
            </code>
          </div>
          <br />
          <div className="code-section">
            <code>
              function MyComponent() {"{"}
              const [state, dispatch] = useReducer(reducer, {"{"} age: 42 {"}"}
              ); {"}"}
            </code>{" "}
          </div>
          <br />
        </div>
      </section>
    </div>
  );
}

export default UseReducer;
