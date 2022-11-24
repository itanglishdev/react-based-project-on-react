import eventImage from "../images/react-event.png";

function EventListeners() {
  return (
    <div className="event-listener">
      <section className="react-event">
        <h2 className="reactEvent_h2">React Events</h2>
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
          onclick. React event handlers are written inside curly braces:
          onClick={`{`}shoot{`}`} instead of onClick="shoot()".
        </p>
        <section className="reactEvent_section">
          <h4 className="reactevent_h4">React:</h4>

          <div className="react-event_img">
            <img src={eventImage} alt="" />
          </div>
        </section>
      </section>
    </div>
  );
}

export default EventListeners;
