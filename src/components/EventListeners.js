import eventImage from "../images/react-event.png";
import htmlImage from "../images/html-event.png";
import onchangeImage from "../images/onChange.png";
import onsubmitImage from "../images/onSubmit.png";

function EventListeners() {

  return (
    <div className="event-listener  right-side-main">
      <section className="react-event">
        <h2 className="reactEvent_h2">Events Listeners</h2>
        <p className="reactEvent_p">
          Just like <em>HTML DOM</em> events, <em>React</em> can perform actions
          based on user events. <em>React</em> has the same events as HTML:{" "}
          <em>click</em>, <em>change</em>, <em>mouseover</em> etc.
        </p>
      </section>
      <section className="addingEvents">
        <h3 className="addingevents_h3">Adding Events</h3>
        <p className="addingevents_p">
          React events are written in camelCase syntax: onClick instead of
          onclick. React event handlers are written inside curly braces:{``}{" "}
          <br />
          <br /> {``} onClick={`{`}shoot{`}`} .
        </p>
        <section className="reactEvent_section">
          <div className="react-event_img">
            <img src={eventImage} alt="" />
          </div>
          <p>instead of onClick="shoot()"</p>
          <div className="html-event_img">
            <img src={htmlImage} alt="" />
          </div>
          <section>
            <p className="onChange_p">
              <em>onChange</em>
            </p>
            <div className="onChange_img">
              <img src={onchangeImage} alt="" />
            </div>
          </section>{" "}
          <br />
          <section>
            <p className="onSubmit_p">
              <em>onSubmit</em>
            </p>
            <div className="onSubmit_img">
              <img src={onsubmitImage} alt="" />
            </div>
          </section>
        </section>
      </section>
    </div>
  );

}

export default EventListeners;
