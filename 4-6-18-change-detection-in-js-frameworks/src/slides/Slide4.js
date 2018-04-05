import React from "react";
import { Slide, Step, Quote } from "../components";

const S = () => (
  <Slide title="MVC Frameworks">
    <Step index={0}>
      <p>
        Popularized concept of <b>data binding</b> -- view automatically changes
        as model changes & vice-versa
      </p>
    </Step>
    <Step index={1} title="Angular (2010)">
      <Quote>
        Whenever anything changes, I'll go over everything and see if anything
        should update.
      </Quote>
      <p>
        Detect changes via <b>dirty-checking</b> -- on action (user interaction,
        AJAX...), iterate over array of watchers and see if anything changed
      </p>
      <h3>Limitations</h3>
      <p>Scales poorly; equality comparisons can get expensive</p>
      <p>Changes can cause changes; watcher array resolved via BFS</p>
    </Step>
    <Step index={2} title="Ember (2011)">
      <Quote>
        As long as you let me know whenever anything changes, I'll keep
        everything updated.
      </Quote>
      <p>
        Detects changes by <b>knowing all changes</b> -- everything goes through
        Ember's API, which dispatches events on change
      </p>
      <h3>Limitations</h3>
      <p>
        Have to use Ember classes for everything (can't use POJOs like Angular)
      </p>
      <p>
        Changes can cause changes; because of asynchronous event model an event
        can be "outdated"
      </p>
    </Step>
    <Step index={3}>
      <p>
        Honorable mentions: <b>Knockout (2010)</b>
      </p>
    </Step>
  </Slide>
);

S.label = "MVC Frameworks";

export default S;
